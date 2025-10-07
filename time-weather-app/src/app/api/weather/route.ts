import { NextResponse } from "next/server";

function isValidNumber(value: string | null): value is string {
  if (!value) return false;
  const n = Number(value);
  return Number.isFinite(n);
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!isValidNumber(lat) || !isValidNumber(lon)) {
    return NextResponse.json({ error: "lat and lon are required" }, { status: 400 });
  }

  const url = new URL("https://api.open-meteo.com/v1/forecast");
  url.searchParams.set("latitude", String(lat));
  url.searchParams.set("longitude", String(lon));
  url.searchParams.set(
    "current",
    [
      "temperature_2m",
      "apparent_temperature",
      "weather_code",
      "is_day",
      "wind_speed_10m",
    ].join(",")
  );
  url.searchParams.set("timezone", "auto");

  const resp = await fetch(url.toString(), { next: { revalidate: 60 } });
  if (!resp.ok) {
    return NextResponse.json({ error: "weather fetch failed" }, { status: 502 });
  }
  const data = await resp.json();

  return NextResponse.json({
    timezone: data.timezone,
    current: data.current,
  });
}
