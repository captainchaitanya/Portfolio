import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import sharp from "sharp";
import { getProject, projects } from "@/content/projects";

export const alt = "Case study";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const runtime = "nodejs";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectOpenGraphImage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  const title = project?.title ?? "Work";
  const outcome = project?.summary.outcome ?? "";
  const summary = outcome.length > 160 ? `${outcome.slice(0, 157)}…` : outcome;

  let screenshotSrc: string | null = null;
  if (slug === "founder-desk") {
    const screenshot = await sharp(
      await readFile(join(process.cwd(), "public/images/founder-desk-dashboard.webp")),
    )
      .resize(560, 390, { fit: "cover", position: "top" })
      .png()
      .toBuffer();
    screenshotSrc = `data:image/png;base64,${screenshot.toString("base64")}`;
  }

  return new ImageResponse(
    screenshotSrc ? (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "72px",
          backgroundColor: "#12110F",
          color: "#EDEBE6",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
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
          <div style={{ fontSize: 24, color: "#8F8B84", marginBottom: 20 }}>Chaitanya Raj — work</div>
          <div
            style={{
              fontSize: 48,
              fontWeight: 500,
              lineHeight: 1.2,
              color: "#EDEBE6",
            }}
          >
            {title}
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 22,
              lineHeight: 1.4,
              color: "#8F8B84",
            }}
          >
            {summary}
          </div>
        </div>
        <img
          src={screenshotSrc}
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
    ) : (
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
          {summary}
        </div>
        <div style={{ marginTop: 40, fontSize: 20, color: "#D9B65C" }}>Product</div>
      </div>
    ),
    { ...size },
  );
}
