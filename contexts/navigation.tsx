"use client";

import {createContext, ReactNode, useContext, useRef, useState} from "react";
import {Page, pages} from "@/lib/pages";
import {useActivePage} from "@/hooks/use-active-page";
import {useRouter} from "next/navigation";

interface NavigationContextType {
  handleNavigation(newPage: Page): void;
  direction: number;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const useNavigationContext = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error("useNavigationContext must be used within a NavigationContextProvider");
  }
  return context;
}

export const NavigationContextProvider = ({children}: {children: ReactNode}) => {
  const router = useRouter();

  const activePage = useActivePage();
  const [direction, setDirection] = useState(0);

  const handleNavigation = (nextPage: Page) => {
    const currentIndex = pages.indexOf(activePage ?? "about");
    const nextIndex = pages.indexOf(nextPage)
    setDirection(nextIndex > currentIndex ? 1 : -1);
    router.push(`/${nextPage}`);
  }

  return (
    <NavigationContext.Provider value={{handleNavigation, direction}}>
      {children}
    </NavigationContext.Provider>
  )
}