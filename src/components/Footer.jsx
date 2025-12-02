import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Kiril. All rights reserved.
                    </p>

                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Github className="w-5 h-5" />
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </a>

                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <Mail className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
