"use client";

import {Button} from "@/components/ui/button";
import {useActivePage} from "@/hooks/use-active-page";
import {pages} from "@/lib/pages";
import {useNavigationContext} from "@/contexts/navigation";

export const Header = () => {
  const activeSection = useActivePage();
  const {handleNavigation} = useNavigationContext();

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/30">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-4">
          {pages.map((page) => (
            <li key={page}>
              <Button
                variant={activeSection === page ? "default" : "ghost"}
                onClick={() => handleNavigation(page)}
              >
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};