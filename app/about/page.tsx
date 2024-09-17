"use client"

import {motion} from "framer-motion";
import Image from "next/image";
import {Button} from "@/components/ui/button";
import {Github, Linkedin, Mail} from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } }
}

const Page = () => {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <div className="flex flex-col md:flex-row items-center gap-8">
        <Image
          src="/placeholder.jpg"
          alt="Developer's portrait"
          width={300}
          height={300}
          className="rounded-full border-4 border-accent shadow-lg"
        />
        <div>
          <h1 className="text-4xl font-bold mb-4">Jane Doe</h1>
          <p className="text-xl mb-4">Full Stack Developer | AI Enthusiast | Open Source Contributor</p>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Hello! I'm a passionate developer with a love for creating innovative solutions.
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying a good cup of coffee while solving coding challenges.
          </p>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <Github className="h-4 w-4"/>
            </Button>
            <Button variant="outline" size="icon">
              <Linkedin className="h-4 w-4"/>
            </Button>
            <Button variant="outline" size="icon">
              <Mail className="h-4 w-4"/>
            </Button>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Page;