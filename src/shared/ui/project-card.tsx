import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"

import { Card } from "./Card/card"
import { CardImage } from "./Card/card-image"
import { CardContent } from "./Card/card-content"
import { CardDescription } from "./Card/card-description"
import { CardTitle } from "./Card/card-title"
import { CardFooter } from "./Card/card-footer"
import { CardBadges } from "./Card/card-badges"

import { CodeXml, Rocket } from "lucide-react"

interface ProjectCardProps {
  image: string
  title: string
  description: string
  techs: string[]

  deployUrl?: string
  repoUrl?: string
}

export default function ProjectCard({
  image,
  title,
  description,
  techs,
  deployUrl,
  repoUrl,
}: ProjectCardProps) {
  return (
    <Card
      variant="glass-light"
      className="
        group

        flex flex-col

        w-full

        overflow-hidden

        hover:-translate-y-1
        hover:border-primary/20

        duration-300
      "
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <CardImage
          src={image}
          alt={title}
          className="
            h-[240px]
            w-full

            object-cover

            transition-transform duration-500

            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <CardContent
        className="
          flex flex-col
          items-center
          gap-4
          p-4
          text-justify
          flex-1
        "
      >
        {/* TITLE */}
        <CardTitle className="text-2xl">
          {title}
        </CardTitle>

        {/* BADGES */}
        <CardBadges className="justify-center">
          {techs.map((tech, index) => (
            <Badge key={index} variant="glass" className="text-primary">
              {tech}
            </Badge>
          ))}
        </CardBadges>

        {/* DESCRIPTION */}
        <CardDescription
          className="
            text-base
            leading-relaxed
            text-gray
          "
        >
          {description}
        </CardDescription>
      </CardContent>

      {/* FOOTER */}
      <CardFooter
        className="
          flex justify-center
          px-6
          pb-6
          pt-0
        "
      >
        <div className="flex flex-row gap-4 mt-4">
          {deployUrl && (
            <a href={deployUrl}>
              <Button variant="primary" leftIcon={<Rocket size={25} />}>Deploy</Button>
            </a>
          )}

          {repoUrl && (
            <a href={repoUrl}>
              <Button variant="outline" leftIcon={<CodeXml size={25} />}>Repositório</Button>
            </a>
          )}
        </div>
      </CardFooter>
    </Card>
  )
}