import MaterialIcon from "../atoms/MaterialIcon";

interface TimelineItemProps {
  period: string;
  company: string;
  badge: string;
  badgeVariant?: "current" | "default";
  role: string;
  items: { icon: string; text: string }[];
  position?: "left" | "right";
}

export default function TimelineItem({
  period,
  company,
  badge,
  badgeVariant = "default",
  role,
  items,
  position = "left",
}: TimelineItemProps) {
  const isLeft = position === "left";

  return (
    <div className="relative flex flex-col md:flex-row md:items-start gap-6 mb-12 last:mb-0">
      {/* Timeline dot */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 top-6 z-10">
        <div
          className={`w-4 h-4 rounded-full border-4 border-surface ring-4 ${
            badgeVariant === "current"
              ? "bg-primary ring-primary/10"
              : "bg-outline-variant ring-outline-variant/10"
          }`}
        />
      </div>

      {/* Period */}
      <div
        className={`md:w-1/2 flex items-start pt-5 ${
          isLeft
            ? "md:order-2 md:pl-10"
            : "md:order-1 md:pr-10 md:justify-end"
        }`}>
        <p className="text-xl font-light tracking-tight text-on-surface-variant/50">
          {period}
        </p>
      </div>

      {/* Card */}
      <div
        className={`md:w-1/2 ${
          isLeft ? "md:order-1 md:pr-10" : "md:order-2 md:pl-10"
        }`}>
        <div className="bg-surface-container-lowest p-8 rounded-xl border border-outline-variant/20">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold tracking-tight">{company}</h3>
              <p className="text-sm font-semibold text-on-surface mt-1">
                {role}
              </p>
            </div>
            <span
              className={`text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap ${
                badgeVariant === "current"
                  ? "bg-primary/10 text-primary"
                  : "bg-surface-container-high text-on-surface-variant"
              }`}>
              {badge}
            </span>
          </div>

          <div className="mt-6 space-y-4">
            {items.map((item, i) => (
              <div key={i} className="flex gap-3 items-start">
                <MaterialIcon
                  icon={item.icon}
                  className="text-lg text-on-surface-variant/60 mt-0.5"
                />
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
