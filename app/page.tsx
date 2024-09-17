"use client"

import Image from "next/image";

export default function Home() {
  return (
    <div className={"flex flex-col gap-32 py-12"}>
      {/* hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center lg:grid lg:grid-cols-2 items-center justify-center">
          <div className="mx-auto max-w-xl">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              Jackson Stone
            </p>
            <p className="mt-4 max-w-2xl text-xl lg:mx-auto">
              Full-stack developer with a passion for building products that make a difference.
            </p>
          </div>
          <Image src={"/placeholder.jpg"} alt={"Headshot of Jackson Stone"} width={500} height={500}/>
        </div>
      </section>

      {/* work experience */}
      <section>

      </section>

      {/* projects */}
      <section>

      </section>
    </div>
  );
}
