import { useState } from "react";
import { Settings, X, RotateCcw } from "lucide-react";
import { useHomeBgSettings } from "./useHomeBgSettings";
import type { BackgroundVariant } from "./PageBackground";

const VARIANTS: { value: BackgroundVariant; label: string }[] = [
  { value: "default", label: "Cosmic Purple" },
  { value: "portfolio", label: "Cyan Nebula" },
];

const HomeBgAdmin = () => {
  const [open, setOpen] = useState(false);
  const { settings, update, reset } = useHomeBgSettings();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {open ? (
        <div className="glass-card p-5 w-72 space-y-4 shadow-2xl">
          <div className="flex items-center justify-between">
            <h3 className="font-display font-semibold text-sm">Home Background</h3>
            <button
              onClick={() => setOpen(false)}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Close background settings"
            >
              <X size={16} />
            </button>
          </div>

          <div className="space-y-2">
            <label className="text-xs text-muted-foreground uppercase tracking-wider">Variant</label>
            <div className="grid grid-cols-2 gap-2">
              {VARIANTS.map((v) => (
                <button
                  key={v.value}
                  onClick={() => update({ variant: v.value })}
                  className={`text-xs px-3 py-2 rounded-lg border transition-colors ${
                    settings.variant === v.value
                      ? "border-primary bg-primary/15 text-foreground"
                      : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <label className="text-xs text-muted-foreground uppercase tracking-wider">Opacity</label>
              <span className="text-xs font-medium">{settings.opacity}%</span>
            </div>
            <input
              type="range"
              min={0}
              max={100}
              value={settings.opacity}
              onChange={(e) => update({ opacity: Number(e.target.value) })}
              className="w-full accent-primary"
            />
          </div>

          <button
            onClick={reset}
            className="w-full inline-flex items-center justify-center gap-2 text-xs px-3 py-2 rounded-lg border border-border text-muted-foreground hover:text-foreground transition-colors"
          >
            <RotateCcw size={12} /> Reset to defaults
          </button>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          className="glass-card p-3 hover:border-primary/40 transition-colors"
          aria-label="Open background settings"
        >
          <Settings size={18} />
        </button>
      )}
    </div>
  );
};

export default HomeBgAdmin;
