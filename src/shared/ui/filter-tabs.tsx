import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FilterItem {
  label: string;
  value: string;
}

interface FilterTabsProps {
  items: FilterItem[];
  active: string;
  onChange: (value: string) => void;
}

export function FilterTabs({
  items,
  active,
  onChange,
}: FilterTabsProps) {
  const [open, setOpen] = useState(false);

  const activeItem =
    items.find((item) => item.value === active);

  return (
    <>
      {/* DESKTOP */}
      <div
        className="
          hidden md:flex

          group
          relative

          items-center
          gap-2

          p-2

          rounded-full

          border border-white/10

          bg-glass-light

          backdrop-blur-2xl

          shadow-lg shadow-black/10

          overflow-hidden
        "
      >
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
          const isActive =
            active === item.value;

          return (
            <motion.button
              key={item.value}
              onClick={() =>
                onChange(item.value)
              }
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.96 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 20,
              }}
              className="
                relative

                px-6 py-2.5

                rounded-full

                text-sm
                font-semibold

                cursor-pointer
                overflow-hidden

                hover:text-primary
                hover:-translate-y-1

                transition-all duration-300
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
                "
              />

              <span
                className={`
                  relative z-10 transition-all duration-300
                  ${
                    isActive
                      ? "text-white"
                      : "text-gray"
                  }
                `}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>

      {/* MOBILE */}
      <div className="relative md:hidden w-full">
        <button
          onClick={() => setOpen(!open)}
          className="
            flex
            items-center
            justify-between

            w-full

            px-4 py-3

            rounded-2xl

            border border-white/10

            bg-glass-light

            backdrop-blur-xl

            text-white
          "
        >
          <span className="font-medium">
            {activeItem?.label}
          </span>

          <ChevronDown
            size={18}
            className={`
              transition-transform duration-300
              ${open ? "rotate-180" : ""}
            `}
          />
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              transition={{
                duration: 0.2,
              }}
              className="
                absolute
                top-[110%]
                left-0

                z-50

                flex
                flex-col

                w-full

                p-2

                rounded-2xl

                border border-white/10

                bg-glass-dark

                backdrop-blur-2xl

                shadow-2xl shadow-black/30
              "
            >
              {items.map((item) => {
                const isActive =
                  active === item.value;

                return (
                  <button
                    key={item.value}
                    onClick={() => {
                      onChange(item.value);
                      setOpen(false);
                    }}
                    className={`
                      px-4 py-3

                      rounded-xl

                      text-left
                      text-sm

                      transition-all duration-300

                      ${
                        isActive
                          ? "bg-primary text-primary-foreground font-semibold"
                          : "text-white hover:text-white"
                      }
                    `}
                  >
                    {item.label}
                  </button>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

