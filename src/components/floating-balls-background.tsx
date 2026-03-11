"use client";

import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

export default function FloatingBallBackground({
  colors,
}: {
  colors: string[];
}) {
  const radius = 500;
  const count = colors.length;
  const keyframeCount = 8;

  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const keyframes = useMemo<string[][][]>(() => {
    return colors.map((_, i) => {
      const angle = (2 * Math.PI * i) / count;
      const baseX = width / 2 + Math.cos(angle) * radius;
      const baseY = height / 2 + Math.sin(angle) * radius;

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

      return [keyframesX, keyframesY];
    });
  }, [colors, count, width, height]);

  useEffect(() => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);

    window.onresize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-50 opacity-8 blur-3xl">
      <svg className="absolute left-1/2 top-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2">
        <title>Background</title>

        {colors.map((color, i) => {
          const [keyframesX, keyframesY] = keyframes[i];

          return (
            <motion.circle
              // biome-ignore lint/suspicious/noArrayIndexKey: it's fine
              key={`${width}_${height}_${i}`}
              r={radius}
              fill={color}
              initial={{ scale: 0 }}
              animate={{
                cx: keyframesX,
                cy: keyframesY,
                scale: 1,
              }}
              transition={{
                cx: {
                  duration: 90,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                cy: {
                  duration: 90,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                scale: {
                  duration: 15,
                  ease: "easeOut",
                },
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
