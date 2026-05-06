import react_logo from "@/assets/tecs/react.png"
import { Card } from "@/shared/ui/Card/card";
import { CardDescription } from "@/shared/ui/Card/card-description";
import { CardImage } from "@/shared/ui/Card/card-image";
import { CardTitle } from "@/shared/ui/Card/card-title";


export default function About() {

    return (

        <div className="flex justify-center items-center h-screen">

            <div className="flex flex-col w-210 align-start gap-8">
                <div className=" flex flex-col rounded-lg text-white font-bold text-5xl gap-4">
                    <span>Transformando ideias</span>
                    <span className="flex gap-4">
                        <span>em</span>
                        <span className="text-primary">código de alto impacto</span>
                    </span>

                </div>
                <div className=" flex w-180">
                    <span className="text-gray text-2xl">Sou desenvolvedor Fullstack focado em criar produtos
                        digitais performáticos, bonitos e escaláveis. Tenho
                        experiência com web, mobile, APIs e automação com IA.</span>
                </div>
                <div className="relative w-140 h-60 grid grid-cols-2 gap-4 ">
                    <Card className="flex flex-col w-full h-full gap-2 items-center justify-center hover:bg-glass-dark">
                        <CardTitle className="text-primary text-3xl font-bold text-center">+2 anos</CardTitle>
                        <CardDescription className="text-white text-xl text-center">Criando soluções digitais</CardDescription>
                    </Card>
                    <Card className="flex flex-col w-full h-full gap-2 items-center justify-center hover:bg-glass-dark">
                        <CardTitle className="text-primary text-3xl font-bold text-center">+30%</CardTitle>
                        <CardDescription className="text-white text-xl text-center">Engajamento de usuários</CardDescription>
                    </Card>
                    <Card className="flex flex-col w-full h-full gap-2 items-center justify-center hover:bg-glass-dark">
                        <CardTitle className="text-primary text-3xl font-bold text-center">-30%</CardTitle>
                        <CardDescription className="text-white text-xl text-center">Redução de tarefas manuais</CardDescription>
                    </Card>
                    <Card className="flex flex-col w-full h-full gap-2 items-center justify-center hover:bg-glass-dark">
                        <CardTitle className="text-primary text-3xl font-bold text-center">+20-30%</CardTitle>
                        <CardDescription className="text-white text-xl text-center">Engajamento de usuários</CardDescription>
                    </Card>

                </div>

            </div>

            <div className="relative w-120 h-120 grid grid-cols-2 gap-2">

                <Card className="w-full h-full rounded-lg overflow-hidden">
                    <CardImage
                        src={react_logo}
                        alt="Logo React"
                        fit="contain"
                        position="center"
                    />
                </Card>
                <Card className="w-full h-full rounded-lg overflow-hidden">
                    <CardImage
                        src={react_logo}
                        alt="Logo React"
                        fit="contain"
                        position="center"
                    />
                </Card>
                <Card className="w-full h-full rounded-lg overflow-hidden">
                    <CardImage
                        src={react_logo}
                        alt="Logo React"
                        fit="contain"
                        position="center"
                    />
                </Card>
                <Card className="w-full h-full rounded-lg overflow-hidden">
                    <CardImage
                        src={react_logo}
                        alt="Logo React"
                        fit="contain"
                        position="center"
                    />
                </Card>


            </div>

        </div>


    )
}