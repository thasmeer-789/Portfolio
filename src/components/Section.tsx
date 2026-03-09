import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
}

export function Section({ id, className, children }: SectionProps) {
    return (
        <motion.section
            id={id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={cn("py-20 md:py-32", className)}
        >
            {children}
        </motion.section>
    );
}
