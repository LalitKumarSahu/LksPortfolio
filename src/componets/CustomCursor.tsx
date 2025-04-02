import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [innerPosition, setInnerPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Slight delay for inner cursor to create a trailing effect
      setTimeout(() => {
        setInnerPosition({ x: e.clientX, y: e.clientY });
      }, 100); // Adjust delay for smoothness
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <div className="cursor-none z-10 fixed">
      {/* Outer Circle */}
      <div
        className={`rounded-full pointer-events-none transition-transform duration-80 absolute w-8 h-8 border-white border-2 "
        }`}
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px)`,
        }}
      ></div>

      {/* Inner Circle - Follows with Delay */}
      <div
        className="w-4 h-4 rounded-full pointer-events-none absolute bg-lightNavy transition-all duration-200"
        style={{
          transform: `translate(${innerPosition.x - 8}px, ${
            innerPosition.y - 8
          }px)`,
        }}
      ></div>
    </div>
  );
}
