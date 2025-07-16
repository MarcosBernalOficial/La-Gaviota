import { useEffect, useState } from "react";
import BlurText from "./BlurText";

const handleAnimationComplete = () => {};

export default function SplashScreen({ onFinish }) {
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        // Inicia fade 350ms antes del fin
        const fadeTimer = setTimeout(() => setFadeOut(true), 1650);
        const timer = setTimeout(() => {
            onFinish?.();
        }, 2000);
        return () => {
            clearTimeout(timer);
            clearTimeout(fadeTimer);
        };
    }, [onFinish]);

    return (
        <div
            className={`
                fixed inset-0 z-50 flex items-center justify-center
                bg-soft-beige transition-opacity duration-500
                ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
                min-h-screen min-w-full w-screen h-screen
            `}
            style={{
                overflowX: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <div
                className="
                    w-[100vw] max-w-xs sm:max-w-sm md:max-w-md aspect-square
                    flex items-center justify-center
                "
                style={{ minWidth: 160, minHeight: 160 }}
            >
                <BlurText
                    text="  La Gaviota"
                    delay={150}
                    animateBy="words"
                    direction="top"
                    onAnimationComplete={handleAnimationComplete}
                    className="font-title text-5xl md:text-6xl text-center w-full text-wood-brown"
                />
            </div>
        </div>
    );
}
