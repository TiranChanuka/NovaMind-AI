'use client';

import { motion } from 'framer-motion';
import {
    Brain,
    Sparkles,
    Twitter,
    Linkedin,
    Github,
    Youtube,
    ArrowUpRight,
} from 'lucide-react';

const footerLinks = {
    product: [
        { name: 'Features', href: '#' },
        { name: 'Pricing', href: '#' },
        { name: 'API Docs', href: '#' },
        { name: 'Integrations', href: '#' },
    ],
    company: [
        { name: 'About Us', href: '#about' },
        { name: 'Careers', href: '#' },
        { name: 'Blog', href: '#blog' },
        { name: 'Press Kit', href: '#' },
    ],
    resources: [
        { name: 'Documentation', href: '#' },
        { name: 'Tutorials', href: '#' },
        { name: 'Community', href: '#' },
        { name: 'Support', href: '#' },
    ],
    legal: [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
        { name: 'Cookie Policy', href: '#' },
        { name: 'GDPR', href: '#' },
    ],
};

const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#0a0f1a] border-t border-[rgba(0,255,136,0.1)]">
            {/* Background Pattern */}
            <div className="absolute inset-0 grid-bg opacity-20" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="py-16">
                    <div className="grid lg:grid-cols-6 gap-12">
                        {/* Brand Column */}
                        <div className="lg:col-span-2">
                            <motion.a
                                href="#home"
                                className="inline-flex items-center gap-3 group mb-6"
                                whileHover={{ scale: 1.02 }}
                            >
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00d4aa] flex items-center justify-center">
                                        <Brain className="w-6 h-6 text-[#0a0f1a]" />
                                    </div>
                                    <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-[#00ff88] opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <span className="text-xl font-bold font-display text-white">
                                    Nova<span className="gradient-text">Mind</span>
                                </span>
                            </motion.a>

                            <p className="text-[#94a3b8] text-sm leading-relaxed mb-6 max-w-sm">
                                Empowering businesses with intelligent AI solutions. Transform
                                your operations, unlock insights, and drive innovation with
                                NovaMind AI.
                            </p>

                            {/* Social Links */}
                            <div className="flex items-center gap-4">
                                {socialLinks.map((social, index) => (
                                    <motion.a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-lg bg-[rgba(0,255,136,0.1)] border border-[rgba(0,255,136,0.2)] flex items-center justify-center text-[#94a3b8] hover:text-[#00ff88] hover:border-[#00ff88] transition-all"
                                        whileHover={{ scale: 1.1, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <social.icon className="w-5 h-5" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Links Columns */}
                        <div className="lg:col-span-4 grid grid-cols-2 sm:grid-cols-4 gap-8">
                            {/* Product */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Product</h4>
                                <ul className="space-y-3">
                                    {footerLinks.product.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="text-[#94a3b8] text-sm hover:text-[#00ff88] transition-colors inline-flex items-center gap-1 group"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Company */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Company</h4>
                                <ul className="space-y-3">
                                    {footerLinks.company.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="text-[#94a3b8] text-sm hover:text-[#00ff88] transition-colors inline-flex items-center gap-1 group"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Resources */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Resources</h4>
                                <ul className="space-y-3">
                                    {footerLinks.resources.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="text-[#94a3b8] text-sm hover:text-[#00ff88] transition-colors inline-flex items-center gap-1 group"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Legal */}
                            <div>
                                <h4 className="text-white font-semibold mb-4">Legal</h4>
                                <ul className="space-y-3">
                                    {footerLinks.legal.map((link, index) => (
                                        <li key={index}>
                                            <a
                                                href={link.href}
                                                className="text-[#94a3b8] text-sm hover:text-[#00ff88] transition-colors inline-flex items-center gap-1 group"
                                            >
                                                {link.name}
                                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="py-6 border-t border-[rgba(0,255,136,0.1)]">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-[#64748b] text-sm">
                            © {new Date().getFullYear()} NovaMind AI. All rights reserved.
                        </p>
                        <div className="flex items-center gap-2 text-[#64748b] text-sm">
                            <span className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                            <span>All systems operational</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
