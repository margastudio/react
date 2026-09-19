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
    <section id="work" className="marga-section">
      <div className="marga-section-header">
        <h2>Selected work</h2>
        <span className="marga-section-kicker">Portfolio</span>
      </div>

      <div className="marga-project-grid">
        {projects.map((project, idx) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: idx * 0.08 }}
            className="marga-project-card"
          >
            <div className="marga-project-media">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="marga-project-meta">
              <h3 className="marga-project-title">{project.title}</h3>
              <span className="marga-project-index">{project.id}</span>
            </div>
            <p className="marga-project-cat">{project.cat}</p>
            <p className="marga-project-desc">{project.desc}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
