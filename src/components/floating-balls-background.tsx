"use client";

import { motion } from "motion/react";

export default function FloatingBallBackground({
  colors,
}: {
  colors: string[];
}) {
  const radius = 500;
  const count = colors.length;
  const keyframeCount = 8;

  return (
    <div
      className="pointer-events-none fixed inset-0 overflow-hidden -z-50 opacity-8"
      style={{ filter: `blur(${radius}px)` }}
    >
      <svg className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <title>Background</title>

        {colors.map((color, i) => {
          const angle = (2 * Math.PI * i) / count;
          const baseX = window.innerWidth / 2 + Math.cos(angle) * radius;
          const baseY = window.innerHeight / 2 + Math.sin(angle) * radius;

          const randomOffset = () => (Math.random() - 0.5) * 2 * radius;

          const keyframesX = Array.from(
            { length: keyframeCount },
            () => `${baseX + randomOffset()}px`,
          );
          const keyframesY = Array.from(
            { length: keyframeCount },
            () => `${baseY + randomOffset()}px`,
          );

          // Close the loop
          keyframesX.push(keyframesX[0]);
          keyframesY.push(keyframesY[0]);

          return (
            <motion.circle
              key={color}
              r={radius}
              fill={color}
              animate={{
                cx: keyframesX,
                cy: keyframesY,
              }}
              transition={{
                duration: 45,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
