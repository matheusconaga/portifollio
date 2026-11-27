
import { useLayoutEffect } from "react";

const SCROLL_KEY = "portfolio-scroll-position";

export function useRestoreScroll() {
    useLayoutEffect(() => {
        const savedPosition = sessionStorage.getItem(SCROLL_KEY);

        if (savedPosition === null) return;

        const targetPosition = Number(savedPosition);

        if (!Number.isFinite(targetPosition)) return;

        let animationFrame = 0;
        let attempts = 0;

        const maxAttempts = 120;

        const restore = () => {
            attempts++;

            const availableHeight =
                document.documentElement.scrollHeight;

            const canRestore =
                availableHeight >=
                targetPosition + window.innerHeight;

            if (canRestore || attempts >= maxAttempts) {
                window.scrollTo({
                    top: targetPosition,
                    left: 0,
                    behavior: "instant",
                });

                sessionStorage.removeItem(SCROLL_KEY);
                return;
            }

            animationFrame = requestAnimationFrame(restore);
        };

        animationFrame = requestAnimationFrame(restore);

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, []);
}
