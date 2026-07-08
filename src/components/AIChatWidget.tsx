import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Trash2,
  Minus,
  Maximize2,
  Minimize2,
  Download,
} from "lucide-react";
import AIAvatar, { type AvatarState } from "./AIAvatar";

const FIRST_VISIT_KEY = "sa_chat_first_visit_v1";

type Msg = { role: "user" | "assistant"; content: string };

const CHAT_URL = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/chat`;
const STORAGE_KEY = "sa_chat_history_v1";

const SUGGESTED = [
  "What does Saurabh do?",
  "Tell me about his AI SEO experience",
  "How can I hire him?",
  "What is GEO / LLM optimization?",
];

const WELCOME: Msg = {
  role: "assistant",
  content:
    "Hi! 👋 I'm Saurabh's AI assistant. Ask me about his AI SEO, GEO, LLM optimization, vibe coding, automation work — or how to hire him.",
};

// ---- Speech Recognition (typed loosely; browser-vendored) ----
const getSR = (): any =>
  (typeof window !== "undefined" &&
    ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition)) ||
  null;

const AIChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [fullscreen, setFullscreen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [listening, setListening] = useState(false);
  const [ttsOn, setTtsOn] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(() => {
    try {
      const raw = typeof window !== "undefined" ? localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) return parsed;
      }
    } catch {}
    return [WELCOME];
  });
  const scrollRef = useRef<HTMLDivElement>(null);
  const recogRef = useRef<any>(null);
  const speakBufferRef = useRef<string>("");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [firstVisit, setFirstVisit] = useState<boolean>(() => {
    try { return !localStorage.getItem(FIRST_VISIT_KEY); } catch { return true; }
  });
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);

  // Welcome popup for first-time visitors
  useEffect(() => {
    if (!firstVisit) return;
    const timer = setTimeout(() => setShowWelcomePopup(true), 1200);
    return () => clearTimeout(timer);
  }, [firstVisit]);

  // Derived avatar state
  const avatarState: AvatarState = isSpeaking
    ? "speaking"
    : loading
    ? "thinking"
    : listening
    ? "listening"
    : "idle";

  // Persist
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages]);

  // Auto-scroll
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open, minimized, loading]);

  // Cleanup speech on close
  useEffect(() => {
    if (!open) {
      try { recogRef.current?.stop(); } catch {}
      window.speechSynthesis?.cancel?.();
    }
  }, [open]);

  const speak = (text: string) => {
    if (!ttsOn || typeof window === "undefined" || !window.speechSynthesis) return;
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.rate = 1;
      u.pitch = 1;
      u.onstart = () => setIsSpeaking(true);
      u.onend = () => setIsSpeaking(false);
      u.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(u);
    } catch {}
  };

  const toggleMic = () => {
    const SR = getSR();
    if (!SR) {
      alert("Voice input isn't supported in this browser. Try Chrome or Edge.");
      return;
    }
    if (listening) {
      try { recogRef.current?.stop(); } catch {}
      setListening(false);
      return;
    }
    const r = new SR();
    r.lang = navigator.language?.startsWith("hi") ? "hi-IN" : "en-US";
    r.interimResults = true;
    r.continuous = false;
    r.onresult = (e: any) => {
      let txt = "";
      for (let i = e.resultIndex; i < e.results.length; i++) txt += e.results[i][0].transcript;
      setInput(txt);
    };
    r.onend = () => setListening(false);
    r.onerror = () => setListening(false);
    recogRef.current = r;
    setListening(true);
    try { r.start(); } catch { setListening(false); }
  };

  const send = async (override?: string) => {
    const text = (override ?? input).trim();
    if (!text || loading) return;
    const userMsg: Msg = { role: "user", content: text };
    const baseHistory = [...messages, userMsg];
    setMessages(baseHistory);
    setInput("");
    setLoading(true);
    speakBufferRef.current = "";

    let acc = "";
    setMessages((p) => [...p, { role: "assistant", content: "" }]);
    const upsert = (chunk: string) => {
      acc += chunk;
      setMessages((prev) =>
        prev.map((m, i) => (i === prev.length - 1 ? { ...m, content: acc } : m))
      );
    };

    try {
      const resp = await fetch(CHAT_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
        },
        body: JSON.stringify({ messages: baseHistory }),
      });

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) throw new Error("Too many requests. Please wait a moment.");
        if (resp.status === 402) throw new Error("AI credits exhausted.");
        throw new Error("Chat failed. Please try again.");
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buf = "";
      let done = false;
      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buf += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buf.indexOf("\n")) !== -1) {
          let line = buf.slice(0, idx);
          buf = buf.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") { done = true; break; }
          try {
            const parsed = JSON.parse(json);
            const c = parsed.choices?.[0]?.delta?.content;
            if (c) upsert(c);
          } catch {
            buf = line + "\n" + buf;
            break;
          }
        }
      }
      if (acc) speak(acc);
    } catch (e: any) {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: "assistant",
          content: `⚠️ ${e.message || "Something went wrong."}`,
        };
        return copy;
      });
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    if (!confirm("Clear this chat?")) return;
    setMessages([WELCOME]);
    try { localStorage.removeItem(STORAGE_KEY); } catch {}
  };

  const exportChat = () => {
    const text = messages
      .map((m) => `${m.role === "user" ? "You" : "AI"}: ${m.content}`)
      .join("\n\n");
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `saurabh-chat-${new Date().toISOString().slice(0, 10)}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const panelSize = fullscreen
    ? "w-screen h-screen max-w-none max-h-none rounded-none bottom-0 right-0 left-0 top-0"
    : minimized
    ? "w-[92vw] max-w-sm h-14"
    : "w-[92vw] max-w-sm h-[70vh] max-h-[560px]";

  return (
    <div
      className={`fixed z-[60] ${fullscreen ? "inset-0" : "right-4 md:right-6"}`}
      style={
        fullscreen
          ? {}
          : { bottom: "calc(env(safe-area-inset-bottom) + 5.5rem)" }
      }
    >
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 280, damping: 24 }}
            className={`${fullscreen ? "absolute inset-0" : "absolute bottom-16 right-0"} ${panelSize} glass-card border-primary/30 shadow-[0_20px_60px_-10px_hsl(var(--primary)/0.5)] flex flex-col overflow-hidden`}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-3 py-2.5 border-b border-border bg-gradient-to-r from-primary/15 via-accent/10 to-primary/15">
              <div className="flex items-center gap-2 min-w-0">
                {/* Premium 3D AI avatar */}
                <AIAvatar state={avatarState} size={36} />
                <div className="min-w-0">
                  <p className="text-sm font-display font-semibold truncate">Saurabh's AI Assistant</p>
                  <p className="text-[10px] text-muted-foreground truncate">
                    {loading ? "thinking…" : isSpeaking ? "speaking…" : listening ? "listening…" : "Voice + AI • Online"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                <button onClick={() => setTtsOn((v) => !v)} title={ttsOn ? "Mute voice" : "Speak replies"} className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
                  {ttsOn ? <Volume2 size={15} /> : <VolumeX size={15} />}
                </button>
                <button onClick={exportChat} title="Export chat" className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
                  <Download size={15} />
                </button>
                <button onClick={clearHistory} title="Clear history" className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
                  <Trash2 size={15} />
                </button>
                <button onClick={() => setMinimized((v) => !v)} title={minimized ? "Expand" : "Minimize"} className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
                  <Minus size={15} />
                </button>
                <button onClick={() => setFullscreen((v) => !v)} title={fullscreen ? "Exit fullscreen" : "Fullscreen"} className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
                  {fullscreen ? <Minimize2 size={15} /> : <Maximize2 size={15} />}
                </button>
                <button onClick={() => setOpen(false)} title="Close" aria-label="Close chat" className="p-1.5 rounded hover:bg-secondary text-muted-foreground hover:text-foreground">
                  <X size={16} />
                </button>
              </div>
            </div>

            {!minimized && (
              <>
                {/* Messages */}
                <div ref={scrollRef} className="flex-1 overflow-y-auto px-3 py-3 space-y-3">
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                      <div
                        className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm whitespace-pre-wrap leading-relaxed ${
                          m.role === "user"
                            ? "bg-primary text-primary-foreground rounded-br-sm"
                            : "bg-secondary text-foreground rounded-bl-sm"
                        }`}
                      >
                        {m.content || <span className="opacity-60">…</span>}
                      </div>
                    </div>
                  ))}
                  {loading && messages[messages.length - 1]?.content === "" && (
                    <div className="flex justify-start">
                      <div className="bg-secondary rounded-2xl rounded-bl-sm px-3 py-2.5 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "120ms" }} />
                        <span className="h-1.5 w-1.5 rounded-full bg-primary animate-bounce" style={{ animationDelay: "240ms" }} />
                        <span className="text-[11px] text-muted-foreground ml-1">AI is typing…</span>
                      </div>
                    </div>
                  )}

                  {/* Suggested questions (only when conversation is fresh) */}
                  {messages.length <= 1 && !loading && (
                    <div className="pt-2 flex flex-wrap gap-2">
                      {SUGGESTED.map((q) => (
                        <button
                          key={q}
                          onClick={() => send(q)}
                          className="text-[11px] px-2.5 py-1.5 rounded-full border border-primary/30 text-foreground/80 hover:bg-primary/10 transition-colors"
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Composer */}
                <form
                  onSubmit={(e) => { e.preventDefault(); send(); }}
                  className="border-t border-border p-2.5 flex items-center gap-2"
                >
                  <button
                    type="button"
                    onClick={toggleMic}
                    aria-label={listening ? "Stop voice" : "Voice input"}
                    title={listening ? "Stop" : "Speak"}
                    className={`h-9 w-9 rounded-full flex items-center justify-center shrink-0 transition-all ${
                      listening
                        ? "bg-red-500 text-white animate-pulse"
                        : "bg-secondary text-foreground hover:bg-secondary/80"
                    }`}
                  >
                    {listening ? <MicOff size={15} /> : <Mic size={15} />}
                  </button>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={listening ? "Listening…" : "Ask about AI SEO, GEO, hiring…"}
                    className="flex-1 px-3 py-2 rounded-full bg-secondary border border-border text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    disabled={loading}
                  />
                  <button
                    type="submit"
                    disabled={loading || !input.trim()}
                    aria-label="Send"
                    className="h-9 w-9 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground flex items-center justify-center disabled:opacity-50 shrink-0"
                  >
                    <Send size={15} />
                  </button>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating launcher — avatar-based, desktop + mobile */}
      {!fullscreen && (
        <motion.button
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.05 }}
          onClick={() => {
            setOpen((v) => !v);
            setMinimized(false);
            if (firstVisit) {
              try { localStorage.setItem(FIRST_VISIT_KEY, "1"); } catch {}
              setFirstVisit(false);
            }
          }}
          aria-label={open ? "Close AI chat" : "Open AI chat"}
          className="relative flex h-14 w-14 rounded-full items-center justify-center"
        >
          {open ? (
            <span className="h-14 w-14 rounded-full bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-[0_10px_30px_-5px_hsl(var(--primary)/0.6)] ring-1 ring-primary/40 flex items-center justify-center">
              <X size={22} />
            </span>
          ) : (
            <AIAvatar state={avatarState} size={56} showWave={firstVisit} />
          )}
        </motion.button>
      )}
    </div>
  );
};

export default AIChatWidget;
