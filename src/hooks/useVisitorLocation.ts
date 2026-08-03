import { useEffect } from "react";
import { logLead, storeCoords, getStoredCoords } from "@/lib/leadLog";

const ASKED_KEY = "sa_geo_asked_v1";

/**
 * Asks for precise location once the site opens (browser permission prompt),
 * caches the coordinates for the session and logs the visit.
 */
export function useVisitorLocation() {
  useEffect(() => {
    let cancelled = false;

    const log = () => {
      if (!cancelled) void logLead({ event: "page_view" });
    };

    if (typeof navigator === "undefined" || !navigator.geolocation) {
      log();
      return;
    }

    if (getStoredCoords()) {
      log();
      return;
    }

    const alreadyAsked = localStorage.getItem(ASKED_KEY) === "denied";
    if (alreadyAsked) {
      log();
      return;
    }

    const timer = window.setTimeout(() => {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          storeCoords({
            lat: Number(pos.coords.latitude.toFixed(5)),
            lon: Number(pos.coords.longitude.toFixed(5)),
            accuracy: pos.coords.accuracy,
          });
          log();
        },
        () => {
          try {
            localStorage.setItem(ASKED_KEY, "denied");
          } catch {
            /* ignore */
          }
          log();
        },
        { enableHighAccuracy: false, timeout: 8000, maximumAge: 600000 },
      );
    }, 1200);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, []);
}
