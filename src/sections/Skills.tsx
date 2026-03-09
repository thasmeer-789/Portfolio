import { motion } from "framer-motion";
import { Code2, Database, PenTool } from "lucide-react";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

const skillCategories = [
    {
        title: "Frontend",
        icon: <Code2 className="w-6 h-6 text-primary" />,
        skills: ["Next.js", "React", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
    },
    {
        title: "Backend",
        icon: <Database className="w-6 h-6 text-primary" />,
        skills: ["C#", "ASP.NET", "SQL Server"],
    },
    {
        title: "Tools & Design",
        icon: <PenTool className="w-6 h-6 text-primary" />,
        skills: ["Git", "GitHub", "VS Code", "Visual Studio"],
    },
];

export function Skills() {
    return (
        <Section id="skills">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {skillCategories.map((category, idx) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="p-6 rounded-2xl border border-secondary/50 bg-secondary/10 hover:bg-secondary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                        >
                            <div className="flex items-center gap-4 mb-6 pb-4 border-b border-secondary/50">
                                <div className="p-3 bg-primary/10 rounded-xl">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-semibold">{category.title}</h3>
                            </div>

                            <ul className="space-y-3">
                                {category.skills.map((skill) => (
                                    <li key={skill} className="flex items-center gap-3 text-foreground/80">
                                        <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                        <span>{skill}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
