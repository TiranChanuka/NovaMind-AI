'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Bot,
    Brain,
    BarChart3,
    Cpu,
    Workflow,
    Shield,
    ArrowRight,
} from 'lucide-react';

const services = [
    {
        icon: Bot,
        title: 'AI Automation',
        description:
            'Streamline your operations with intelligent automation that learns and adapts. Reduce manual tasks by up to 80% while improving accuracy.',
        features: ['Process Automation', 'Smart Workflows', 'Auto-Scaling'],
        gradient: 'from-[#00ff88] to-[#00d4aa]',
    },
    {
        icon: Brain,
        title: 'Machine Learning',
        description:
            'Custom ML models trained on your data to predict outcomes, detect patterns, and drive smarter business decisions.',
        features: ['Predictive Analytics', 'Pattern Recognition', 'Model Training'],
        gradient: 'from-[#8b5cf6] to-[#6366f1]',
    },
    {
        icon: BarChart3,
        title: 'Data Analytics',
        description:
            'Transform raw data into actionable insights with our advanced analytics platform. Real-time dashboards and intelligent reporting.',
        features: ['Real-time Insights', 'Visual Dashboards', 'Custom Reports'],
        gradient: 'from-[#3b82f6] to-[#0ea5e9]',
    },
    {
        icon: Cpu,
        title: 'Neural Networks',
        description:
            'Deploy state-of-the-art deep learning models for complex tasks including image recognition, NLP, and more.',
        features: ['Deep Learning', 'Image Recognition', 'NLP Processing'],
        gradient: 'from-[#f97316] to-[#eab308]',
    },
    {
        icon: Workflow,
        title: 'Integration Services',
        description:
            'Seamlessly integrate AI capabilities into your existing systems with our robust APIs and enterprise connectors.',
        features: ['REST APIs', 'Enterprise Connectors', 'Custom Integration'],
        gradient: 'from-[#ec4899] to-[#f43f5e]',
    },
    {
        icon: Shield,
        title: 'AI Security',
        description:
            'Protect your AI infrastructure with advanced security measures, bias detection, and compliance monitoring.',
        features: ['Threat Detection', 'Bias Monitoring', 'Compliance'],
        gradient: 'from-[#14b8a6] to-[#22d3ee]',
    },
];

export default function Services() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    };

    return (
        <section
            id="services"
            ref={sectionRef}
            className="relative section-padding overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[#0a0f1a]" />
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Gradient Orbs */}
            <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#00ff88]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#8b5cf6]/10 rounded-full blur-3xl" />

            {/* Section Divider */}
            <div className="section-divider mb-16" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#00ff88] font-medium text-sm uppercase tracking-wider">
                        Our Services
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mt-4">
                        <span className="text-white">AI Solutions for </span>
                        <span className="gradient-text">Every Need</span>
                    </h2>
                    <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto text-lg">
                        Comprehensive AI services designed to accelerate your digital
                        transformation and drive measurable business outcomes.
                    </p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            className="card group cursor-pointer"
                        >
                            {/* Icon with Gradient Background */}
                            <div
                                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                            >
                                <service.icon className="w-7 h-7 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-[#00ff88] transition-colors">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Features */}
                            <div className="flex flex-wrap gap-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <span
                                        key={i}
                                        className="text-xs font-medium text-[#00ff88] bg-[rgba(0,255,136,0.1)] px-3 py-1 rounded-full border border-[rgba(0,255,136,0.2)]"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* Learn More Link */}
                            <div className="flex items-center text-[#00ff88] text-sm font-medium group-hover:gap-3 gap-2 transition-all">
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="text-center mt-16"
                >
                    <p className="text-[#94a3b8] mb-6">
                        Need a custom AI solution? Let&apos;s talk about your specific requirements.
                    </p>
                    <motion.button
                        className="btn-secondary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Request Custom Solution
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}
