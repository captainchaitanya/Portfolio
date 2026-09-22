import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <a href={site.footer.emailHref}>{site.footer.email}</a>
      <p>{site.footer.copyright}</p>
    </footer>
  );
}
