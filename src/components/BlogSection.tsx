'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';

const blogPosts = [
    {
        image: '/images/blog-1.png',
        category: 'AI Trends',
        title: 'The Future of Enterprise AI: 2024 Predictions',
        excerpt:
            'Explore the emerging trends shaping enterprise AI adoption and how businesses can prepare for the next wave of innovation.',
        author: 'Sarah Chen',
        date: 'Dec 5, 2024',
        readTime: '8 min read',
    },
    {
        image: '/images/blog-2.png',
        category: 'Machine Learning',
        title: 'Building Scalable ML Pipelines in Production',
        excerpt:
            'A comprehensive guide to designing and deploying machine learning pipelines that scale with your business needs.',
        author: 'Michael Park',
        date: 'Dec 3, 2024',
        readTime: '12 min read',
    },
    {
        image: '/images/blog-3.png',
        category: 'Data Science',
        title: 'Real-time Analytics: From Data to Decisions',
        excerpt:
            'Learn how real-time analytics can transform your decision-making process and give you a competitive edge.',
        author: 'Emily Rodriguez',
        date: 'Nov 28, 2024',
        readTime: '6 min read',
    },
];

export default function BlogSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    };

    return (
        <section
            id="blog"
            ref={sectionRef}
            className="relative section-padding overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1523] to-[#0a0f1a]" />
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Section Divider */}
            <div className="section-divider mb-16" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
                >
                    <div>
                        <span className="text-[#00ff88] font-medium text-sm uppercase tracking-wider">
                            Latest Insights
                        </span>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mt-4">
                            <span className="text-white">From Our </span>
                            <span className="gradient-text">Blog</span>
                        </h2>
                        <p className="mt-4 text-[#94a3b8] max-w-xl text-lg">
                            Stay updated with the latest AI trends, technical deep-dives, and
                            industry insights from our expert team.
                        </p>
                    </div>

                    <motion.a
                        href="/blog"
                        className="inline-flex items-center gap-2 text-[#00ff88] font-medium hover:gap-4 transition-all"
                        whileHover={{ x: 5 }}
                    >
                        View All Articles
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>

                {/* Blog Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? 'visible' : 'hidden'}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            variants={cardVariants}
                            className="group cursor-pointer"
                        >
                            <div className="glass overflow-hidden hover:border-[rgba(0,255,136,0.4)] transition-all duration-400 hover:shadow-[0_25px_60px_rgba(0,255,136,0.12)]">
                                {/* Image */}
                                <div className="blog-image-wrapper aspect-[16/10] relative">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Category Badge */}
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="text-xs font-medium text-[#0a0f1a] bg-[#00ff88] px-3 py-1 rounded-full">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <h3 className="text-lg font-bold font-display text-white mb-3 group-hover:text-[#00ff88] transition-colors line-clamp-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-[#94a3b8] text-sm leading-relaxed mb-4 line-clamp-2">
                                        {post.excerpt}
                                    </p>

                                    {/* Meta */}
                                    <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,255,136,0.1)]">
                                        <div className="flex items-center gap-2 text-[#64748b] text-xs">
                                            <User className="w-3 h-3" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center gap-4 text-[#64748b] text-xs">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="w-3 h-3" />
                                                <span>{post.date}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-3 h-3" />
                                                <span>{post.readTime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Newsletter CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mt-16 glass p-8 sm:p-12 text-center"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mb-4">
                        Stay Ahead of the Curve
                    </h3>
                    <p className="text-[#94a3b8] mb-6 max-w-lg mx-auto">
                        Subscribe to our newsletter for weekly AI insights, tutorials, and
                        exclusive content delivered straight to your inbox.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="input-field flex-1"
                        />
                        <motion.button
                            className="btn-primary whitespace-nowrap"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Subscribe
                        </motion.button>
                    </div>
                    <p className="text-xs text-[#64748b] mt-4">
                        No spam. Unsubscribe anytime.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
