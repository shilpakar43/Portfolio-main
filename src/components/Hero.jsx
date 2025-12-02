import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ChevronDown } from 'lucide-react';

const Hero = () => {
    const [typedText, setTypedText] = useState('');
    const fullName = "RIKESH SHILPAKAR";
    const controls = useAnimation();

    // Typing animation effect
    useEffect(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
            if (currentIndex <= fullName.length) {
                setTypedText(fullName.slice(0, currentIndex));
                currentIndex++;
            } else {
                clearInterval(typingInterval);
            }
        }, 100);

        return () => clearInterval(typingInterval);
    }, []);

    // Floating animation for particles
    const floatingAnimation = {
        y: [0, -20, 0],
        transition: {
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
        }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Animated Background Elements */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
            <motion.div
                className="absolute bottom-20 right-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [-20, 20, -20],
                    y: [-20, 20, -20],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Floating Particles */}
            {[...Array(15)].map((_, i) => (
                <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-primary/30 rounded-full"
                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                    }}
                />
            ))}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                    {/* Main Heading with Typing Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                HI I'M{' '}
                            </motion.span>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-secondary inline-block">
                                {typedText}
                                <motion.span
                                    animate={{ opacity: [1, 0, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                    className="inline-block w-1 h-16 md:h-20 bg-primary ml-2 align-middle"
                                />
                            </span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <h2 className="text-primary font-semibold text-lg mb-4 tracking-wide uppercase">
                            <motion.span
                                animate={{
                                    textShadow: [
                                        "0 0 8px rgba(59, 130, 246, 0.5)",
                                        "0 0 16px rgba(59, 130, 246, 0.8)",
                                        "0 0 8px rgba(59, 130, 246, 0.5)",
                                    ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                            >
                                Software Developer
                            </motion.span>
                        </h2>

                        <motion.div
                            className="mt-4 text-xl text-gray-400 max-w-2xl mx-auto mb-8 space-y-2"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                        >
                            <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
                                I turn ideas into real products with clean code and modern UI. <br />
                                I help businesses build scalable, fast, and user-friendly applications.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Call to Action Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="#projects"
                            className="px-8 py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white rounded-full font-medium transition-all flex items-center gap-2 group shadow-lg shadow-primary/50"
                            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View Projects
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </motion.a>
                        <motion.a
                            href="#contact"
                            className="px-8 py-3 border-2 border-gray-600 hover:border-primary text-white rounded-full font-medium transition-all backdrop-blur-sm bg-gray-800/30 hover:bg-primary/10"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Contact Me
                        </motion.a>
                    </motion.div>

                    {/* Social Links with Enhanced Hover Effects */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-12 flex justify-center gap-6"
                    >
                        {[
                            { icon: Github, href: "#", label: "GitHub" },
                            { icon: Linkedin, href: "#", label: "LinkedIn" },
                            { icon: Mail, href: "mailto:hello@example.com", label: "Email" }
                        ].map((social, index) => (
                            <motion.a
                                key={index}
                                href={social.href}
                                className="p-3 bg-gray-800/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white transition-all relative group"
                                whileHover={{
                                    scale: 1.1,
                                    backgroundColor: "rgba(59, 130, 246, 0.2)",
                                    boxShadow: "0 8px 20px rgba(59, 130, 246, 0.3)"
                                }}
                                whileTap={{ scale: 0.9 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + index * 0.1 }}
                            >
                                <social.icon className="w-6 h-6" />
                                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                                    {social.label}
                                </span>
                            </motion.a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
