"use client";

import type {ComponentType, MouseEventHandler} from "react"

export const With3D = <P,>(Component: ComponentType<P>): ComponentType<P & {width?: number, height?: number}> => {
  const getMousePosition = (e: MouseEvent<HTMLElement, MouseEvent>) => {
    const {width, height, top, left} = e.currentTarget!.getBoundingClientRect();
  }

  const handleMouseMove: MouseEventHandler = (e) => {

  }

  const HoverEffectComponent = (props: P & {width?: number, height?: number}) => {

  }
  HoverEffectComponent.displayName = "HoverEffectComponent"
  return HoverEffectComponent
}
