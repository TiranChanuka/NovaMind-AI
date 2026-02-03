'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Target, Lightbulb, Rocket, Users, Award, Globe } from 'lucide-react';

const highlights = [
    {
        icon: Target,
        title: 'Our Mission',
        description:
            'To democratize AI technology and make intelligent automation accessible to businesses of all sizes.',
    },
    {
        icon: Lightbulb,
        title: 'Our Vision',
        description:
            'A future where AI seamlessly enhances human capabilities, driving innovation and sustainable growth.',
    },
    {
        icon: Rocket,
        title: 'Our Approach',
        description:
            'Combining cutting-edge research with practical applications to deliver real-world AI solutions.',
    },
];

const milestones = [
    { icon: Users, value: '50K+', label: 'Active Users' },
    { icon: Award, value: '15+', label: 'Industry Awards' },
    { icon: Globe, value: '40+', label: 'Countries Served' },
];

export default function About() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    };

    return (
        <section
            id="about"
            ref={sectionRef}
            className="relative section-padding overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1523] to-[#0a0f1a]" />
            <div className="absolute inset-0 grid-bg opacity-50" />

            {/* Section Divider Top */}
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
                        About Us
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mt-4">
                        <span className="text-white">Pioneering the </span>
                        <span className="gradient-text">AI Revolution</span>
                    </h2>
                    <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto text-lg">
                        Since 2019, NovaMind AI has been at the forefront of artificial
                        intelligence innovation, transforming how businesses operate.
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative glass p-4">
                            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
                                <Image
                                    src="/images/about-team.png"
                                    alt="NovaMind AI Team working with AI dashboards"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a]/60 to-transparent" />
                            </div>

                            {/* Experience Badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ delay: 0.8, duration: 0.5 }}
                                className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-gradient-to-br from-[#00ff88] to-[#00d4aa] flex flex-col items-center justify-center text-[#0a0f1a] shadow-xl"
                            >
                                <span className="text-3xl font-bold font-display">5+</span>
                                <span className="text-sm font-medium">Years</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                    >
                        <motion.div variants={itemVariants}>
                            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                                Building the Future of Intelligent Systems
                            </h3>
                            <p className="text-[#94a3b8] leading-relaxed mb-6">
                                At NovaMind AI, we believe that artificial intelligence should
                                empower, not replace. Our team of world-class engineers and
                                researchers work tirelessly to create AI solutions that augment
                                human intelligence and drive meaningful business outcomes.
                            </p>
                            <p className="text-[#94a3b8] leading-relaxed mb-8">
                                From startups to Fortune 500 companies, our AI platform has
                                helped thousands of organizations unlock new possibilities,
                                automate complex workflows, and make data-driven decisions at
                                scale.
                            </p>
                        </motion.div>

                        {/* Milestones */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-3 gap-4"
                        >
                            {milestones.map((milestone, index) => (
                                <div
                                    key={index}
                                    className="text-center p-4 glass-subtle rounded-xl"
                                >
                                    <milestone.icon className="w-6 h-6 text-[#00ff88] mx-auto mb-2" />
                                    <span className="text-2xl font-bold text-white font-display block">
                                        {milestone.value}
                                    </span>
                                    <span className="text-xs text-[#64748b]">
                                        {milestone.label}
                                    </span>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mission, Vision, Approach Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="card group"
                        >
                            <div className="icon-wrapper mb-6">
                                <item.icon className="w-8 h-8 text-[#00ff88]" />
                            </div>
                            <h4 className="text-xl font-bold font-display text-white mb-3 group-hover:text-[#00ff88] transition-colors">
                                {item.title}
                            </h4>
                            <p className="text-[#94a3b8] leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
