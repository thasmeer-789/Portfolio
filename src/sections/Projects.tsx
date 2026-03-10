import { motion } from "framer-motion";
import { Github } from "lucide-react";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import bookTalesImg from "../assets/img/book-tales.png";
import eatStory from "../assets/img/eat-story.png";

const projects = [
    {
        title: "E-commerce Web App",
        description: "Book-Tales. A full-featured e-commerce platform with cart functionality, secure checkout, and user authentication.",
        image: bookTalesImg,
        tech: ["React", "Redux Toolkit", "JavaScript", "Tailwind CSS"],
        github: "https://github.com/thasmeer-789/BOOK-TALES.git",
        // live: "#"
    },
    {
        title: "Eat-Story",
        description: "A modern single-restaurant food ordering web application that allows customers to explore the menu, place orders easily, and track their delivery in real time.",
        image: eatStory,
        tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
        github: "https://github.com/thasmeer-789/EatStory.git",
        // live: "#"
    },
    // {
    //     title: "",
    //     description: "A modern single-restaurant food ordering web application that allows customers to explore the menu, place orders easily, and track their delivery in real time.",
    //     image: eatStory,
    //     tech: ["HTML5", "CSS3", "JavaScript", "PHP"],
    //     github: "https://github.com/thasmeer-789/EatStory.git",
    //     // live: "#"
    // }
];

export function Projects() {
    return (
        <Section id="projects" className="bg-secondary/20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-background rounded-2xl overflow-hidden border border-secondary/50 group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 flex flex-col"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute inset-0 bg-secondary/20 group-hover:bg-transparent transition-colors z-10" />
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-foreground/70 mb-4 line-clamp-3 flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-foreground/80"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="flex-1">
                                        <Button variant="outline" className="w-full px-4 py-2 text-sm justify-center">
                                            <Github className="w-4 h-4 mr-2" /> Code
                                        </Button>
                                    </a>
                                    {/* <a href={project.live} target="_blank" rel="noreferrer" className="flex-1">
                                        <Button className="w-full px-4 py-2 text-sm justify-center">
                                            <ExternalLink className="w-4 h-4 mr-2" /> Live
                                        </Button>
                                    </a> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Container>
        </Section>
    );
}
