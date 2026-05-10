import { Button } from "@/shared/ui/button";

import { Card } from "@/shared/ui/Card/card";

import { CircleBadge } from "@/shared/ui/circle-badge";

import { Input } from "@/shared/ui/input";
import { Textarea } from "@/shared/ui/text-area";

import { Mail, MapPin, Smartphone, Send } from "lucide-react";

import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <div
      className="
      w-full
      max-w-[1200px]
      mx-auto
      
      
    "
    >
      {/* MAIN CARD */}
      <Card
        className="
        relative

        overflow-hidden

        bg-glass-light

        border border-white/10

        p-4
       
      "
      >
        <div
          className="
         flex flex-row items-center p-2
        "
        >
          {/* LEFT CONTENT */}
          <div
            className="
            flex flex-col
            justify-between

         
            w-[50%]
            gap-8

            p-4
            xl:p-8
          "
          >
            {/* TEXT */}
            <div className="flex flex-col gap-8">
              <div className="">
                <h1
                  className="
                  text-5xl
                  xl:text-6xl

                  font-bold

                  text-white

                  leading-tight
                "
                >
                  Vamos construir algo{" "}
                  <span className="text-primary">incrível?</span>
                </h1>
              </div>

              <p
                className="
                text-gray

                text-lg
                xl:text-xl

                leading-relaxed

                max-w-[600px]
              "
              >
                Disponível para oportunidades remotas e projetos freelancer.
                Entre em contato para discutirmos como posso ajudar sua ideia a
                ganhar vida.
              </p>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <CircleBadge variant="glass" size="md" className="bg-glass-blue">
                  <Mail size={22} className="text-primary" />
                </CircleBadge>

                <span className="text-gray text-lg">
                  matheusphillip170@gmail.com
                </span>
              </div>

              <div className="flex items-center gap-2">
                <CircleBadge variant="glass" size="md" className="bg-glass-blue">
                  <Smartphone size={22} className="text-primary" />
                </CircleBadge>

                <span className="text-gray text-lg">+55 (86) 98145-1876</span>
              </div>

              <div className="flex items-center gap-2">
                <CircleBadge variant="glass" size="md" className="bg-glass-blue">
                  <MapPin size={22} className="text-primary" />
                </CircleBadge>

                <span className="text-gray text-lg">Parnaíba • PI</span>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://github.com/matheusconaga" target="_blank">
                  <FaGithub size={24} className="text-primary" />
                </a>
              </CircleBadge>

              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://linkedin.com/in/matheusconaga" target="_blank">
                  <FaLinkedin size={24} className="text-primary" />
                </a>
              </CircleBadge>

              <CircleBadge variant="outline" clickable size="lg">
                <a href="https://wa.me/5586981451876" target="_blank">
                  <FaWhatsapp size={24} className="text-primary" />
                </a>
              </CircleBadge>
            </div>
          </div>

          {/* FORM CARD */}
          <div className="">
            <Card
              className="
            bg-glass-light

            border border-white/10

            backdrop-blur-2xl
            
            p-8

            flex flex-col
            gap-6

            hover:border-primary/20
            hover:shadow-xl
            hover:shadow-primary/10

            duration-300
          "
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Nome" placeholder="Insira seu nome" />

                <Input label="Email" placeholder="Insira seu email" />
              </div>

              <Input
                label="Assunto"
                placeholder="Insira o assunto da mensagem (ex: Projeto, Parceria, etc...)"
              />

              <Textarea
                label="Mensagem"
                placeholder="Escreva sua mensagem..."
              />

              <div className="flex flex-col gap-4 mt-2">
                <Button
                  variant="primary-xl"
                  leftIcon={<Send size={20} />}
                  className="w-full"
                >
                  Enviar Email
                </Button>

                <Button
                  variant="outline-xl"
                  leftIcon={<FaWhatsapp size={20} />}
                  className="w-full"
                >
                  Enviar WhatsApp
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </Card>
    </div>
  );
}
