import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "dark" | "light" | "system";
type Resolved = "dark" | "light";

interface ThemeCtx {
  theme: Theme;
  resolved: Resolved;
  setTheme: (t: Theme) => void;
  toggle: () => void;
}

const Ctx = createContext<ThemeCtx | null>(null);
const KEY = "sa-theme-v1";

const getSystem = (): Resolved =>
  typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem(KEY) as Theme) || "system";
  });
  const [resolved, setResolved] = useState<Resolved>(() =>
    theme === "system" ? getSystem() : (theme as Resolved)
  );

  useEffect(() => {
    const next: Resolved = theme === "system" ? getSystem() : (theme as Resolved);
    setResolved(next);
    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(next);
    root.style.colorScheme = next;
  }, [theme]);

  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: light)");
    const handler = () => setResolved(getSystem());
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = (t: Theme) => {
    localStorage.setItem(KEY, t);
    setThemeState(t);
  };
  const toggle = () => setTheme(resolved === "dark" ? "light" : "dark");

  return <Ctx.Provider value={{ theme, resolved, setTheme, toggle }}>{children}</Ctx.Provider>;
};

export const useTheme = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useTheme must be used within ThemeProvider");
  return c;
};
