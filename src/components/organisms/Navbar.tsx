import Logo from "../atoms/Logo";
import NavLinks from "../molecules/NavLinks";
import NavActions from "../molecules/NavActions";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        <Logo />
        <NavLinks />
        <NavActions />
      </div>
    </nav>
  );
}
