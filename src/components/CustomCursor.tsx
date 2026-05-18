"use client";

import { useEffect, useRef } from "react";

const interactiveSelector =
  "a, button, input, textarea, select, [role='button'], .card-hover, .tech-badge";

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const supportsFinePointer = window.matchMedia("(pointer: fine)").matches;

    if (prefersReducedMotion || !supportsFinePointer) {
      return;
    }

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    const ring = ringRef.current;
    const trails = trailRefs.current;

    if (!cursor || !dot || !ring) return;

    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let ringX = pointerX;
    let ringY = pointerY;
    let frameId = 0;

    const trailPositions = trails.map(() => ({
      x: pointerX,
      y: pointerY,
    }));

    document.documentElement.classList.add("has-custom-cursor");
    cursor.classList.add("is-visible");

    const updateCssPointer = () => {
      document.documentElement.style.setProperty("--cursor-x", `${pointerX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${pointerY}px`);
    };

    const moveCursor = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      updateCssPointer();

      const spotlightTarget = (event.target as HTMLElement | null)?.closest(
        ".card-hover"
      ) as HTMLElement | null;

      if (spotlightTarget) {
        const rect = spotlightTarget.getBoundingClientRect();
        spotlightTarget.style.setProperty(
          "--spotlight-x",
          `${event.clientX - rect.left}px`
        );
        spotlightTarget.style.setProperty(
          "--spotlight-y",
          `${event.clientY - rect.top}px`
        );
      }
    };

    const animate = () => {
      ringX += (pointerX - ringX) * 0.18;
      ringY += (pointerY - ringY) * 0.18;

      dot.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;

      trailPositions.forEach((position, index) => {
        const lead = index === 0 ? { x: pointerX, y: pointerY } : trailPositions[index - 1];
        position.x += (lead.x - position.x) * 0.28;
        position.y += (lead.y - position.y) * 0.28;

        const scale = 1 - index * 0.13;
        const opacity = 0.34 - index * 0.045;
        const trail = trails[index];

        if (trail) {
          trail.style.transform = `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%) scale(${scale})`;
          trail.style.opacity = `${Math.max(opacity, 0)}`;
        }
      });

      frameId = window.requestAnimationFrame(animate);
    };

    const setInteractive = (event: PointerEvent) => {
      const target = event.target as HTMLElement | null;
      cursor.classList.toggle(
        "is-hovering",
        Boolean(target?.closest(interactiveSelector))
      );
    };

    const setPressed = () => cursor.classList.add("is-pressed");
    const unsetPressed = () => cursor.classList.remove("is-pressed");
    const hideCursor = () => cursor.classList.remove("is-visible");
    const showCursor = () => cursor.classList.add("is-visible");

    updateCssPointer();
    frameId = window.requestAnimationFrame(animate);

    window.addEventListener("pointermove", moveCursor, { passive: true });
    window.addEventListener("pointermove", setInteractive, { passive: true });
    window.addEventListener("pointerdown", setPressed);
    window.addEventListener("pointerup", unsetPressed);
    document.addEventListener("mouseleave", hideCursor);
    document.addEventListener("mouseenter", showCursor);

    return () => {
      document.documentElement.classList.remove("has-custom-cursor");
      document.documentElement.style.removeProperty("--cursor-x");
      document.documentElement.style.removeProperty("--cursor-y");
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", moveCursor);
      window.removeEventListener("pointermove", setInteractive);
      window.removeEventListener("pointerdown", setPressed);
      window.removeEventListener("pointerup", unsetPressed);
      document.removeEventListener("mouseleave", hideCursor);
      document.removeEventListener("mouseenter", showCursor);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef} className="cursor-dot" />
      {Array.from({ length: 6 }).map((_, index) => (
        <span
          key={index}
          ref={(node) => {
            if (node) trailRefs.current[index] = node;
          }}
          className="cursor-trail"
        />
      ))}
    </div>
  );
};

export default CustomCursor;
