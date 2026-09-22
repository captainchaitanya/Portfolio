import Link from "next/link";
import { ThemeToggle } from "@/components/ThemeToggle";
import { site } from "@/content/site";

const nav = [
  { href: "/#work", label: "Work" },
  { href: "/#writing", label: "Writing" },
  { href: "/#about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="frame site-header-inner">
        <Link href="/" className="site-logo">
          {site.name}
        </Link>
        <nav className="site-nav" aria-label="Primary">
          {nav.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
