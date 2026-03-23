import { useEffect, useState } from "react";

/**
 * Scroll-position-based scroll spy. On each scroll frame, checks which
 * section's top has most recently crossed a reference line (30% from the
 * top of the viewport). The last section whose top is at or above this
 * line wins — giving a single, deterministic result with no flicker.
 */
export default function useActiveSection(sectionIds: string[]): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const offset = window.innerHeight * 0.3;

      let current: string | null = null;

      for (const el of elements) {
        // offsetTop gives the position relative to the document,
        // no need for getBoundingClientRect + scrollY math.
        if (el.offsetTop - offset <= scrollY) {
          current = el.id;
        }
      }

      // If at the very top and nothing matched, default to first section
      if (current === null && elements.length > 0) {
        current = elements[0].id;
      }

      setActiveId(current);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    // Initial check
    update();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [sectionIds]);

  return activeId;
}
