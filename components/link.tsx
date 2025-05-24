"use client";

import {ReactNode} from "react";
import {motion} from "motion/react";

const Link = ({children, href}: { children: ReactNode, href: string }) => {
  return (
    <motion.a
      className="relative overflow-hidden bg-primary text-primary-foreground px-4 py-2 border-b-8 border-primary-offset"
      whileHover="hover"
      initial="initial"
      variants={{
        initial: {},
        hover: {}
      }}
      href={href}
    >
      <motion.div
        className="absolute inset-0 bg-primary-offset"
        variants={{
          initial: {y: "100%"},
          hover: {y: "0%"}
        }}
        transition={{duration: 0.3, ease: "easeOut"}}
      />
      <span className="relative z-10">{children}</span>
    </motion.a>
  )
}

export default Link;