import { ImageResponse } from "next/og";
import { getProject } from "@/content/projects";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectOpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Work";
  const outcome = project?.summary.outcome ?? "";

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
        <div style={{ fontSize: 24, color: "#8F8B84", marginBottom: 20 }}>Chaitanya Raj — work</div>
        <div
          style={{
            fontSize: 52,
            fontWeight: 500,
            lineHeight: 1.2,
            maxWidth: 960,
            color: "#EDEBE6",
          }}
        >
          {title}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 24,
            lineHeight: 1.4,
            maxWidth: 900,
            color: "#8F8B84",
          }}
        >
          {outcome.length > 160 ? `${outcome.slice(0, 157)}…` : outcome}
        </div>
        <div style={{ marginTop: 40, fontSize: 20, color: "#E0754D" }}>Product</div>
      </div>
    ),
    { ...size },
  );
}
