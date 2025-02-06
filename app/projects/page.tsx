"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { FC, ReactNode, useMemo } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import aggietrackImage from "@/public/aggietrack.png";
import portfolioImage from "@/public/portfolio.png";
import dreamdriveImage from "@/public/dreamdrive.jpg";

interface Project {
  title: string;
  description: string;
  image: StaticImageData;
  website: FC<{ children: ReactNode }>;
  github?: string;
  technologies: string[];
}

const Page = () => {
  const { toast } = useToast();

  const projects = useMemo(
    (): Project[] => [
      {
        title: "Aggietrack",
        description:
          "Aggietrack is a tool that allows students at Texas A&M to track classes and get notified when seats open up or instructors change. " +
          "It is built using Next.js and deployed to AWS using Lambda functions, ECS, RDS, S3, SES, and CloudFront.",
        image: aggietrackImage,
        website: ({ children }) => (
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://aggietrack.app/"
            target="_blank"
          >
            {children}
          </Link>
        ),
        technologies: ["Next.js", "AWS", "Typescript", "Postgres"],
      },
      {
        title: "DreamDrive",
        description:
          "DreamDrive is a submission to TAMUHack 2025, and won 2nd place in the Toyota Financial Services challenge. It uses a custom recommendations engine to help users find their next car that factors in lifestyle choices, budget, and more, and includes a virtual assistant to help answer questions and refine user preferences. It is built with Next.js, deployed to AWS, and uses the OpenAI API.",
        image: dreamdriveImage,
        website: ({ children }) => (
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://dreamdrive.app/"
            target="_blank"
          >
            {children}
          </Link>
        ),
        technologies: ["Next.js", "AWS", "Typescript", "Postgres", "OpenAI"],
      },
      {
        title: "My Portfolio",
        description:
          "This website is built using Next.js, and the UI uses Shadcn, Tailwind CSS, and Framer Motion for animations. It is deployed to Vercel.",
        image: portfolioImage,
        website: ({ children }) => (
          <Button
            variant="outline"
            onClick={() => {
              toast({
                className:
                  "bottom-4 inset-x-0 px-4 mx-auto transform w-fit flex fixed text-center text-white",
                style: { background: "var(--gradient)" },
                variant: "default",
                title: "🎉 You're already here!",
                duration: 1000,
              });
            }}
          >
            {children}
          </Button>
        ),
        github: "https://github.com/jacksors/portfolio",
        technologies: ["Next.js", "Vercel", "Tailwind CSS", "Framer Motion"],
      },
    ],
    [toast],
  );

  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={`project-${index}`} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden flex flex-col h-full">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-48 object-top object-cover"
      />
      <div className="flex flex-col flex-grow">
        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="mb-4">
            {project.description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between mt-auto">
          <project.website>
            <ExternalLink className="mr-2 h-4 w-4" />
            Visit Site
          </project.website>
          {project.github && (
            <Button variant="outline" asChild>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View Code
              </a>
            </Button>
          )}
        </CardFooter>
      </div>
    </Card>
  );
};
export default Page;
