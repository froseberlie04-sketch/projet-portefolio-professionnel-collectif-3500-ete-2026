import React from 'react';

const membres = [
  {
    id: 1,
    nom: "Rose Berlie FRANÇOIS",
    role: "Développeuse Frontend & UI",
    bio: "Étudiante en informatique, passionnée par le développement web et l'intégration UI/UX.",
    github: "https://github.com/froseberlie04-sketch"
  },
  {
    id: 2,
    nom: "Guesly Noeljuste",
    role: "Développeur Backend",
    bio: "Spécialisé dans l'architecture serveur Node.js, Express et gestion des API REST.",
    github: "https://github.com/"
  },
];

export default function Equipe() {
  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '1000px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3a8a', marginBottom: '0.5rem' }}>Notre Équipe</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '3rem' }}>
        Les membres du groupe ayant contribué au projet de session LOG3500.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
        {membres.map((m) => (
          <div key={m.id} style={{ border: '1px solid #e5e7eb', borderRadius: '12px', padding: '1.5rem', backgroundColor: '#f9fafb', textAlign: 'center' }}>
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#fff', fontSize: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem auto' }}>
              {m.nom.charAt(0)}
            </div>
            <h3 style={{ margin: '0 0 0.5rem 0', color: '#111827' }}>{m.nom}</h3>
            <p style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '1rem' }}>{m.role}</p>
            <p style={{ color: '#6b7280', fontSize: '0.9rem', lineHeight: '1.5' }}>{m.bio}</p>
            <a href={m.github} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: '1rem', color: '#2563eb', textDecoration: 'none', fontWeight: '500' }}>
              Profil GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}