"use client"

import { Card } from "@/components/ui/card";
import { ArrowRight, CodeIcon} from "lucide-react";
import { cn } from "@/lib/utils"
import { useRouter } from "next/navigation";


const tools = [
 
  {
    label: "Code Compiler",
    icon: CodeIcon,
    href: "/codecompiler",
    bgColor: "bg-emerald-500/10",
    color: "text-emerald-500"

  },
 

]

const DashboardPage = () => {
  const router = useRouter();
  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Code It

        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-ld text-center ">Code here !!</p>

      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4 ">
        {tools.map((tool) => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4  border-solid flex items-center justify-between hover:shadow-md transition cursor-pointer  border-violet-600  hover:border-pink-500"
          >
            <div className="flex items-center gap-x-4 ">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("w-8 h-8 ", tool.color)} />

              </div>
              <div className="font-semiold ">
                {tool.label}

              </div>

            </div>
            <ArrowRight className="w-5 h-5" />


          </Card>

        ))}


      </div>

    </div>

  )
}

export default DashboardPage;