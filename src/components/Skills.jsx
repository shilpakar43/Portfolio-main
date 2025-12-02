import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        'React',
        'JavaScript',
        'HTML/CSS',
        'Tailwind CSS',
        'Node.js',
        'PHP',
        'SQL',
        'Git',
    ];

    return (
        <section id="skills" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-dark p-6 rounded-xl border border-gray-800 hover:border-primary/50 transition-all hover:scale-105 text-center"
                        >
                            <span className="text-white font-medium text-lg">{skill}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
