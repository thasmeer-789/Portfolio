import { motion } from "framer-motion";
import { Section } from "../components/Section";
import { Container } from "../components/Container";

export function About() {
    return (
        <Section id="about" className="bg-secondary/20">
            <Container>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-6 text-lg text-foreground/80 leading-relaxed"
                    >
                        <p>
                            Hello! I'm Thasmeer, a passionate <strong className="text-primary font-semibold">Full Stack Developer Intern</strong>. I enjoy building seamless, scalable, and user-centric web applications from the ground up.
                        </p>
                        <p>
                            My journey in web development taught me how to bridge the gap between aesthetic frontend interfaces and robust backend architectures. I specialize in modern technologies like <strong className="text-foreground">React, Redux, JavaScript, TypeScript, Next.js, C#, ASP.net, SQL and Tailwind CSS</strong>.
                        </p>
                        <p>
                            Whether it's crafting a pixel-perfect UI or designing a scalable database schema, I'm always eager to take on new challenges and continuously learn. When I'm not coding, I love exploring new technologies and contributing to the developer community.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <div className="rounded-2xl border border-secondary/50 bg-background/50 backdrop-blur-sm p-6 shadow-xl">
                            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-secondary/50">
                                <div className="w-3 h-3 rounded-full bg-red-500" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                <div className="w-3 h-3 rounded-full bg-green-500" />
                                <div className="ml-2 text-sm text-foreground/50 font-mono">developer.ts</div>
                            </div>
                            <pre className="font-mono text-sm overflow-x-auto text-foreground/80 leading-relaxed">
                                <code dangerouslySetInnerHTML={{
                                    __html: `<span className="text-accent">const</span> <span className="text-blue-400">thasmeer</span> = {
  <span className="text-primary">role</span>: <span className="text-green-400">"Full Stack Developer"</span>,
  <span className="text-primary">passion</span>: <span className="text-green-400">"Building scalable web apps"</span>,
  <span className="text-primary">skills</span>: [
    <span className="text-green-400">"React"</span>, <span className="text-green-400">"TypeScript"</span>, 
    <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"Tailwind CSS"</span>
  ],
  <span className="text-primary">isLookingForOpportunities</span>: <span className="text-accent">true</span>,
  <span className="text-blue-400">greet</span>: <span className="text-accent">function</span>() {
    <span className="text-accent">return</span> <span className="text-green-400">"Let's build something amazing together!"</span>;
  }
};

<span className="text-gray-400">console</span>.<span className="text-blue-400">log</span>(thasmeer.<span className="text-blue-400">greet</span>());` }} />
                            </pre>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 -z-10" />
                    </motion.div>
                </div>
            </Container>
        </Section>
    );
}
