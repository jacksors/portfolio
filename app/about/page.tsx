import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <Image
        src="/nature-me.png"
        alt="Developer's portrait"
        width={300}
        height={300}
        className="rounded-full border-4 border-[#3a6073] shadow-lg"
        priority
      />
      <div>
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-tl bg-clip-text text-transparent">
          Jackson Stone
        </h1>
        <p className="text-xl mb-4">Junior Full Stack Developer @ Frogslayer</p>
        <p className="text-xl mb-4">Senior CS Student @ Texas A&M University</p>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Hello! I&apos;m a passionate developer with a love for creating
          innovative solutions. When I&apos;m not coding, you can find me
          exploring new technologies, flying planes, or enjoying the outdoors.
          Feel free to take a look around and reach out if you&apos;d like to
          connect!
        </p>
        <div className="flex space-x-4">
          <Link
            className={buttonVariants({ variant: "outline", size: "icon" })}
            href="https://github.com/jacksors"
          >
            <Github className="h-4 w-4" />
          </Link>
          <Link
            className={buttonVariants({ variant: "outline", size: "icon" })}
            href="https://www.linkedin.com/in/jacksonrstone/"
          >
            <Linkedin className="h-4 w-4" />
          </Link>
          <Link
            className={buttonVariants({ variant: "outline", size: "icon" })}
            href="mailto:jacksors@tamu.edu"
          >
            <Mail className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
