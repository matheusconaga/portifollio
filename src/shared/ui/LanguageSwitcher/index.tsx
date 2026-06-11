import { motion } from "framer-motion";
import { Languages } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  {
    code: "pt",
    label: "PT",
  },
  {
    code: "en",
    label: "EN",
  },
];

interface LanguageSwitcherProps {
  mobile?: boolean;
}

export function LanguageSwitcher({
  mobile = false,
}: LanguageSwitcherProps) {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language.startsWith("pt")
    ? "pt"
    : "en";

  return (
    <div
      className={`
        relative

        flex
        items-center
        justify-center

        h-11

        px-3

        rounded-full

        border border-white/10

        bg-glass-light

        backdrop-blur-md

        overflow-hidden

        transition-all duration-500

        ${
          mobile
            ? "gap-4"
            : "group-hover:gap-4 gap-0"
        }
      `}
    >
      {/* Glow */}
      <div
        className={`
          absolute inset-0

          transition-opacity duration-500

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]

          pointer-events-none

          ${
            mobile
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }
        `}
      />

      {/* CONTENT */}
      <div
        className={`
          relative z-10

          flex
          items-center
          justify-center

          transition-all duration-500

          ${
            mobile
              ? "gap-4"
              : "gap-0 group-hover:gap-4"
          }
        `}
      >
        {/* ICON */}
        <Languages
          size={18}
          className="
            text-white/80
            shrink-0
          "
        />

        {/* OPTIONS */}
        <div
          className={`
            flex
            items-center

            overflow-hidden

            transition-all duration-500

            ${
              mobile
                ? "max-w-[120px] opacity-100"
                : `
                  max-w-0
                  opacity-0

                  group-hover:max-w-[120px]
                  group-hover:opacity-100
                `
            }
          `}
        >
          {languages.map((language) => {
            const isActive =
              currentLanguage === language.code;

            return (
              <button
                key={language.code}
                onClick={() =>
                  i18n.changeLanguage(language.code)
                }
                className="
                  relative

                  px-3 py-1.5

                  rounded-full

                  cursor-pointer

                  text-sm
                  font-semibold

                  whitespace-nowrap

                  transition-all duration-300
                "
              >
                {isActive && (
                  <motion.div
                    layoutId={`activeLanguage-${mobile}`}

                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}

                    className="
                      absolute inset-0

                      rounded-full

                      bg-accent/40

                      border border-white/10
                    "
                  />
                )}

                <span
                  className={`
                    relative z-10

                    ${
                      isActive
                        ? "text-white"
                        : "text-gray hover:text-white"
                    }
                  `}
                >
                  {language.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}