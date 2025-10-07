"use client";

import { useCallback, useEffect, useState } from "react";

type WeatherData = {
  timezone: string;
  current: {
    time?: string;
    temperature_2m?: number;
    apparent_temperature?: number;
    weather_code?: number;
    is_day?: number;
    wind_speed_10m?: number;
  };
};

function codeToText(code?: number): string {
  if (code == null) return "Unknown";
  if (code === 0) return "Clear sky";
  if (code >= 1 && code <= 3) return "Partly cloudy";
  if (code === 45 || code === 48) return "Fog";
  if (code >= 51 && code <= 57) return "Drizzle";
  if (code >= 61 && code <= 67) return "Rain";
  if (code >= 71 && code <= 77) return "Snow";
  if (code >= 80 && code <= 82) return "Rain showers";
  if (code >= 85 && code <= 86) return "Snow showers";
  if (code === 95) return "Thunderstorm";
  if (code === 96 || code === 99) return "Thunderstorm w/ hail";
  return "Unknown";
}

export default function Weather() {
  const [data, setData] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchWeather = useCallback(async (lat: number, lon: number) => {
    setLoading(true);
    setError(null);
    try {
      const url = new URL("/api/weather", window.location.origin);
      url.searchParams.set("lat", String(lat));
      url.searchParams.set("lon", String(lon));
      const resp = await fetch(url.toString());
      if (!resp.ok) throw new Error("Failed to fetch weather");
      const json = (await resp.json()) as WeatherData;
      setData(json);
    } catch (e: unknown) {
      const message = e instanceof Error ? e.message : "Failed to fetch weather";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  const requestLocation = useCallback(() => {
    if (!("geolocation" in navigator)) {
      setError("Geolocation is not supported by this browser.");
      return;
    }
    setError(null);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        fetchWeather(lat, lon);
      },
      (err) => {
        setError(err.message || "Location permission denied.");
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 }
    );
  }, [fetchWeather]);

  useEffect(() => {
    requestLocation();
  }, [requestLocation]);

  if (loading && !data) {
    return (
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        Fetching weather near you…
      </div>
    );
  }

  if (error && !data) {
    return (
      <div className="p-4 rounded-xl bg-red-500/10 text-red-200 border border-red-500/20">
        <div className="font-medium">We need your location to show weather.</div>
        <div className="text-sm opacity-90 mt-1">{error}</div>
        <button
          className="mt-3 px-4 py-2 rounded-lg bg-red-500/20 hover:bg-red-500/30"
          onClick={requestLocation}
        >
          Retry location access
        </button>
      </div>
    );
  }

  if (!data) return null;

  const t = data.current.temperature_2m;
  const feels = data.current.apparent_temperature;
  const desc = codeToText(data.current.weather_code);
  const wind = data.current.wind_speed_10m;

  return (
    <div className="grid gap-3 sm:gap-4 grid-cols-2 sm:grid-cols-4 w-full max-w-2xl">
      <div className="col-span-2 p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="text-sm opacity-80">Weather</div>
        <div className="text-3xl font-semibold">{desc}</div>
      </div>
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="text-sm opacity-80">Temp</div>
        <div className="text-3xl font-semibold">{t?.toFixed(1)}°C</div>
      </div>
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="text-sm opacity-80">Feels like</div>
        <div className="text-3xl font-semibold">{feels?.toFixed(1)}°C</div>
      </div>
      <div className="p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="text-sm opacity-80">Wind</div>
        <div className="text-3xl font-semibold">{wind?.toFixed(0)} km/h</div>
      </div>
      <div className="col-span-2 p-4 rounded-xl bg-white/5 border border-white/10">
        <div className="text-sm opacity-80">Timezone</div>
        <div className="text-xl font-medium">{data.timezone}</div>
      </div>
    </div>
  );
}
