'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ExternalLink, Github, ArrowRight, Eye, Code, Star } from 'lucide-react';

export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.2 });
    const [activeFilter, setActiveFilter] = useState('all');

    const filters = [
        { id: 'all', label: 'All Projects' },
        { id: 'web', label: 'Web Apps' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'fullstack', label: 'Full Stack' },
        { id: 'uiux', label: 'UI/UX' }
    ];

    const projects = [
        {
            id: 1,
            title: 'jiniAi - AI Assistant',
            description: 'An AI-powered content generator that helps create high-quality text, blog posts, and social media content automatically using advanced NLP models.',
            image: '/opengraph_jiniimage.png',
            technologies: ['Next.js', 'TypeScript', 'AWS EC2', 'Firebase', 'AI/ML', 'Python'],
            category: 'fullstack',
            liveUrl: 'https://jiniai.vercel.app/',
            githubUrl: 'https://github.com/omajithiya/',
            featured: true,
            stats: { stars: 67, forks: 12 }
        },
        {
            id: 2,
            title: 'Realtime Chat App',
            description: 'Collaborative task management application with real-time updates, team collaboration, and progress tracking.',
            image: '/newchatapp.png',
            technologies: ['Kotlin', 'Firebase', 'XML'],
            category: 'mobile',
            liveUrl: 'https://github.com/omajithiya/projects/blob/main/Chat%20App.apk',
            githubUrl: 'https://github.com/omajithiya/projects',
            featured: true,
            stats: { stars: 32, forks: 8 }
        },
        {
            id: 3,
            title: 'JiniAi Chat App',
            description: 'An AI-powered chat app that generates high-quality content instantly, including blogs, social media posts, and emails.',
            image: '/jiniai_chatapp_image.png',
            technologies: ['Kotlin', 'Flask', 'Volly', 'XML'],
            category: 'mobile',
            liveUrl: 'http://github.com/omajithiya/projects/blob/main/ai%20chat%20app%20with%20download%20fuction.apk',
            githubUrl: 'http://github.com/omajithiya/projects',
            featured: false,
            stats: { stars: 28, forks: 5 }
        },
        {
            id: 4,
            title: 'Billing Desktop App',
            description: 'Cross-platform fitness tracking application with workout plans, progress analytics, and social features.',
            image: '/billing_app.png',
            technologies: ['C#', 'crystal report', 'Firebase'],
            category: 'mobile',
            liveUrl: 'https://demo.com',
            githubUrl: 'https://github.com',
            featured: false,
            stats: { stars: 51, forks: 15 }
        },
        {
            id: 5,
            title: 'Portfolio Website',
            description: 'Modern portfolio website with smooth animations, and optimized performance.',
            image: '/avatar_image.png',
            technologies: ['Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'],
            category: 'web',
            liveUrl: 'https://demo.com',
            githubUrl: 'https://github.com/omajithiya/projects',
            featured: false,
            stats: { stars: 45, forks: 23 }
        },
        {
            id: 6,
            title: 'Company Website',
            description: 'Responsive and modern company website showcasing services, portfolio, and contact features.',
            image: '/company_website.png', // replace with your image
            technologies: ['Rract.js', 'TypeScript', 'Tailwind CSS', 'React', 'Vercel'],
            category: 'web',
            liveUrl: '', // replace with actual URL
            githubUrl: '', // replace with repo link
            featured: false,
            stats: { stars: 40, forks: 0 },
        }
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/10 dark:from-gray-900 dark:via-blue-950/20 dark:to-purple-950/10 py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
                    >
                        My <span className="text-gradient">Projects</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
                    >
                        Here are some of my recent works. Each project represents a unique challenge
                        and an opportunity to create something meaningful.
                    </motion.p>
                </motion.div>

                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {filters.map((filter) => (
                        <motion.button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${activeFilter === filter.id
                                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                                : 'bg-white/80 dark:bg-gray-900/80 text-gray-600 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-blue-300 dark:hover:border-blue-700'
                                }`}
                        >
                            {filter.label}
                        </motion.button>
                    ))}
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
                        >
                            {/* Featured Badge */}
                            {project.featured && (
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-sm font-medium rounded-full flex items-center gap-1">
                                        <Star className="w-3 h-3" />
                                        Featured
                                    </span>
                                </div>
                            )}

                            {/* Project Image */}
                            <div className="relative h-48 overflow-hidden">
                                <div
                                    style={{ backgroundImage: `url(${project.image})` }}
                                    className="absolute inset-0 bg-cover bg-center group-hover:scale-110 transition-transform duration-500 rounded-lg" />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-500/20 rounded-lg"/>

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <Eye className="w-5 h-5" />
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="p-3 bg-white/90 dark:bg-gray-900/90 rounded-full shadow-lg hover:shadow-xl transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <div className="flex items-center gap-1">
                                            <Star className="w-3 h-3" />
                                            {project.stats.stars}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Code className="w-3 h-3" />
                                            {project.stats.forks}
                                        </div>
                                    </div>
                                </div>

                                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs rounded-md"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Action Buttons */}
                                <div className="flex gap-3">
                                    <motion.a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-300"
                                    >
                                        <ExternalLink className="w-4 h-4" />
                                        Live Demo
                                    </motion.a>
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-medium text-sm hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                                    >
                                        <Github className="w-4 h-4" />
                                        Code
                                    </motion.a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        className="text-center py-16"
                    >
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                            No projects found
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                            Try selecting a different filter to see more projects.
                        </p>
                    </motion.div>
                )}

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            Interested in working together?
                        </h2>
                        <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                            I&apos;m always open to discussing new opportunities and creative projects.
                            Let&apos;s turn your ideas into reality!
                        </p>
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                        >
                            Get In Touch
                            <ArrowRight className="w-4 h-4" />
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}