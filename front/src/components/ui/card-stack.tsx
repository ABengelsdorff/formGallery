"use client";
import * as React from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../lib/utils";

export type CardStackItem = {
  id: number | string;
  content: React.ReactNode;
};

export function CardStack({
  items,
  className,
}: {
  items: CardStackItem[];
  className?: string;
}) {
  const [stack, setStack] = React.useState(items);

  const handlePop = () => {
    if (stack.length > 1) {
      setStack((prev) => prev.slice(1));
    }
  };

  return (
    <div className={cn("relative flex items-center justify-center min-h-[500px]", className)}>
      <AnimatePresence initial={false}>
        {stack.map((item, i) => {
          const isTop = i === 0;
          return (
            <motion.div
              key={item.id}
              layout
              initial={{ y: 40, opacity: 0 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1 - i * 0.04,
                zIndex: stack.length - i,
                boxShadow: isTop
                  ? "0 8px 32px 0 rgba(0,0,0,0.25)"
                  : "0 2px 8px 0 rgba(0,0,0,0.10)",
              }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className={cn(
                "absolute left-1/2 top-1/2 w-[350px] max-w-full -translate-x-1/2 -translate-y-1/2 cursor-pointer select-none",
                isTop ? "" : "pointer-events-none opacity-80"
              )}
              style={{
                zIndex: stack.length - i,
              }}
              onClick={isTop ? handlePop : undefined}
            >
              {item.content}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}