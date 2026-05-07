import { motion } from "framer-motion"

interface FilterTabsProps {
  items: string[]
  active: string
  onChange: (value: string) => void
}

export function FilterTabs({
  items,
  active,
  onChange,
}: FilterTabsProps) {
  return (
    <div
      className="
        group
        relative

        flex items-center gap-2

        p-2

        rounded-full

        border border-white/10

        bg-glass-light

        backdrop-blur-2xl

        shadow-lg shadow-black/10

        overflow-hidden
      "
    >
      {/* Glow traseiro */}

      <div
        className="
          pointer-events-none
          absolute inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity duration-500
          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]
        "
      />

      {items.map((item) => {
        const isActive = active === item

        return (
          <motion.button
            key={item}

            onClick={() => onChange(item)}

            whileHover={{
              scale: 1.03,
            }}

            whileTap={{
              scale: 0.96,
            }}

            transition={{
              type: "spring",
              stiffness: 400,
              damping: 20,
            }}

            className="
              relative
              px-5 py-2.5
              rounded-full
              text-sm
              font-semibold
              cursor-pointer
              overflow-hidden
              transition-colors duration-300
              select-none
            "
          >

            <motion.div
              initial={false}

              animate={{
                opacity: isActive ? 1 : 0,
                scale: isActive ? 1 : 0.8,
              }}

              transition={{
                type: "spring",
                stiffness: 300,
                damping: 25,
              }}

              className="
                absolute inset-0

                rounded-full

                bg-accent/40

                backdrop-blur-2xl

                shadow-[0_0_20px_rgba(59,130,246,0.25)]

                before:absolute
                before:inset-0
                before:rounded-full
                before:bg-white/5
              "
            />

            {isActive && (
              <motion.div
                initial={{ x: "-120%" }}
                animate={{ x: "120%" }}

                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "linear",
                }}

                className="
                  absolute top-0 bottom-0
                  w-10
                  bg-white/10
                  blur-md
                  rotate-12
                "
              />
            )}

            <span
              className={`
                relative z-10

                transition-all duration-300

                ${
                  isActive
                    ? "text-white"
                    : "text-white/70"
                }
              `}
            >
              {item}
            </span>
          </motion.button>
        )
      })}
    </div>
  )
}