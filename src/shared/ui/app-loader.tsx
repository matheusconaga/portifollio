import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/logo_matheus.webp";

interface AppLoaderProps {
  isLoading: boolean;
}

export function AppLoader({ isLoading }: AppLoaderProps) {
  return (

    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="
            fixed
            inset-0
            z-[999999]

            flex
            items-center
            justify-center

            bg-[#080322]
          "
        >
          <div className="flex flex-col items-center gap-6">

            <motion.img
              src={logo}
              className="w-28"
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <div className="flex gap-2">
              <motion.div
                className="w-3 h-3 rounded-full bg-primary"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: 0,
                }}
              />

              <motion.div
                className="w-3 h-3 rounded-full bg-primary"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: 0.15,
                }}
              />

              <motion.div
                className="w-3 h-3 rounded-full bg-primary"
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 0.6,
                  repeat: Infinity,
                  delay: 0.3,
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}