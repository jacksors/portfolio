"use client"

import {motion} from "framer-motion";
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ExternalLink, Github} from "lucide-react";

const projects = [
  {
    title: "AI Chat Bot",
    description: "An intelligent chatbot powered by GPT-3, designed to provide human-like conversations and assist users with various tasks. Features include multi-language support, context awareness, and integration with popular messaging platforms.",
    image: "/placeholder.svg?height=200&width=300",
    website: "https://example.com/chatbot",
    github: "https://github.com/yourusername/ai-chatbot",
    technologies: ["React", "Node.js", "OpenAI API", "WebSocket"]
  },
  {
    title: "Code Analyzer",
    description: "A powerful static code analysis tool that helps developers identify and fix potential bugs, security vulnerabilities, and style issues in their code. Supports multiple programming languages and integrates with popular IDEs and CI/CD pipelines.",
    image: "/placeholder.svg?height=200&width=300",
    website: "https://example.com/code-analyzer",
    github: "https://github.com/yourusername/code-analyzer",
    technologies: ["Python", "AST", "Docker", "REST API"]
  },
  {
    title: "Task Manager",
    description: "A productivity app with AI-powered suggestions to help users organize their tasks, set priorities, and manage their time more effectively. Features include smart task categorization, time tracking, and personalized productivity insights.",
    image: "/placeholder.svg?height=200&width=300",
    website: "https://example.com/task-manager",
    github: "https://github.com/yourusername/task-manager",
    technologies: ["Vue.js", "Express", "MongoDB", "Machine Learning"]
  },
]

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

const slideIn = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5 } }
}

const Page = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div key={index} variants={slideIn}>
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
                <Button variant="outline" size="sm" asChild>
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4"/>
                    Visit Site
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4"/>
                    View Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Page;