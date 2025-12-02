import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-featured online store built with React and Redux. Features include cart management, user authentication, and payment integration.',
            tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
            image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            github: '#',
            demo: '#',
        },
        {
            title: 'Task Management App',
            description: 'A productivity tool for managing daily tasks and projects. Includes drag-and-drop functionality and real-time updates.',
            tags: ['React', 'Firebase', 'Tailwind CSS'],
            image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            github: '#',
            demo: '#',
        },
        {
            title: 'Weather Dashboard',
            description: 'Real-time weather application using OpenWeatherMap API. Displays current conditions and 5-day forecast.',
            tags: ['JavaScript', 'API Integration', 'CSS3'],
            image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            github: '#',
            demo: '#',
        },
    ];

    return (
        <section id="projects" className="py-20 bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all group"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                                    <a href={project.github} className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href={project.demo} className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-gray-800 text-primary text-xs rounded-full">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
