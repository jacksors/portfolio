"use client";

import React, {MouseEventHandler, ReactNode} from "react"
import {motion, useSpring, useTransform} from "framer-motion";

export const With3D = ({children, cardRotation, cardScale}: {children: ReactNode, cardRotation?: number, cardScale?: number}) => {
  if (!cardRotation) cardRotation = 15;
  if (!cardScale) cardScale = 1.07;

  const xPercent = useSpring(0, {bounce: 0});
  const yPercent = useSpring(0, {bounce: 0});
  const scale = useSpring(1, {bounce: 0});

  const rotateX = useTransform(yPercent, [-0.5, 0.5], [`-${cardRotation}deg`, `${cardRotation}deg`]);
  const rotateY = useTransform(xPercent, [-0.5, 0.5], [`-${cardRotation}deg`, `${cardRotation}deg`]);

  const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
    const {width, height, top, left} = e.currentTarget.getBoundingClientRect();

    const currentMouseX = e.clientX - left;
    const currentMouseY = e.clientY - top;

    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    }
  }

  const handleMouseMove: MouseEventHandler = (e) => {
    const {currentMouseX, currentMouseY, containerWidth, containerHeight} = getMousePosition(e);

    xPercent.set(currentMouseX / containerWidth - 0.5);
    yPercent.set(currentMouseY / containerHeight - 0.5);
  }

  const handleMouseEnter: MouseEventHandler = () => {
    scale.set(cardScale);
  }

  const handleMouseLeave: MouseEventHandler = () => {
    xPercent.set(0);
    yPercent.set(0);
    scale.set(1);
  }

  return (
    <motion.div onMouseMove={handleMouseMove} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                style={{rotateX, rotateY, scale, transformStyle: "preserve-3d"}}>
      {children}
    </motion.div>

  )
}
