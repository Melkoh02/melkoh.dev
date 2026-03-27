import IconButton from "../atoms/IconButton";
import LanguageSelector from "./LanguageSelector";

export default function NavActions() {
  return (
    <div className="flex items-center gap-2">
      <IconButton icon="search" />
      <IconButton icon="grid_view" />
      <LanguageSelector />
    </div>
  );
}
