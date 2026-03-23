interface IconButtonProps {
  icon: string;
  onClick?: () => void;
  className?: string;
}

export default function IconButton({
  icon,
  onClick,
  className = "",
}: IconButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`p-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all duration-300 rounded-lg active:scale-95 ${className}`}>
      <span className="material-symbols-outlined text-zinc-900 dark:text-zinc-50">
        {icon}
      </span>
    </button>
  );
}
