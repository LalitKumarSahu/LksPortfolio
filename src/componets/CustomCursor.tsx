import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTimeout(() => {
        setInnerPosition({ x: e.clientX, y: e.clientY });
      }, 80);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div className="fixed top-0 left-0 z-[9999] pointer-events-none hidden md:block">
      {/* Outer Circle */}
      <div
        className="absolute w-8 h-8 border-2 border-white rounded-full transition-transform duration-100"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      ></div>

      {/* Inner Circle */}
      <div
        className="absolute w-4 h-4 bg-lightNavy rounded-full transition-transform duration-200"
        style={{
          transform: `translate(${innerPosition.x - 8}px, ${
            innerPosition.y - 8
          }px)`,
        }}
      ></div>
    </div>
  );
}
