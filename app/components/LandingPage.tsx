'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const researchUpdates = [
    "Breakthrough in AI-driven cancer detection!",
    "New quantum computing model speeds up simulations.",
    "Scientists achieve record efficiency in solar panels.",
    "Blockchain ensures research data integrity worldwide.",
];

const RDShowcase = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % researchUpdates.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col items-center justify-center px-6 py-20">
            {/* Title Animation */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-center leading-tight"
            >
                Innovating the Future of 
                <span className="text-primary block mt-2">Research & Development</span>
            </motion.h1>

            {/* Scrolling Research Updates */}
            <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mt-8 text-lg md:text-xl text-primary/80 font-medium"
            >
                {researchUpdates[index]}
            </motion.div>

            {/* Feature Cards */}
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ scale: 1.03, translateY: -5 }}
                        whileTap={{ scale: 0.98 }}
                        className="bg-card p-8 rounded-xl shadow-lg border border-border/50 backdrop-blur-sm"
                    >
                        <h2 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h2>
                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

const features = [
    { title: "Live Research Updates", description: "Stay up to date with cutting-edge discoveries in real time." },
    { title: "AI-Powered Insights", description: "Personalized research recommendations using machine learning." },
    { title: "Blockchain Security", description: "Ensuring research integrity with decentralized verification." },
];

export default RDShowcase;
