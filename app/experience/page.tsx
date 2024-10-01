import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface Experience {
  years: string[];
  title: string;
  company: string;
  logo: string;
  description?: string;
  achievements: string[];
  skills: string[];
}

const experiences: Experience[] = [
  {
    years: ["November 2023 - May 2024", "September 2024 - Present"],
    title: "Junior Developer",
    company: "Frogslayer",
    logo: "/frogslayer_logo.jpeg",
    description:
      "We partner with select clients to rapidly build, launch, and scale software products that create new revenue streams and sources of competitive advantage. Many of our clients are service-based, mid-market companies in compliance-heavy industries like legal, financial services, and healthcare. We help them fundamentally change their operating model to become a software-driven business, regularly creating new value for their customers and staying ahead of changing markets.",
    achievements: [
      "Played a key role in a team of 7 for a critical software rescue project, developing a user-friendly web interface that enables seamless scheduling integration for the client's customers with various third-party APIs.",
      "Improved the client's existing cluttered Angular and Python codebases with a focus on maintainability while introducing new features.",
      "Contributed to the development of a robust new C# .NET Core API for managing integrations, designed for smooth compatibility with the client's existing systems.",
    ],
    skills: [".NET Core", "C#", "Angular", "Python", "React", "Electron"],
  },
  {
    years: ["May 2024 - August 2024"],
    title: "Software Development Intern",
    company: "Paycom Payroll",
    logo: "/paycom_logo.png",
    achievements: [
      "Developed a unified design portal using Next.js and PHP in collaboration with 7 other interns and a UI Design team, significantly enhancing cross-technology development across legacy PHP/jQuery and newer React systems.",
      "Leveraged personal expertise in Next.js to mentor team members, significantly boosting overall productivity and knowledge sharing.",
      "Won 1st place in a weekend-long Codeathon competition, designing and creating a C# .NET Core back-end for an internal team selection system.",
    ],
    skills: ["Next.js", "PHP", "React", ".NET Core", "C#"],
  },
  {
    years: ["May 2023 - August 2023"],
    title: "Automation Developer",
    company: "CASA",
    logo: "/casa_logo.jpeg",
    achievements: [
      "Researched and developed a platform written in Go using the OpenAI API to enhance advanced search capabilities in internal documents, streamlining corporate training and customer service.",
      "Implemented embedding-based search functionality for efficient querying of internal documents, storing the embeddings in a PostgreSQL database.",
      "Deployed the system on Google Cloud Platform using a CI/CD pipeline, ensuring scalable and robust performance.",
    ],
    skills: ["Go", "OpenAI API", "Postgres"],
  },
  {
    years: ["June 2022 - August 2022"],
    title: "Student Intern",
    company: "CISO Global",
    logo: "/ciso_logo.jpeg",
    achievements: [
      "Collaborated with a Web 3.0 startup to integrate their API into a custom toolkit that can be utilized to help develop future applications requiring cryptographic timestamping of sensitive information on a blockchain.",
    ],
    skills: ["Python", "Blockchain"],
  },
];

const Page = () => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-8">Work Experience</h2>
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="flex flex-col md:flex-row justify-between gap-4">
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
                  {job.years.map((year) => (
                    <span key={year} className="text-sm text-muted-foreground">
                      {year}
                    </span>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {job.description ? (
                <p className="mb-4">{job.description}</p>
              ) : null}
              <h4 className="font-semibold mb-2">Key Achievements:</h4>
              <ul className="list-disc list-inside mb-4">
                {job.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <h4 className="font-semibold mb-2">Skills Used:</h4>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <Badge key={i} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
};

export default Page;
