import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 18,
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
