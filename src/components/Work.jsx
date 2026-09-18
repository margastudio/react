import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: '01',
    title: 'FuNiHao',
    cat: 'Product Design / UX/UI',
    desc: 'A Chinese-learning app designed to make language learning more engaging, practical and human.',
    image: '/images/ls8n0zlcfa4pdfqt2u6tbsljk0k.png'
  },
  {
    id: '02',
    title: 'TribuxMusic',
    cat: 'Product Design / UX/UI',
    desc: 'A digital ticketing experience designed for young music audiences in Buenos Aires.',
    image: '/images/raieyq1l35xmlhuu6svlrxhani.jpg'
  },
  {
    id: '03',
    title: 'Harman Audio Experience',
    cat: 'UX/UI / Interaction Design',
    desc: 'A concept for a connected audio experience exploring the relationship between sound, light and interaction.',
    image: '/images/mbh8xzc2f8x6uegn0mkfgq3uvdw.webp'
  },
  {
    id: '04',
    title: 'Duolingo — Real-Life Conversations',
    cat: 'UX/UI / Product Design',
    desc: 'A product concept exploring how language-learning platforms can move beyond exercises.',
    image: '/images/swckcaqxxpjaxmycntbjniwjnza.webp'
  },
  {
    id: '05',
    title: 'Santander',
    cat: 'UX/UI / Product Design',
    desc: 'A digital banking feature concept focused on improving personal finance management.',
    image: '/images/comydsrbrvzzlf6gpuvyoueoju.png'
  },
  {
    id: '06',
    title: 'Marga Studio',
    cat: 'Web Design / Creative Technology',
    desc: 'The digital home of Marga Studio — exploring the intersection of digital design, technology and culture.',
    image: '/images/mof97izxxht3unpcs6y9zsjo2bu.jpg'
  }
];

export default function Work() {
  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto border-t border-black/10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {projects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            className="group cursor-pointer space-y-4"
          >
            <div className="aspect-[4/3] bg-neutral-100 overflow-hidden relative rounded-lg border border-black/10">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="flex justify-between items-baseline pt-2">
              <h3 className="text-xl font-medium">{project.title}</h3>
              <span className="text-xs uppercase tracking-widest opacity-40">{project.id}</span>
            </div>
            <p className="text-xs uppercase tracking-wider opacity-60">{project.cat}</p>
            <p className="text-sm opacity-80 font-light leading-relaxed">{project.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
