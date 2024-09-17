"use client";

import {Button, buttonVariants} from "@/components/ui/button";
import {useRouter, usePathname} from "next/navigation";

export const Header = () => {
  const router = useRouter();

  const pathname = usePathname();
  const activeSection = pathname.split("/").at(1);

  console.log(activeSection);

  return (
    <header className="sticky top-0 z-10 backdrop-blur-md bg-background/30">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-4">
          {['about', 'projects', 'experience'].map((section) => (
            <li key={section}>
              <Button
                variant={activeSection === section ? "default" : "ghost"}
                onClick={() => router.push(`/${section}`)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};