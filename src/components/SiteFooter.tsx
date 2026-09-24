import { LinkPills } from "@/components/LinkPills";
import { site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <LinkPills links={site.footerLinks} label="Footer contact" />
      <p className="copyright">{site.footer.copyright}</p>
    </footer>
  );
}
