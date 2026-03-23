import IconButton from "../atoms/IconButton";

export default function NavActions() {
  return (
    <div className="flex items-center gap-4">
      <IconButton icon="search" />
      <IconButton icon="grid_view" />
    </div>
  );
}
