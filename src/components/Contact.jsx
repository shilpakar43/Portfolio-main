import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Let's Talk</h3>
                        <p className="text-gray-400 mb-8">
                            I'm currently open to new opportunities and collaborations. Whether you have a question or just want to say hi, feel free to reach out!
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Email</h4>
                                    <p className="text-gray-400">urika.76ijr@aleeas.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Phone</h4>
                                    <p className="text-gray-400">+977 9800000000</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">Location</h4>
                                    <p className="text-gray-400">Bhaktapur, Nepal</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="bg-dark p-8 rounded-2xl border border-gray-800"
                    >
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Enter your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Project Inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors resize-none"
                                    placeholder="Your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-blue-600 text-white font-medium py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
