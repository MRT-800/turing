'use client';

import { motion } from 'framer-motion';

const projects = [
    { name: "Oogway Consultation", description: "Providing Consultation", link: "/product/oogway" },
    { name: "Zooming", description: "Like zoom call", link: "/project/zooming" },
];

const Projects = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-20">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-3xl md:text-4xl font-bold mb-12 text-center"
            >
                Our Products and Services
            </motion.h2>

            <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.2 }}
                            whileHover={{ scale: 1.03, translateY: -5 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-card p-8 rounded-xl shadow-lg border border-border/50 backdrop-blur-sm"
                        >
                            <h3 className="text-2xl font-semibold mb-4 text-primary">{project.name}</h3>
                            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{project.description}</p>
                            <a 
                                href={project.link} 
                                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors duration-200 font-medium"
                            >
                                Learn More
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 ml-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
