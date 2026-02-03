'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    MessageSquare,
    Clock,
    CheckCircle,
} from 'lucide-react';

const contactInfo = [
    {
        icon: Mail,
        title: 'Email Us',
        details: 'hello@novamind.ai',
        description: 'We respond within 24 hours',
    },
    {
        icon: Phone,
        title: 'Call Us',
        details: '+1 (555) 123-4567',
        description: 'Mon-Fri, 9am-6pm EST',
    },
    {
        icon: MapPin,
        title: 'Visit Us',
        details: '123 Innovation Drive',
        description: 'San Francisco, CA 94105',
    },
];

export default function Contact() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: '-100px' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate form submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 3000);
        setFormData({ name: '', email: '', company: '', message: '' });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] },
        },
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            className="relative section-padding overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-[#0a0f1a]" />
            <div className="absolute inset-0 grid-bg opacity-30" />

            {/* Gradient Orb */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#00ff88]/10 to-transparent blur-3xl rounded-full" />

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
                        Get In Touch
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display mt-4">
                        <span className="text-white">Let&apos;s Start Your </span>
                        <span className="gradient-text">AI Journey</span>
                    </h2>
                    <p className="mt-4 text-[#94a3b8] max-w-2xl mx-auto text-lg">
                        Ready to transform your business with AI? Get in touch with our
                        team and let&apos;s discuss how we can help you achieve your goals.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="glass p-8 sm:p-10">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#00ff88] to-[#00d4aa] flex items-center justify-center">
                                    <MessageSquare className="w-6 h-6 text-[#0a0f1a]" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold font-display text-white">
                                        Send a Message
                                    </h3>
                                    <p className="text-sm text-[#64748b]">
                                        Fill out the form below
                                    </p>
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium text-[#94a3b8] mb-2"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="John Doe"
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-sm font-medium text-[#94a3b8] mb-2"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="john@company.com"
                                            className="input-field"
                                            required
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="company"
                                        className="block text-sm font-medium text-[#94a3b8] mb-2"
                                    >
                                        Company Name
                                    </label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
                                        placeholder="Your Company"
                                        className="input-field"
                                    />
                                </div>

                                <div>
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-[#94a3b8] mb-2"
                                    >
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows={5}
                                        placeholder="Tell us about your project and how we can help..."
                                        className="input-field resize-none"
                                        required
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="btn-primary w-full flex items-center justify-center gap-2"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    disabled={isSubmitted}
                                >
                                    {isSubmitted ? (
                                        <>
                                            <CheckCircle className="w-5 h-5" />
                                            Message Sent!
                                        </>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={isInView ? 'visible' : 'hidden'}
                        className="flex flex-col gap-6"
                    >
                        {/* Contact Cards */}
                        {contactInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="card flex items-start gap-4 group"
                            >
                                <div className="icon-wrapper shrink-0">
                                    <info.icon className="w-6 h-6 text-[#00ff88]" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-[#00ff88] transition-colors">
                                        {info.title}
                                    </h4>
                                    <p className="text-[#00ff88] font-medium">{info.details}</p>
                                    <p className="text-sm text-[#64748b] mt-1">
                                        {info.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}

                        {/* Response Time Card */}
                        <motion.div
                            variants={itemVariants}
                            className="glass p-6 mt-4 border-[rgba(0,255,136,0.3)]"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-6 h-6 text-[#00ff88]" />
                                <h4 className="text-lg font-semibold text-white">
                                    Quick Response Time
                                </h4>
                            </div>
                            <p className="text-[#94a3b8] text-sm leading-relaxed">
                                We pride ourselves on fast response times. Most inquiries
                                receive a response within 24 hours. For urgent matters, don&apos;t
                                hesitate to call us directly.
                            </p>
                            <div className="mt-4 flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-[#00ff88] animate-pulse" />
                                <span className="text-sm text-[#00ff88]">
                                    Currently online
                                </span>
                            </div>
                        </motion.div>

                        {/* Map Placeholder */}
                        <motion.div
                            variants={itemVariants}
                            className="glass h-48 flex items-center justify-center overflow-hidden"
                        >
                            <div className="text-center">
                                <MapPin className="w-12 h-12 text-[#00ff88]/50 mx-auto mb-4" />
                                <p className="text-[#64748b] text-sm">
                                    Interactive map coming soon
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
