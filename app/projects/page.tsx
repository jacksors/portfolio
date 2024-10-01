"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { FC, ReactNode, useMemo } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { useNavigationContext } from "@/contexts/navigation";

interface Project {
  title: string;
  description: string;
  image: string;
  website: FC<{ children: ReactNode }>;
  github: string;
  technologies: string[];
}

const Page = () => {
  const { toast } = useToast();

  const { direction } = useNavigationContext();

  const projects = useMemo(
    (): Project[] => [
      {
        title: "Example projects",
        description: "example description",
        image: "/placeholder.jpg",
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
        github: "https://github.com/",
        technologies: ["React", "Node.js", "OpenAI API", "WebSocket"],
      },
      {
        title: "Example projects",
        description: "example description",
        image: "/placeholder.jpg",
        website: ({ children }) => (
          <Link
            className={buttonVariants({ variant: "outline" })}
            href="https://example.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </Link>
        ),
        github: "https://github.com",
        technologies: ["Python", "AST", "Docker", "REST API"],
      },
    ],
    [toast],
  );

  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={`project-${index}`} />
        ))}
      </div>
    </>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="overflow-hidden">
      <Image
        src={project.image}
        alt={project.title}
        width={300}
        height={200}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
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
      <CardFooter className="flex justify-between">
        <project.website>
          <ExternalLink className="mr-2 h-4 w-4" />
          Visit Site
        </project.website>
        <Button variant="outline" size="sm" asChild>
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" />
            View Code
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Page;
