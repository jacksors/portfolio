"use client"

import {AnimatePresence, motion} from "framer-motion";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Button, buttonVariants} from "@/components/ui/button";
import {ExternalLink, Github} from "lucide-react";
import {FC, ReactNode, useMemo} from "react";
import Link from "next/link";
import {useToast} from "@/hooks/use-toast";
import {useNavigationContext} from "@/contexts/navigation";
import {fadeIn, slideVariants} from "@/lib/animations";

interface Project {
  title: string
  description: string
  image: string
  website: FC<{ children: ReactNode }>
  github: string
  technologies: string[]
}

const Page = () => {
  const {toast} = useToast();

  const {direction} = useNavigationContext();

  const projects = useMemo((): Project[] => [
    {
      title: "This Website",
      description: "An intelligent chatbot powered by GPT-3, designed to provide human-like conversations and assist users with various tasks. Features include multi-language support, context awareness, and integration with popular messaging platforms.",
      image: "/placeholder.svg?height=200&width=300",
      website: ({children}) => <Button variant="outline" onClick={() => {
        toast({
          className: 'bottom-4 inset-x-0 px-4 mx-auto transform w-fit flex fixed text-center text-white',
          style: {background: 'var(--gradient)'},
          variant: 'default',
          title: "🎉 You're already here!",
          duration: 1000
        })
      }}>{children}</Button>,
      github: "https://github.com/yourusername/ai-chatbot",
      technologies: ["React", "Node.js", "OpenAI API", "WebSocket"]
    },
    {
      title: "Code Analyzer",
      description: "A powerful static code analysis tool that helps developers identify and fix potential bugs, security vulnerabilities, and style issues in their code. Supports multiple programming languages and integrates with popular IDEs and CI/CD pipelines.",
      image: "/placeholder.svg?height=200&width=300",
      website: ({children}) => <Link className={buttonVariants({variant: "outline"})}
                                     href="https://example.com/ai-chatbot" target="_blank"
                                     rel="noopener noreferrer">{children}</Link>,
      github: "https://github.com/yourusername/code-analyzer",
      technologies: ["Python", "AST", "Docker", "REST API"]
    },
    {
      title: "Task Manager",
      description: "A productivity app with AI-powered suggestions to help users organize their tasks, set priorities, and manage their time more effectively. Features include smart task categorization, time tracking, and personalized productivity insights.",
      image: "/placeholder.svg?height=200&width=300",
      website: ({children}) => <Link className={buttonVariants({variant: "outline"})}
                                     href="https://example.com/ai-chatbot" target="_blank"
                                     rel="noopener noreferrer">{children}</Link>,
      github: "https://github.com/yourusername/task-manager",
      technologies: ["Vue.js", "Express", "MongoDB", "Machine Learning"]
    },
  ], [toast]);

  return (
    <AnimatePresence>
      <motion.section
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: "spring", stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 },
        }}
      >
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={`project-${index}`}/>
          ))}
        </div>
      </motion.section>
    </AnimatePresence>
  )
}

const ProjectCard = ({project}: { project: Project }) => {
  return (
    <motion.div variants={fadeIn}>
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
          <CardDescription className="mb-4">{project.description}</CardDescription>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, i) => (
              <Badge key={i} variant="secondary">{tech}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <project.website>
            <ExternalLink className="mr-2 h-4 w-4"/>
            Visit Site
          </project.website>
          <Button variant="outline" size="sm" asChild>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4"/>
              View Code
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default Page;