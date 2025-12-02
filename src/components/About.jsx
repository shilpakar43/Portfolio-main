import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center"
                    >
                        <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                            Hi! I'm <span className="text-primary font-semibold">Rikesh </span>, a motivated and enthusiastic learner on my journey to become a skilled software developer. I’m passionate about building clean, user-friendly web applications and constantly learning new technologies.
                        </p>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            I enjoy solving problems through code and creating experiences that are both functional and beautiful. I’m especially interested in frontend development, design systems, and user experience.
                        </p>
                        <p className="text-gray-400 mb-8 leading-relaxed">
                            I'm currently seeking opportunities to grow, collaborate, and contribute to impactful projects that make a difference.
                        </p>

                        <div className="grid grid-cols-2 gap-6 max-w-lg mx-auto">
                            <div>
                                <h4 className="text-4xl font-bold text-primary mb-2">0+</h4>
                                <p className="text-gray-400">Years Experience</p>
                            </div>
                            <div>
                                <h4 className="text-4xl font-bold text-secondary mb-2">5+</h4>
                                <p className="text-gray-400">Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
