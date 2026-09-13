import { motion } from "framer-motion";

import type { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
}

export function AnimatedSection({
  children,
  delay = 0,
}: AnimatedSectionProps) {
  return (
    <motion.div
      initial={{
        opacity: 0.9,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
        margin: "0px 0px -40px 0px",
      }}
      transition={{
        duration: 0.55,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}