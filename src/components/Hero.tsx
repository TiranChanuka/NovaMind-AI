'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Play, Zap, Shield, TrendingUp } from 'lucide-react';

const stats = [
    { value: '500+', label: 'AI Models Deployed', icon: Zap },
    { value: '99.9%', label: 'Uptime Guaranteed', icon: Shield },
    { value: '10x', label: 'Faster Processing', icon: TrendingUp },
];

export default function Hero() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    };

    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center overflow-hidden pt-20"
        >
            {/* Background Effects */}
            <div className="absolute inset-0 grid-bg" />
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0f1a]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Badge */}
                        <motion.div
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.2)] mb-6"
                        >
                            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                            <span className="text-[#00ff88] text-sm font-medium">
                                Next-Gen AI Platform
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-display leading-tight"
                        >
                            <span className="text-white">Transform Your</span>
                            <br />
                            <span className="gradient-text">Business with AI</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="mt-6 text-lg text-[#94a3b8] max-w-xl leading-relaxed"
                        >
                            Harness the power of advanced artificial intelligence to automate
                            processes, unlock insights, and drive unprecedented growth for
                            your enterprise.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 mt-8"
                        >
                            <motion.button
                                className="btn-primary flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Start Free Trial
                                <ArrowRight className="w-4 h-4" />
                            </motion.button>
                            <motion.button
                                className="btn-secondary flex items-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Play className="w-4 h-4" />
                                Watch Demo
                            </motion.button>
                        </motion.div>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-[rgba(0,255,136,0.1)]"
                        >
                            {stats.map((stat, index) => (
                                <div key={index} className="text-center sm:text-left">
                                    <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                        <stat.icon className="w-4 h-4 text-[#00ff88]" />
                                        <span className="text-2xl sm:text-3xl font-bold text-white font-display">
                                            {stat.value}
                                        </span>
                                    </div>
                                    <span className="text-xs sm:text-sm text-[#64748b]">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8, x: 50 }}
                        animate={{ opacity: 1, scale: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                        className="relative"
                    >
                        {/* Glow Effect Behind Image */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#00ff88]/20 to-[#00d4aa]/20 blur-3xl rounded-full transform scale-90" />

                        {/* Main Image Container */}
                        <div className="relative glass p-4 sm:p-6 float">
                            <div className="relative aspect-square rounded-2xl overflow-hidden">
                                <Image
                                    src="/images/hero-ai.png"
                                    alt="AI Brain Network Visualization"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                {/* Image Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/50 to-transparent" />
                            </div>

                            {/* Floating Stats Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1, duration: 0.5 }}
                                className="absolute -bottom-4 -left-4 sm:-left-8 glass-subtle px-4 py-3 flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-full bg-[#00ff88]/20 flex items-center justify-center">
                                    <Zap className="w-5 h-5 text-[#00ff88]" />
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">AI Active</p>
                                    <p className="text-[#00ff88] text-xs">Processing 1.2M/s</p>
                                </div>
                            </motion.div>

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.2, duration: 0.5 }}
                                className="absolute -top-4 -right-4 sm:-right-8 glass-subtle px-4 py-2"
                            >
                                <span className="text-[#00ff88] text-sm font-medium">
                                    ✨ Enterprise Ready
                                </span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent" />
        </section>
    );
}
