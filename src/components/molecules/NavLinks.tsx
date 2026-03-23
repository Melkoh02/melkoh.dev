import NavLink from "../atoms/NavLink";

const links = [
  { href: "#about", label: "About", isActive: true },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8 font-headline tracking-tight text-sm font-medium">
      {links.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </div>
  );
}
