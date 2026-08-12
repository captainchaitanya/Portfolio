import { ImageResponse } from "next/og";

export const alt = "Chaitanya Raj — Product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          backgroundColor: "#12110F",
          color: "#EDEBE6",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#8F8B84", marginBottom: 24 }}>Chaitanya Raj</div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 500,
            lineHeight: 1.2,
            maxWidth: 900,
            color: "#EDEBE6",
          }}
        >
          Electrical engineer turned PM. I write the SQL myself, then argue about what it means.
        </div>
        <div style={{ marginTop: 40, fontSize: 22, color: "#E0754D" }}>Product</div>
      </div>
    ),
    { ...size },
  );
}
