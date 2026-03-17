import { useEffect, useRef } from "react";

const DOT_COUNT = 8;
const LERP_CORE = 0.24;
const LERP_DOT = 0.34;

export default function CursorTrail() {
  const layerRef = useRef(null);
  const coreRef = useRef(null);
  const dotRefs = useRef([]);

  useEffect(() => {
    const supportsFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!supportsFinePointer || reduceMotion) {
      return undefined;
    }

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, active: false };
    const core = { x: mouse.x, y: mouse.y };
    const dots = Array.from({ length: DOT_COUNT }, () => ({ x: mouse.x, y: mouse.y }));

    let rafId = 0;

    const animate = () => {
      core.x += (mouse.x - core.x) * LERP_CORE;
      core.y += (mouse.y - core.y) * LERP_CORE;

      if (coreRef.current) {
        coreRef.current.style.transform = `translate3d(${core.x}px, ${core.y}px, 0)`;
      }

      dots.forEach((dot, index) => {
        const previous = index === 0 ? core : dots[index - 1];
        dot.x += (previous.x - dot.x) * LERP_DOT;
        dot.y += (previous.y - dot.y) * LERP_DOT;

        const node = dotRefs.current[index];
        if (node) {
          const scale = 1 - index * 0.09;
          node.style.transform = `translate3d(${dot.x}px, ${dot.y}px, 0) scale(${scale})`;
          node.style.opacity = `${Math.max(0.18, 1 - index * 0.11)}`;
        }
      });

      rafId = window.requestAnimationFrame(animate);
    };

    const showLayer = () => {
      mouse.active = true;
      if (layerRef.current) {
        layerRef.current.classList.add("visible");
      }
    };

    const handlePointerMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
      if (!mouse.active) {
        showLayer();
      }
    };

    const handlePointerDown = () => {
      if (layerRef.current) {
        layerRef.current.classList.add("pressed");
      }
    };

    const handlePointerUp = () => {
      if (layerRef.current) {
        layerRef.current.classList.remove("pressed");
      }
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerdown", handlePointerDown);
    window.addEventListener("pointerup", handlePointerUp);

    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <div ref={layerRef} className="cursor-trail-layer" aria-hidden="true">
      <span ref={coreRef} className="cursor-core"></span>
      {Array.from({ length: DOT_COUNT }).map((_, index) => (
        <span
          key={`cursor-dot-${index}`}
          ref={(node) => {
            dotRefs.current[index] = node;
          }}
          className="cursor-dot"
        ></span>
      ))}
    </div>
  );
}
