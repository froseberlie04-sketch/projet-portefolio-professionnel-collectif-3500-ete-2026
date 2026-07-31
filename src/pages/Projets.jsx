import React, { useState } from 'react';

const listeProjets = [
  {
    id: 1,
    titre: "Devoir 1 - Structure Sémantique & CSS",
    categorie: "Devoir",
    description: "Création d'une interface web adaptative et accessible respectant les normes W3C.",
    technologies: ["HTML5 Sémantique", "CSS Grid", "Flexbox", "Accessibilité ARIA"],
    lienGithub: "https://github.com/froseberlie04-sketch"
  },
  {
    id: 2,
    titre: "Devoir 2 - API REST avec Node.js",
    categorie: "Devoir",
    description: "Mise en place d'un serveur web Express avec gestion des requêtes HTTP et routage.",
    technologies: ["Node.js", "Express", "API REST", "JSON"],
    lienGithub: "https://github.com/froseberlie04-sketch"
  },
  {
    id: 3,
    titre: "Projet de Session - Portfolio Collectif",
    categorie: "Projet de Session",
    description: "Application web SPA dynamique combinant frontend React et backend Express.",
    technologies: ["React", "Vite", "React Router v6", "Context API", "Express", "Railway"],
    lienGithub: "https://github.com/froseberlie04-sketch/projet-portefolio-professionnel-collectif-3500-ete-2026"
  }
];

export default function Projets() {
  const [filtre, setFiltre] = useState('Tous');

  const projetsAffiches = filtre === 'Tous'
    ? listeProjets
    : listeProjets.filter(p => p.categorie === filtre);

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3a8a', marginBottom: '0.5rem' }}>Nos Réalisations</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '2rem' }}>
        Travaux pratiques et projets développés au cours de la session.
      </p>

      {/* Filtres */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
        {['Tous', 'Devoir', 'Projet de Session'].map((cat) => (
          <button
            key={cat}
            onClick={() => setFiltre(cat)}
            style={{
              padding: '0.5rem 1.25rem',
              borderRadius: '20px',
              border: 'none',
              backgroundColor: filtre === cat ? '#2563eb' : '#e5e7eb',
              color: filtre === cat ? '#ffffff' : '#374151',
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cartes Projets */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        {projetsAffiches.map((p) => (
          <div key={p.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', backgroundColor: '#ffffff', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 'bold', color: '#2563eb', backgroundColor: '#dbeafe', padding: '4px 8px', borderRadius: '4px' }}>
              {p.categorie}
            </span>
            <h3 style={{ margin: '1rem 0 0.5rem 0', color: '#111827' }}>{p.titre}</h3>
            <p style={{ color: '#4b5563', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '1rem' }}>{p.description}</p>
            
            <p style={{ fontSize: '0.85rem', fontWeight: 'bold', color: '#374151', marginBottom: '0.5rem' }}>Technologies & Matériels:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
              {p.technologies.map((tech, idx) => (
                <span key={idx} style={{ fontSize: '0.8rem', backgroundColor: '#f3f4f6', color: '#4b5563', padding: '2px 8px', borderRadius: '4px' }}>
                  {tech}
                </span>
              ))}
            </div>

            <a href={p.lienGithub} target="_blank" rel="noreferrer" style={{ color: '#2563eb', textDecoration: 'none', fontWeight: 'bold', fontSize: '0.9rem' }}>
              Code Source GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}