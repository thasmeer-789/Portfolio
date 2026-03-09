import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { Section } from "../components/Section";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { useForm, ValidationError } from "@formspree/react";
import { useRef, useEffect } from "react";

export function Contact() {

    const [state, handleSubmit] = useForm("xaqpqjbj");

    const formRef = useRef<HTMLFormElement>(null);

    useEffect(() => {
        if (state.succeeded) {
            formRef.current?.reset();
        }
    }, [state.succeeded]);

    return (
        <Section id="contact">
            <Container>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Get In Touch
                    </h2>

                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Contact Links */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <h3 className="text-2xl font-semibold mb-6">
                            Let's connect
                        </h3>

                        <p className="text-foreground/70 mb-8 leading-relaxed">
                            I'm currently looking for new opportunities. Whether you have
                            a question or just want to say hi, I'll try my best to get
                            back to you!
                        </p>

                        <div className="space-y-6">

                            {/* Email */}
                            <a
                                href="mailto:thasmeer40@gmail.com"
                                className="flex items-center gap-4 group"
                            >
                                <Mail className="w-5 h-5 text-primary" />

                                <div>
                                    <div className="font-medium">Email</div>
                                    <div className="text-sm text-foreground/60">
                                        thasmeer40@gmail.com
                                    </div>
                                </div>
                            </a>

                            {/* LinkedIn */}
                            <a
                                href="https://www.linkedin.com/in/abdulthasmeer"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 group"
                            >
                                <Linkedin className="w-5 h-5 text-primary" />

                                <div>
                                    <div className="font-medium">LinkedIn</div>
                                    <div className="text-sm text-foreground/60">
                                        linkedin.com/in/abdulthasmeer
                                    </div>
                                </div>
                            </a>

                            {/* GitHub */}
                            <a
                                href="https://github.com/thasmeer-789"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-4 group"
                            >
                                <Github className="w-5 h-5 text-primary" />

                                <div>
                                    <div className="font-medium">GitHub</div>
                                    <div className="text-sm text-foreground/60">
                                        github.com/thasmeer-789
                                    </div>
                                </div>
                            </a>

                        </div>

                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >

                        <form
                            ref={formRef}
                            onSubmit={handleSubmit}
                            className="space-y-6 bg-background rounded-2xl p-8 border border-secondary/50 shadow-xl"
                        >

                            {/* Anti-Spam Honeypot */}
                            <input type="text" name="_gotcha" style={{ display: "none" }} />

                            {/* Name */}
                            <div>
                                <label className="block text-sm mb-2">Name</label>

                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/20 border border-secondary/50 focus:border-primary outline-none"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm mb-2">Email</label>

                                <input
                                    type="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/20 border border-secondary/50 focus:border-primary outline-none"
                                />

                                <ValidationError
                                    prefix="Email"
                                    field="email"
                                    errors={state.errors}
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm mb-2">Message</label>

                                <textarea
                                    name="message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-secondary/20 border border-secondary/50 focus:border-primary outline-none resize-none"
                                />

                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                            </div>

                            {/* Button */}
                            <Button
                                type="submit"
                                disabled={state.submitting}
                                className="w-full justify-center"
                            >
                                {state.submitting ? "Sending..." : "Send Message"}

                                <Send className="w-4 h-4 ml-2" />
                            </Button>

                            {/* Success Message */}
                            {state.succeeded && (
                                <p className="text-green-500 text-center">
                                    ✅ Message Sent Successfully!
                                </p>
                            )}

                        </form>

                    </motion.div>

                </div>

            </Container>
        </Section>
    );
}