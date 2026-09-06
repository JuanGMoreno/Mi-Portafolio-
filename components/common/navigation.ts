export const navigationItems = [
  { key: "start", href: "#hero" },
  { key: "projects", href: "#projects" },
  { key: "technologies", href: "#technologies" },
  { key: "experience", href: "#experience" },
  { key: "about-me", href: "#about-me" },
  { key: "contact", href: "#contact" },
] as const;

export interface NavigationLink {
  href: string;
  label: string;
}
