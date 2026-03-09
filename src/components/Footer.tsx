import { ArrowUp } from "lucide-react";
import { Container } from "./Container";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Footer() {
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowTopBtn(window.scrollY > 400);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="w-full border-t border-secondary/50 bg-background py-8">
            <Container className="flex flex-col md:flex-row items-center justify-center text-center gap-4">                <div className="text-foreground/60 text-sm">
                © {new Date().getFullYear()} Thasmeer. All rights reserved.
            </div>

                {/* <div className="text-foreground/50 text-sm">
                    Built with React, Tailwind CSS, and Framer Motion.
                </div> */}
            </Container>

            <AnimatePresence>
                {showTopBtn && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors z-50 group"
                        aria-label="Scroll to top"
                    >
                        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
                    </motion.button>
                )}
            </AnimatePresence>
        </footer>
    );
}
