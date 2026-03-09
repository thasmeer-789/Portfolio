import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

const experiences = [
    {
        type: "work",
        title: "Full Stack Developer Intern",
        organization: "Bridgeon Solutions",
        period: "2025 - Present",
        description: "Developing and maintaining scalable web applications using React, Next.js,TypeScript,C#,ASP.NET and SQL. Improved application performance by 30% through code optimization."
    },
    {
        type: "work",
        title: "Web Developer Intern",
        organization: "Cognative Solutions",
        period: "2023 - 2024",
        description: "Built responsive user interfaces for client projects. Collaborated with the design team to implement pixel-perfect, accessible components."
    },
    {
        type: "education",
        title: "Bachelor of Computer Applications",
        organization: "Srinivas University",
        period: "2022 - 2025",
        description: "Graduated with honors. Coursework included Data Structures, Algorithms, Web Development, and Database Management Systems."
    }
];

export function Experience() {
    return (
        <Section id="experience">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    <div className="relative border-l-2 border-secondary/50 ml-4 md:ml-0">
                        {experiences.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="mb-12 relative pl-8 md:pl-12 last:mb-0"
                            >
                                {/* Timeline dot */}
                                <div className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                </div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                                    <h3 className="text-xl font-bold text-foreground flex items-center gap-3">
                                        {item.type === 'work' ? (
                                            <Briefcase className="w-5 h-5 text-primary" />
                                        ) : (
                                            <GraduationCap className="w-5 h-5 text-primary" />
                                        )}
                                        {item.title}
                                    </h3>
                                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary w-fit md:w-auto">
                                        {item.period}
                                    </span>
                                </div>

                                <h4 className="text-lg text-foreground/80 font-medium mb-3">
                                    {item.organization}
                                </h4>

                                <p className="text-foreground/70 leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Container>
        </Section>
    );
}
