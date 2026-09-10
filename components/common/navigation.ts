export const navigationItems = [
  { key: "start", href: "#hero" },
  { key: "about-me", href: "#about-me" },
  { key: "technologies", href: "#technologies" },
  { key: "projects", href: "#projects" },
  { key: "experience", href: "#experience" },
  { key: "contact", href: "#contact" },
] as const;

export interface NavigationLink {
  href: string;
  label: string;
}
