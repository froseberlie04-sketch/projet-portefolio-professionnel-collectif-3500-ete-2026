import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem 2rem',
      borderBottom: '1px solid #e5e7eb',
      backgroundColor: '#ffffff'
    }}>
      <div style={{ fontWeight: 'bold', fontSize: '1.25rem', color: '#1e3a8a' }}>
        Portfolio Collectif
      </div>
      
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Accueil</Link>
        <Link to="/equipe" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Équipe</Link>
        <Link to="/projets" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Projets</Link>
        <Link to="/contact" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Contact</Link>
      </nav>

      <button style={{
        padding: '0.4rem 0.8rem',
        borderRadius: '20px',
        border: '1px solid #d1d5db',
        backgroundColor: '#f9fafb',
        cursor: 'pointer',
        fontSize: '0.85rem'
      }}>
        🌙 Mode Sombre
      </button>
    </header>
  );
}