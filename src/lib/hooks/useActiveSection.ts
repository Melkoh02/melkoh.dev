import { useEffect, useState } from "react";

/**
 * Observes a list of section IDs and returns the one currently
 * most visible in the viewport. Uses IntersectionObserver with
 * a top-biased rootMargin so the section is considered "active"
 * once it crosses into the upper portion of the screen.
 */
export default function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      entries => {
        // Find the entry with the highest intersection ratio among
        // those that are currently intersecting.
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Shrink the observation box: top 40% of viewport triggers activation.
        // This means a section becomes "active" when it enters the upper 60%.
        rootMargin: "-20% 0px -40% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}
