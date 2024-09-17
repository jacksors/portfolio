"use client";

import {motion} from "framer-motion";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";

const experiences = [
  {
    year: "2021 - Present",
    title: "Senior Developer",
    company: "Tech Innovators Inc.",
    logo: "/placeholder.svg?height=40&width=40",
    description: "Lead developer for cutting-edge AI-powered applications. Responsible for architecture design, team mentoring, and implementing best practices in software development.",
    achievements: [
      "Reduced application load time by 40% through optimizations",
      "Implemented a microservices architecture, improving scalability",
      "Mentored junior developers, increasing team productivity by 25%"
    ],
    skills: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"]
  },
  {
    year: "2018 - 2021",
    title: "Full Stack Developer",
    company: "WebSolutions Co.",
    logo: "/placeholder.svg?height=40&width=40",
    description: "Developed and maintained various web applications for clients across different industries. Focused on creating responsive, user-friendly interfaces and robust backend systems.",
    achievements: [
      "Delivered 15+ successful projects for high-profile clients",
      "Introduced automated testing, reducing bug reports by 30%",
      "Optimized database queries, improving overall system performance"
    ],
    skills: ["JavaScript", "React", "Vue.js", "PHP", "MySQL", "Redis"]
  },
  {
    year: "2016 - 2018",
    title: "Junior Developer",
    company: "StartUp Ventures",
    logo: "/placeholder.svg?height=40&width=40",
    description: "Assisted in the development of innovative web and mobile applications for startups. Gained extensive experience in agile methodologies and rapid prototyping.",
    achievements: [
      "Contributed to 5 successful product launches",
      "Implemented responsive designs, improving mobile user engagement by 50%",
      "Assisted in the migration of legacy systems to modern tech stacks"
    ],
    skills: ["HTML", "CSS", "JavaScript", "React Native", "Node.js", "MongoDB"]
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
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <motion.div key={index} variants={slideIn}>
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>{job.company}</CardDescription>
                    </div>
                  </div>
                  <span className="text-sm text-muted-foreground">{job.year}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{job.description}</p>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="list-disc list-inside mb-4">
                  {job.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <h4 className="font-semibold mb-2">Skills Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <Badge key={i} variant="outline">{skill}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Page;