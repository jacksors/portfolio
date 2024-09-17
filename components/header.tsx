import Link from 'next/link';
import {ModeToggle} from "@/components/mode-toggle";
import {buttonVariants} from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="w-full text-white py-6 sticky top-0 bg-background/90 backdrop-blur border-b border-border/40 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between px-4">
        <div className="containe flex items-center justify-center px-4">
          <Link href={"/"} className={buttonVariants({variant: "link", size: "lg"})}>
            Home
          </Link>
          <Link href={"/projects"} className={buttonVariants({variant: "link", size: "lg"})}>
            Projects
          </Link>
          <Link href={"/work"} className={buttonVariants({variant: "link", size: "lg"})}>
            Work Experience
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};