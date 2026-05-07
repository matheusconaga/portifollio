import { Construction } from "lucide-react"

import { Card } from "./Card/card"
import { CardContent } from "./Card/card-content"
import { CardTitle } from "./Card/card-title"
import { CardDescription } from "./Card/card-description"

interface EmptyProjectCardProps {
  category: string
}

export function EmptyProjectCard({
  category,
}: EmptyProjectCardProps) {
  return (
    <Card
      variant="glass-light"
      className="
        group

        flex flex-col
        items-center
        justify-center

        min-h-[420px]

        border-dashed
        border-white/10

        transition-all duration-500

        hover:border-primary/20
        hover:bg-glass-blue/20
      "
    >
      <CardContent
        className="
          flex flex-col
          items-center
          justify-center
          text-center
          gap-5
          h-full
        "
      >
        {/* Ícone */}
        <div
          className="
            flex items-center justify-center

            w-20 h-20

            rounded-full

            bg-glass-blue

            border border-white/10

            shadow-lg shadow-primary/10
          "
        >
          <Construction
            size={38}
            className="
              text-primary
              group-hover:rotate-6
              transition-transform duration-300
            "
          />
        </div>

        {/* Título */}
        <CardTitle className="text-2xl">
          Em construção
        </CardTitle>

        {/* Categoria */}
        <span
          className="
            px-4 py-1

            rounded-full

            text-sm
            font-semibold

            bg-glass-blue
            text-primary

            border border-white/10
          "
        >
          {category}
        </span>

        {/* Descrição */}
        <CardDescription
          className="
            max-w-[260px]

            text-base
            leading-relaxed

            text-center
          "
        >
          Ainda não existem projetos cadastrados
          nesta categoria.
        </CardDescription>
      </CardContent>
    </Card>
  )
}