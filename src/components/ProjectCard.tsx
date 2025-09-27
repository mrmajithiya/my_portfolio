'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  image: string; // path in /public
  live?: string;
  repo?: string;
};

export default function ProjectCard({ title, description, image, live, repo }: Props) {
  return (
    <motion.article whileHover={{ y: -6 }} className="rounded-lg overflow-hidden shadow-lg">
      <div className="relative w-full h-48">
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} priority={false} />
      </div>

      <div className="p-4">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>

        <div className="mt-4 flex gap-3">
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="text-sm underline">
              Live
            </a>
          )}
          {repo && (
            <a href={repo} target="_blank" rel="noreferrer" className="text-sm underline">
              Code
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}
