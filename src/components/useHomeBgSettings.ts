import { useEffect, useState } from "react";
import type { BackgroundVariant } from "./PageBackground";

const STORAGE_KEY = "home-bg-settings";

export interface HomeBgSettings {
  variant: BackgroundVariant;
  opacity: number;
}

const DEFAULTS: HomeBgSettings = { variant: "default", opacity: 30 };

export const loadHomeBgSettings = (): HomeBgSettings => {
  if (typeof window === "undefined") return DEFAULTS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULTS;
    const parsed = JSON.parse(raw);
    return {
      variant: parsed.variant === "portfolio" ? "portfolio" : "default",
      opacity: typeof parsed.opacity === "number" ? Math.max(0, Math.min(100, parsed.opacity)) : 30,
    };
  } catch {
    return DEFAULTS;
  }
};

export const useHomeBgSettings = () => {
  const [settings, setSettings] = useState<HomeBgSettings>(DEFAULTS);

  useEffect(() => {
    setSettings(loadHomeBgSettings());
    const onStorage = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setSettings(loadHomeBgSettings());
    };
    const onCustom = () => setSettings(loadHomeBgSettings());
    window.addEventListener("storage", onStorage);
    window.addEventListener("home-bg-settings:change", onCustom);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("home-bg-settings:change", onCustom);
    };
  }, []);

  const update = (next: Partial<HomeBgSettings>) => {
    const merged = { ...loadHomeBgSettings(), ...next };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
    setSettings(merged);
    window.dispatchEvent(new Event("home-bg-settings:change"));
  };

  const reset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSettings(DEFAULTS);
    window.dispatchEvent(new Event("home-bg-settings:change"));
  };

  return { settings, update, reset };
};
