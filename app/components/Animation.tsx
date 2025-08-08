"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Animation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative w-full max-w-[900px] mx-auto px-6 py-12"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="relative aspect-video w-full rounded-xl overflow-hidden shadow-lg border border-border/50 backdrop-blur-sm"
      >
        <Image
          src="/images/rd.png"
          alt="Research and Development"
          fill
          className="object-cover"
          sizes="(max-width: 900px) 100vw, 900px"
          priority
          quality={95}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
};

export default Animation;