import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";

export const alt =
  "Vibeshelf homepage with a vibe search field and mixed book, film and game results.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

async function loadFont(url: string) {
  const response = await fetch(url);
  if (!response.ok) return null;
  return response.arrayBuffer();
}

export default async function OpenGraphImage() {
  const screenshotPath = join(process.cwd(), "public/images/vibeshelf-home.webp");
  const screenshot = await sharp(await readFile(screenshotPath))
    .resize(560, 390, { fit: "cover", position: "top" })
    .png()
    .toBuffer();

  const [serif, sans] = await Promise.all([
    loadFont("https://cdn.jsdelivr.net/fontsource/fonts/instrument-serif@latest/latin-400-normal.ttf"),
    loadFont("https://cdn.jsdelivr.net/fontsource/fonts/instrument-sans@latest/latin-400-normal.ttf"),
  ]);

  const fonts = [
    serif
      ? { name: "Instrument Serif", data: serif, weight: 400 as const, style: "normal" as const }
      : null,
    sans
      ? { name: "Instrument Sans", data: sans, weight: 400 as const, style: "normal" as const }
      : null,
  ].filter((font) => font !== null);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#12110F",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            maxWidth: 460,
          }}
        >
          <div
            style={{
              fontSize: 56,
              lineHeight: 1.1,
              color: "#F4F1E9",
              fontFamily: "Instrument Serif, ui-serif, Georgia, serif",
            }}
          >
            Chaitanya Raj
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 24,
              lineHeight: 1.35,
              color: "#AFA79A",
              fontFamily: "Instrument Sans, ui-sans-serif, system-ui, sans-serif",
            }}
          >
            Product manager — APM/PM
          </div>
        </div>
        <img
          src={`data:image/png;base64,${screenshot.toString("base64")}`}
          width={560}
          height={390}
          alt=""
          style={{
            width: 560,
            height: 390,
            objectFit: "cover",
            border: "1px solid #2E2A25",
            borderRadius: 6,
          }}
        />
      </div>
    ),
    {
      ...size,
      fonts,
    },
  );
}
