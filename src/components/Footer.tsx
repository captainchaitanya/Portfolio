import { site } from "@/content/site";

type FooterProps = {
  className?: string;
};

export function Footer({ className = "" }: FooterProps) {
  return (
    <footer className={`border-t border-border pt-10 pb-18 ${className}`.trim()}>
      <div className="flex flex-col gap-2 text-sm leading-body text-muted">
        <a href={site.footer.emailHref} className="text-accent hover:opacity-80">
          {site.footer.email}
        </a>
        <p>{site.footer.copyright}</p>
      </div>
    </footer>
  );
}
