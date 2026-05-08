import { Badge } from "@/shared/ui/badge";
import { Card } from "@/shared/ui/Card/card";
import { CardDescription } from "@/shared/ui/Card/card-description";
import { CardTitle } from "@/shared/ui/Card/card-title";
import { StackCard } from "@/shared/ui/stack-card";
import { FaLaptop, FaDatabase, FaCloud } from "react-icons/fa";
import {
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiFlutter,
    SiHtml5,
    SiCss,
    SiStyledcomponents,
    SiReact,
    SiDjango,
    SiPython,
    SiFastapi,
    SiNodedotjs,
    SiPostgresql,
    SiMysql,
    SiFirebase,
    SiMongodb,
    SiGit,
    SiFigma,
    SiN8N,
    SiVercel,
    SiRender,
    SiDocker,
    SiOpenai,
    SiJfrogpipelines,
} from "react-icons/si"

export default function TechStacks() {

    const frontend = [
        { name: "React", icon: SiReact },
        { name: "Flutter", icon: SiFlutter },
        { name: "HTML", icon: SiHtml5 },
        { name: "CSS", icon: SiCss },
        { name: "Typescript", icon: SiTypescript },
        { name: "Javascript", icon: SiJavascript },
        { name: "StyledCo", icon: SiStyledcomponents },
        { name: "Tailwind", icon: SiTailwindcss },
    ]

    const backend = [
        { name: "FastAPI", icon: SiFastapi },
        { name: "Django", icon: SiDjango },
        { name: "Python", icon: SiPython },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Postgresql", icon: SiPostgresql },
        { name: "MySQL", icon: SiMysql },
        { name: "Firebase", icon: SiFirebase },
        { name: "MongoDB", icon: SiMongodb },
    ]

    const tools = [
        { name: "Git", icon: SiGit },
        { name: "Figma", icon: SiFigma },
        { name: "N8n", icon: SiN8N },
        { name: "CI/CD", icon: SiJfrogpipelines },
        { name: "Vercel", icon: SiVercel },
        { name: "Render", icon: SiRender },
        { name: "Docker", icon: SiDocker },
        { name: "OpenAI", icon: SiOpenai }
    ]

    return (

        <div className="flex justify-center items-center w-full max-w-[1200px] align-start gap-8 mx-auto py-10">

            <div className="flex flex-col gap-8 w-full">
                <div className="flex items-end justify-between">
                    <div className=" flex flex-col text-white gap-2">
                        <span className="text-2xl text-gray">Tecnologias</span>
                        <span className="text-primary text-5xl font-bold ">Stack de Especialidade</span>
                    </div>


                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

                    <Card className="p-6 items-center justify-center flex flex-col gap-4 bg-glass-light">
                        <Badge variant="glass" className="p-4  bg-glass-light border-none">
                            <FaLaptop size={20} />
                        </Badge>
                        <CardTitle className="flex flex-col text-primary text-xl font-bold">
                            Frontend & UI
                        </CardTitle>
                        <CardDescription className="grid xl:grid-cols-2 gap-3 items-center justify-center">
                            {frontend.map((tech, index) => (
                                <StackCard
                                    key={index}
                                    icon={tech.icon}
                                    name={tech.name}
                                />
                            ))}
                        </CardDescription>
                    </Card>
                    <Card className="p-6 items-center justify-center flex flex-col gap-4 bg-glass-light">
                        <Badge variant="glass" className="p-4  bg-glass-light border-none">
                            <FaDatabase size={20} />
                        </Badge>
                        <CardTitle className="flex flex-col text-primary text-xl font-bold">
                            Backend & Data
                        </CardTitle>
                        <CardDescription className="grid xl:grid-cols-2 gap-3 items-center justify-center">
                            {backend.map((tech, index) => (
                                <StackCard
                                    key={index}
                                    icon={tech.icon}
                                    name={tech.name}
                                />
                            ))}
                        </CardDescription>
                    </Card>
                    <Card className="p-6 items-center justify-center flex flex-col gap-4 bg-glass-light">
                        <Badge variant="glass" className="p-4  bg-glass-light border-none">
                            <FaCloud size={20} />
                        </Badge>
                        <CardTitle className="flex flex-col text-primary text-xl font-bold">
                            Tools & WorkFlow
                        </CardTitle>
                        <CardDescription className="grid xl:grid-cols-2 gap-3 items-center justify-center">
                            {tools.map((tech, index) => (
                                <StackCard
                                    key={index}
                                    icon={tech.icon}
                                    name={tech.name}
                                />
                            ))}
                        </CardDescription>
                    </Card>

                </div>

            </div>
        </div>
    )
}