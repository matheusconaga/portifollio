export function ProjectsSkeleton() {
  return (
    <div className="flex justify-center items-center w-full max-w-[1200px] align-start gap-8 mx-auto py-10">
      <div className="flex flex-col gap-8 w-full">
        <div className="absolute top-[-120px] w-[300px] h-[300px] sm:w-full sm:h-[200px] bg-glass-blue blur-[120px] pointer-events-none z-0" />

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="flex flex-col gap-3">
            <div className="h-6 w-32 rounded-full bg-muted/30 animate-pulse" />
            <div className="h-12 w-[280px] sm:w-[420px] rounded-full bg-muted/30 animate-pulse" />
          </div>

          <div className="flex gap-3 flex-wrap">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="h-10 w-24 rounded-full bg-muted/20 animate-pulse"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 lg:gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="
                flex flex-col
                w-full
                rounded-3xl
                overflow-hidden
                bg-glass-light
                border border-white/10
                animate-pulse
                min-h-[480px] sm:min-h-[540px] /* Garante uma base de altura estável por card */
              "
            >
              <div className="h-[190px] sm:h-[220px] lg:h-[240px] w-full bg-muted/30" />

              <div className="p-4 sm:p-5 flex flex-col items-center gap-4 flex-1">
                <div className="h-7 w-2/3 rounded-full bg-muted/30" />

                <div className="flex justify-center gap-2 w-full">
                  <div className="h-6 w-16 rounded-full bg-muted/20" />
                  <div className="h-6 w-20 rounded-full bg-muted/20" />
                  <div className="h-6 w-14 rounded-full bg-muted/20" />
                </div>

                <div className="flex flex-col gap-2 w-full mt-2">
                  <div className="h-4 w-full rounded-full bg-muted/20" />
                  <div className="h-4 w-[90%] mx-auto rounded-full bg-muted/20" />
                  <div className="h-4 w-[75%] mx-auto rounded-full bg-muted/20" />
                </div>
              </div>

              <div className="flex justify-center px-6 pb-6 pt-0">
                <div className="flex flex-col sm:flex-row w-full gap-3 mt-4">
                  <div className="h-11 flex-1 rounded-full bg-muted/30" />
                  <div className="h-11 flex-1 rounded-full bg-muted/20" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
