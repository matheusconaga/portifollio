import {
  useEffect,
  useRef,
  useState,
} from "react";

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

  const [
    mobileOpen,
    setMobileOpen,
  ] = useState(false);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const currentLanguage =
    i18n.language.startsWith("pt")
      ? "pt"
      : "en";

  /*
   * Fecha o seletor mobile
   * ao tocar fora dele.
   */
  useEffect(() => {
    if (
      !mobile ||
      !mobileOpen
    ) {
      return;
    }

    const handleClickOutside = (
      event: PointerEvent,
    ) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(
          event.target as Node,
        )
      ) {
        setMobileOpen(false);
      }
    };

    document.addEventListener(
      "pointerdown",
      handleClickOutside,
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handleClickOutside,
      );
    };
  }, [
    mobile,
    mobileOpen,
  ]);

  const handleLanguageChange = (
    code: string,
  ) => {
    void i18n.changeLanguage(code);

    if (mobile) {
      setMobileOpen(false);
    }
  };

  /*
   * MOBILE
   */
  if (mobile) {
    return (
      <div
        ref={containerRef}
        className="
          relative
          shrink-0
        "
      >
        {/* ICON BUTTON */}
        <button
          type="button"
          aria-label="Alterar idioma"
          aria-expanded={mobileOpen}
          onClick={() =>
            setMobileOpen(
              (prev) => !prev,
            )
          }
          className={`
            relative

            flex
            items-center
            justify-center

            w-11
            h-11

            rounded-full

            border

            backdrop-blur-md

            cursor-pointer

            active:scale-95

            transition-all
            duration-300

            ${
              mobileOpen
                ? `
                  bg-glass-light
                  border-primary/40
                  text-primary
                `
                : `
                  bg-glass-light
                  border-white/10
                  text-white/80
                `
            }
          `}
        >
          {/* GLOW */}
          <div
            className="
              absolute
              inset-0

              rounded-full

              bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]

              pointer-events-none
            "
          />

          <Languages
            size={19}
            className="
              relative
              z-10
              shrink-0
            "
          />
        </button>

        {/* MOBILE OPTIONS */}
        <div
          className={`
            absolute

            top-[calc(100%+10px)]
            right-0

            z-[100]

            flex
            items-center
            gap-1

            p-1.5

            rounded-full

            bg-glass-dark

            border
            border-white/10

            backdrop-blur-xl

            transition-all
            duration-300

            origin-top-right

            ${
              mobileOpen
                ? `
                  opacity-100
                  scale-100
                  translate-y-0
                  pointer-events-auto
                `
                : `
                  opacity-0
                  scale-95
                  -translate-y-2
                  pointer-events-none
                `
            }
          `}
        >
          {languages.map(
            (language) => {
              const isActive =
                currentLanguage ===
                language.code;

              return (
                <button
                  key={
                    language.code
                  }
                  type="button"
                  onClick={() =>
                    handleLanguageChange(
                      language.code,
                    )
                  }
                  className="
                    relative

                    min-w-11
                    h-9

                    px-3

                    rounded-full

                    cursor-pointer

                    text-sm
                    font-semibold

                    whitespace-nowrap

                    transition-colors
                    duration-300
                  "
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeLanguage-mobile"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      className="
                        absolute
                        inset-0

                        rounded-full

                        bg-accent/40

                        border
                        border-white/10
                      "
                    />
                  )}

                  <span
                    className={`
                      relative
                      z-10

                      ${
                        isActive
                          ? "text-white"
                          : "text-gray hover:text-white"
                      }
                    `}
                  >
                    {
                      language.label
                    }
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>
    );
  }

  /*
   * DESKTOP
   *
   * Mantém o comportamento
   * original de expansão
   * ao passar o mouse.
   */
  return (
    <div
      className="
        relative

        flex
        items-center
        justify-center

        h-11

        px-3

        rounded-full

        border
        border-white/10

        bg-glass-light

        backdrop-blur-md

        overflow-hidden

        transition-all
        duration-500

        group-hover:gap-4
        gap-0
      "
    >
      {/* GLOW */}
      <div
        className="
          absolute
          inset-0

          opacity-0
          group-hover:opacity-100

          transition-opacity
          duration-500

          bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08),transparent_70%)]

          pointer-events-none
        "
      />

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          flex
          items-center
          justify-center

          gap-0
          group-hover:gap-4

          transition-all
          duration-500
        "
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
          className="
            flex
            items-center

            overflow-hidden

            max-w-0
            opacity-0

            group-hover:max-w-[120px]
            group-hover:opacity-100

            transition-all
            duration-500
          "
        >
          {languages.map(
            (language) => {
              const isActive =
                currentLanguage ===
                language.code;

              return (
                <button
                  key={
                    language.code
                  }
                  type="button"
                  onClick={() =>
                    handleLanguageChange(
                      language.code,
                    )
                  }
                  className="
                    relative

                    px-3
                    py-1.5

                    rounded-full

                    cursor-pointer

                    text-sm
                    font-semibold

                    whitespace-nowrap

                    transition-all
                    duration-300
                  "
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeLanguage-desktop"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      className="
                        absolute
                        inset-0

                        rounded-full

                        bg-accent/40

                        border
                        border-white/10
                      "
                    />
                  )}

                  <span
                    className={`
                      relative
                      z-10

                      ${
                        isActive
                          ? "text-white"
                          : "text-gray hover:text-white"
                      }
                    `}
                  >
                    {
                      language.label
                    }
                  </span>
                </button>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
}