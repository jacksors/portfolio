import {CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {ArrowRight, Blocks, CheckCircleIcon, ClockIcon, LogIn, UserSearch, UsersIcon} from "lucide-react";
import Image from "next/image";
import {Card} from "@/components/3D/Card";


export default function Home() {

  return (
    <div className={"flex flex-col gap-32 py-12"}>
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
      <section>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="lg:grid lg:grid-cols-3 lg:gap-8 p-4 bg-secondary shadow-md">
            <CardContent className="lg:col-span-2 lg:pt-6">
              <dl className="space-y-4">
                <Card className="flex p-4">
                  <CheckCircleIcon className="h-6 w-6 text-primary"/>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium">Placeholder</dt>
                    <dd className="mt-2 text-base text-muted-foreground">
                      Description.
                    </dd>
                  </div>
                </Card>
                <Card className="flex p-4">
                  <ClockIcon className="h-6 w-6 text-primary"/>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium">Placeholder</dt>
                    <dd className="mt-2 text-base text-muted-foreground">
                      Description.
                    </dd>
                  </div>
                </Card>
                <Card className="flex p-4">
                  <UsersIcon className="h-6 w-6 text-primary"/>
                  <div className="ml-4">
                    <dt className="text-lg leading-6 font-medium">Placeholder</dt>
                    <dd className="mt-2 text-base text-muted-foreground">
                      Description.
                    </dd>
                  </div>
                </Card>
              </dl>
            </CardContent>
            <CardHeader>
              <div className={"flex items-center gap-4"}>
                <CardTitle className={"text-3xl font-extrabold sm:text-3xl"}>
                  Browse Projects
                </CardTitle>
                <ArrowRight />
              </div>
            </CardHeader>
          </Card>
        </div>
      </section>
    </div>
  );
}
