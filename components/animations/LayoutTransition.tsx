"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useActivePage } from "@/hooks/use-active-page";
import { slideVariants } from "@/lib/animations";
import { useNavigationContext } from "@/contexts/navigation";

export const LayoutTransition = ({ children }: { children: ReactNode }) => {
  const page = useActivePage();
  const { direction } = useNavigationContext();

  return (
    <motion.section
      key={page}
      custom={direction}
      variants={slideVariants}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      {children}
    </motion.section>
  );
};
