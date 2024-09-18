"use client";

import {motion} from "framer-motion";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import Image from "next/image";
import {Badge} from "@/components/ui/badge";
import {fadeIn, slideVariants} from "@/lib/animations";
import {useNavigationContext} from "@/contexts/navigation";

interface Experience {
  years: string[]
  title: string
  company: string
  logo: string
  description?: string
  achievements: string[]
  skills: string[]
}

const experiences: Experience[] = [
  {
    years: ["Nov. 2023 - May 2024", "Sep. 2024 - Present"],
    title: "Junior Developer",
    company: "Frogslayer",
    logo: "/frogslayer_logo.jpeg",
    description: "We partner with select clients to rapidly build, launch, and scale software products that create new revenue streams and sources of competitive advantage. Many of our clients are service-based, mid-market companies in compliance-heavy industries like legal, financial services, and healthcare. We help them fundamentally change their operating model to become a software-driven business, regularly creating new value for their customers and staying ahead of changing markets.",
    achievements: [
      "Played a key role in a team of 7 for a critical software rescue project, developing a user-friendly web interface that enables seamless scheduling integration for the client's customers with various third-party APIs.",
      "Improved the client's existing cluttered Angular and Python codebases with a focus on maintainability while introducing new features.",
      "Contributed to the development of a robust new C# .NET Core API for managing integrations, designed for smooth compatibility with the client's existing systems."
    ],
    skills: [".NET Core", "C#", "Angular", "Python"]
  },
  {
    years: ["May 2024 - Aug. 2024"],
    title: "Software Development Intern",
    company: "Paycom Payroll",
    logo: "/paycom_logo.png",
    achievements: [
      "Developed a unified design portal using Next.js and PHP in collaboration with 7 other interns and a UI Design team, significantly enhancing cross-technology development across legacy PHP/jQuery and newer React systems.",
      "Leveraged personal expertise in Next.js to mentor team members, significantly boosting overall productivity and knowledge sharing.",
      "Won 1st place in a weekend-long Codeathon competition, designing and creating a C# .NET Core back-end for an internal team selection system."
    ],
    skills: ["JavaScript", "React", "Vue.js", "PHP", "MySQL", "Redis"]
  },
  {
    years: ["2016 - 2018"],
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

const Page = () => {
  const {direction} = useNavigationContext();

  return (
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
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <motion.div key={index} variants={fadeIn}>
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
                  <div className="flex flex-col-reverse">
                    {job.years.map(year => (<span key={year} className="text-sm text-muted-foreground">{year}</span>))}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {job.description ? <p className="mb-4">{job.description}</p> : null}
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