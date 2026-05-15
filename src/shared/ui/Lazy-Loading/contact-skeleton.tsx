export function ContactSkeleton() {
  return (
    <div
      className="
        relative
        w-full
        mx-auto
        rounded-2xl
        overflow-hidden
        bg-glass-light
        xl:bg-transparent
      "
    >
      {/* GLOWS */}
      <div
        className="
          absolute
          top-[-80px]
          left-[-80px]

          w-[220px]
          h-[220px]

          sm:top-[-120px]
          sm:left-[-120px]
          sm:w-[400px]
          sm:h-[400px]

          rounded-full
          bg-primary/20
          blur-[100px]
          sm:blur-[120px]

          opacity-70
          pointer-events-none
          z-0
        "
      />

      <div
        className="
          absolute
          bottom-[-60px]
          right-[-60px]

          w-[180px]
          h-[180px]

          sm:bottom-[-80px]
          sm:right-[-80px]
          sm:w-[420px]
          sm:h-[420px]

          rounded-full
          bg-cyan-400/10
          blur-[80px]
          sm:blur-[100px]

          opacity-70
          pointer-events-none
          z-0
        "
      />

      {/* MAIN CARD */}
      <div
        className="
          relative
          overflow-hidden

          xl:bg-glass-light
          xl:border xl:border-white/10

          rounded-3xl

          animate-pulse
        "
      >
        <div
          className="
            flex flex-col
            xl:flex-row

            items-stretch

            gap-8
            xl:gap-10

            p-2
            py-6
            sm:p-4
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              flex flex-col
              justify-between

              w-full
              xl:w-[50%]

              gap-8

              p-2
              sm:p-4
              xl:p-6
            "
          >
            {/* TITLE + TEXT */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="flex flex-col gap-4">
                <div
                  className="
                    h-12
                    sm:h-16

                    w-[90%]

                    rounded-2xl
                    bg-muted/30
                  "
                />

                <div
                  className="
                    h-12
                    sm:h-16

                    w-[60%]

                    rounded-2xl
                    bg-muted/20
                  "
                />
              </div>

              <div className="flex flex-col gap-3">
                <div className="h-4 w-full rounded-full bg-muted/20" />
                <div className="h-4 w-[95%] rounded-full bg-muted/20" />
                <div className="h-4 w-[80%] rounded-full bg-muted/20" />
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="flex flex-col gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3"
                >
                  <div
                    className="
                      w-9
                      h-9

                      rounded-full
                      bg-muted/30
                    "
                  />

                  <div
                    className="
                      h-5
                      w-52

                      rounded-full
                      bg-muted/20
                    "
                  />
                </div>
              ))}
            </div>

            {/* SOCIALS */}
            <div className="flex gap-4">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="
                    w-14
                    h-14

                    rounded-full
                    bg-muted/20
                  "
                />
              ))}
            </div>
          </div>

          {/* FORM */}
          <div
            className="
              w-full
              xl:w-[40%]

              flex
              items-center
              justify-center
            "
          >
            <div
              className="
                w-full
                xl:max-w-[620px]

                bg-glass-light
                border border-white/10

                rounded-3xl

                p-4
                sm:p-6

                flex flex-col
                gap-4
              "
            >
              {/* INPUTS */}
              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-4
                "
              >
                <div className="h-14 rounded-2xl bg-muted/20" />
                <div className="h-14 rounded-2xl bg-muted/20" />
              </div>

              <div className="h-14 rounded-2xl bg-muted/20" />

              <div
                className="
                  h-[160px]
                  rounded-2xl
                  bg-muted/20
                "
              />

              {/* BUTTONS */}
              <div className="flex flex-col gap-4 mt-2">
                <div
                  className="
                    h-14
                    rounded-full
                    bg-muted/30
                  "
                />

                <div
                  className="
                    h-14
                    rounded-full
                    bg-muted/20
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}