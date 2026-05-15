export function ExperienceSkeleton() {
  return (
    <div className="w-full max-w-[1200px] mx-auto py-20">
      <div className="flex flex-col gap-20">
        {/* HEADER */}
        <div
          className="
            flex
            flex-col
            lg:flex-row

            lg:items-end
            justify-between

            gap-6
          "
        >
          {/* TITLES */}
          <div className="flex flex-col gap-3">
            <div
              className="
                h-6
                w-32
                rounded-full
                bg-muted/30
                animate-pulse
              "
            />

            <div
              className="
                h-12
                w-[280px]
                sm:w-[420px]

                rounded-full
                bg-muted/30
                animate-pulse
              "
            />
          </div>

          {/* FILTERS */}
          <div className="flex gap-3 flex-wrap">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="
                  h-10
                  w-36
                  rounded-full
                  bg-muted/20
                  animate-pulse
                "
              />
            ))}
          </div>
        </div>

        {/* TIMELINE */}
        <div className="relative flex flex-col gap-16 md:gap-30">
          {/* MOBILE LINE */}
          <div
            className="
              absolute
              left-[11px]
              top-0

              h-full
              w-[2px]

              bg-white/10

              md:hidden
            "
          />

          {/* DESKTOP LINE */}
          <div
            className="
              hidden md:block

              absolute
              left-1/2
              top-0
              -translate-x-1/2

              w-[2px]
              h-full

              bg-white/10
            "
          />

          {/* ITEMS */}
          {Array.from({ length: 4 }).map((_, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`
                  relative
                  flex
                  w-full

                  ${
                    isLeft
                      ? "md:justify-start"
                      : "md:justify-end"
                  }
                `}
              >
                {/* TIMELINE DOT */}
                <div
                  className="
                    absolute

                    left-[2px]
                    md:left-1/2

                    top-8

                    md:-translate-x-1/2

                    w-5
                    h-5

                    rounded-full

                    bg-muted/30

                    animate-pulse

                    z-10
                  "
                />

                {/* CARD */}
                <div
                  className="
                    ml-10 md:ml-0

                    w-full
                    md:w-[46%]

                    rounded-3xl

                    border border-white/10
                    bg-glass-light

                    p-6

                    flex flex-col
                    gap-4

                    animate-pulse
                  "
                >
                  {/* TITLE */}
                  <div className="flex flex-col gap-3">
                    <div
                      className="
                        h-7
                        w-2/3
                        rounded-full
                        bg-muted/30
                      "
                    />

                    <div
                      className="
                        h-5
                        w-1/2
                        rounded-full
                        bg-muted/20
                      "
                    />
                  </div>

                  {/* DESCRIPTION */}
                  <div className="flex flex-col gap-2">
                    <div className="h-4 w-full rounded-full bg-muted/20" />
                    <div className="h-4 w-[95%] rounded-full bg-muted/20" />
                    <div className="h-4 w-[85%] rounded-full bg-muted/20" />
                    <div className="h-4 w-[70%] rounded-full bg-muted/20" />
                  </div>

                  {/* FOOTER */}
                  <div className="flex flex-col gap-3 pt-2">
                    <div
                      className="
                        h-5
                        w-40
                        rounded-full
                        bg-muted/20
                      "
                    />

                    <div
                      className="
                        h-5
                        w-28
                        rounded-full
                        bg-muted/20
                      "
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}