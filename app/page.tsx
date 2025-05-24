import H1 from "@/components/typography/h1";
import H2 from "@/components/typography/h2";
import H3 from "@/components/typography/h3";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div
        className="min-h-screen flex items-center justify-center gap-10 p-10 md:gap-20 md:p-20 lg:gap-30 lg:p-30 xl:gap-40 xl:p-40">
        <div className="flex flex-col justify-center">
          <H1>Jackson Stone</H1>
          <H2>Software Engineer at Toyota Financial Services</H2>
          <H3 className="mt-4">Crafting innovative solutions to full-stack challenges, flying planes, or exploring the
            world.</H3>
        </div>
        <div className="flex justify-center">
          <Image src="/new_zealand.jpeg" alt="Jackson Stone in New Zealand" width={500} height={500}
                 className="border-b-8 border-foreground-offset" priority/>
        </div>
      </div>
    </>
  );
}
