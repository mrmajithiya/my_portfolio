'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Rocket, Heart, Award, Calendar, MapPin } from 'lucide-react';
import { Server, Database, Settings } from 'lucide-react';
import Navbar from '@/components/Navbar';


export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  
  const skills1 = [
  
  { name: 'HTML5', level: 90, icon: Code },
  { name: 'CSS3', level: 90, icon: Code },
  { name: 'JavaScript', level: 90, icon: Code },
  { name: 'React.js', level: 90, icon: Code },
  { name: 'Next.js', level: 90, icon: Code },
  { name: 'Python', level: 75, icon: Code },
  { name: 'C', level: 70, icon: Code },
  { name: 'C++', level: 70, icon: Code },
  { name: 'C#', level: 70, icon: Code },
  { name: 'Java', level: 75, icon: Code },
  { name: 'Kotlin', level: 70, icon: Code },
  { name: 'PHP', level: 70, icon: Code },

];

const skills2 = [

  { name: 'TypeScript', level: 85, icon: Code },
  { name: 'MySQL', level: 75, icon: Database },
  { name: 'MongoDB', level: 75, icon: Database },
  { name: 'Firebase', level: 80, icon: Server },
  { name: 'AI/ML (TensorFlow, PyTorch, Scikit-learn, Pandas, NumPy, OpenCV)', level: 75, icon: Rocket },
  { name: 'Web Scraping (Selenium)', level: 70, icon: Rocket },
  { name: 'GitHub', level: 85, icon: Settings },
  { name: 'Docker', level: 75, icon: Settings },
  { name: 'Node.js', level: 80, icon: Server },
  { name: 'Django', level: 75, icon: Server },
  { name: 'Android Studio', level: 80, icon: Settings },
  { name: 'React Native', level: 75, icon: Code },
  { name: 'AWS (EC2, S3)', level: 70, icon: Server },
];


  const experience = [
    {
      year: '2024 - 2025',
      role: 'Web Developer',
      company: 'suffix process solution',
      description: 'Leading development of scalable web applications using modern technologies.\n Developed dynamic webpage designing using React JS and Django.'
    },
    
    // {
    //   year: '2020 - 2021',
    //   role: 'Junior Developer',
    //   company: 'StartUp Labs',
    //   description: 'Started my career building foundational skills in web development.'
    // }
  ];

  const passions = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code that stands the test of time.'
    },
    {
      icon: Palette,
      title: 'Beautiful Design',
      description: 'Creating interfaces that are not just functional but delightful to use.'
    },
    {
      icon: Rocket,
      title: 'Performance',
      description: 'Optimizing for speed and smooth user experiences across all devices.'
    },
    {
      icon: Heart,
      title: 'User Experience',
      description: 'Putting users first in every design and development decision.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/20 to-purple-50/10 dark:from-gray-900 dark:via-blue-950/50 dark:to-purple-950/10">
      <Navbar />
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I&apos;m a passionate full-stack developer with a love for creating digital experiences 
            that are both beautiful and functional. With over 7+ month of experience, I specialize 
            in turning ideas into reality through code.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 shadow-xl p-8 sticky top-8">
              {/* Profile Image Placeholder */}
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white text-4xl font-bold">
                OM
              </div>
              
              <h2 className="text-2xl font-bold text-center mb-2 text-gray-800 dark:text-white">
                Om Majithiya
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                Full Stack Developer
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <MapPin className="w-5 h-5 mr-3 text-blue-500" />
                  <span>Ahmedabad, Gujarat, India</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Calendar className="w-5 h-5 mr-3 text-purple-500" />
                  <span>7+ Month Experience</span>
                </div>
                <div className="flex items-center text-gray-600 dark:text-gray-300">
                  <Award className="w-5 h-5 mr-3 text-yellow-500" />
                  <span>6+ Projects Completed</span>
                </div>
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                  &quot;I believe in writing code that not only works but tells a story and solves real problems.&quot;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* My Story Section */}
            <motion.section
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">My Journey</h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  My journey in web development started during my college days when I built my first website. 
                  I was fascinated by how code could bring ideas to life on the screen. Since then, I&apos;ve been 
                  on a continuous learning path, exploring new technologies and best practices.
                </p>
                {/* and have extensive experience with <span className="font-semibold text-purple-600 dark:text-purple-400">Next.js</span> */}
                <p>
                  I specialize in the <span className="font-semibold text-blue-600 dark:text-blue-400">Full stack</span> , 
                  creating performant and scalable applications. I&apos;m passionate about clean code, 
                  user experience, and staying up-to-date with the latest industry trends.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new design trends, contributing to open-source projects, 
                  or sharing my knowledge with the developer community through various forms of content.
                </p>
              </div>
            </motion.section>

            {/* Experience Timeline */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Experience</h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-1" />
                      <div className="w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-500" />
                    </div>
                    <div className="flex-1 pb-8">
                      <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                        <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                        <h3 className="text-xl font-bold mt-3 mb-2 text-gray-800 dark:text-white">
                          {exp.role}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-3 font-medium">
                          {exp.company}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Skills Section */}
            <motion.section
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Skills & Technologies</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {skills1.map((skill, index) => (
                  <motion.div
                    // key={skill.name}
                    key={`${skill.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <skill.icon className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* second part of the skills section */}
            <motion.section
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              {/* <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">Skills & Technologies</h2> */}
              <div className="grid md:grid-cols-2 gap-6">
                {skills2.map((skill, index) => (
                  <motion.div
                    // key={skill.name}
                    key={`${skill.name}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <skill.icon className="w-5 h-5 text-blue-500 mr-2" />
                        <span className="font-semibold text-gray-800 dark:text-white">{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            

            {/* Passions Section */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">What I&apos;m Passionate About</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {passions.map((passion, index) => (
                  <motion.div
                    key={passion.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 dark:border-gray-700/50 p-6 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                        <passion.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                        {passion.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300">
                      {passion.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Fun Facts */}
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl p-8 text-white"
            >
              <h2 className="text-2xl font-bold mb-6 text-center">Fun Facts</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {[
                  { number: '10+', label: 'Coffees' },
                  { number: '6+', label: 'Projects' },
                  { number: '7+', label: 'Month Exp' },
                  { number: '∞', label: 'Ideas' }
                ].map((fact, index) => (
                  <motion.div
                    key={fact.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl font-bold">{fact.number}</div>
                    <div className="text-blue-100">{fact.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
