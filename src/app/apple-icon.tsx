import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#12110F",
          color: "#E0754D",
          fontSize: 96,
          fontWeight: 500,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        C
      </div>
    ),
    { ...size },
  );
}
