export function TechSkeleton() {
  return (
    <div
      className="
        flex justify-center items-center
        w-full
        max-w-[1200px]
        mx-auto
        py-6 sm:py-10
      "
    >
      <div className="flex flex-col gap-8 w-full">
        <div className="flex flex-col gap-2">
          <div className="h-6 w-32 rounded-full bg-muted/30 animate-pulse" />
          <div className="h-10 sm:h-12 w-[280px] sm:w-[420px] rounded-full bg-muted/30 animate-pulse" />
        </div>

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-5 sm:gap-6
          "
        >
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="
                flex flex-col
                items-center
                justify-center
                w-full
                rounded-2xl border border-white/10
                p-5 sm:p-6
                gap-4
                bg-glass-light
                animate-pulse
              "
            >
              <div
                className="
                  w-14 h-14
                  sm:w-[60px] sm:h-[60px]
                  rounded-full
                  bg-muted/30
                  flex items-center justify-center
                "
              />

              <div className="h-6 w-36 rounded-full bg-muted/30" />

              <div className="grid grid-cols-2 gap-2 sm:gap-3 w-full">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="
                      h-11 md:h-10
                      rounded-full
                      bg-muted/20
                    "
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
