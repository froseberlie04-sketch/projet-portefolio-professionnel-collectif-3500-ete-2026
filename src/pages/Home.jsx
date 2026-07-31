import React from 'react';

export default function Home() {
  return (
    <div style={{ textAlign: 'center', padding: '4rem 1rem', fontFamily: 'sans-serif' }}>
      
      {/* Badge anwo a */}
      <div style={{
        display: 'inline-block',
        backgroundColor: '#dbeafe',
        color: '#1d4ed8',
        padding: '6px 16px',
        borderRadius: '20px',
        fontSize: '0.85rem',
        fontWeight: 'bold',
        marginBottom: '1.5rem'
      }}>
        ✨ PORTFOLIO OFFICIEL
      </div>

      {/* Tit Prensipal la */}
      <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#111827', marginBottom: '1rem' }}>
        Développement Web & Solutions Digitales
      </h1>

      {/* Sous-titre */}
      <p style={{ color: '#4b5563', maxWidth: '650px', margin: '0 auto 3rem auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
        Bienvenue sur la plateforme de notre équipe. Nous concevons des applications web modernes, performantes et évolutives.
      </p>

      {/* 3 Kat yo */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem',
        flexWrap: 'wrap',
        maxWidth: '900px',
        margin: '0 auto'
      }}>
        
        {/* Kat 1 */}
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '2.5rem 1.5rem',
          width: '220px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🚀</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Performance</h3>
        </div>

        {/* Kat 2 */}
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '2.5rem 1.5rem',
          width: '220px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🛠️</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>Backend Solide</h3>
        </div>

        {/* Kat 3 */}
        <div style={{
          backgroundColor: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '12px',
          padding: '2.5rem 1.5rem',
          width: '220px',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>🎨</div>
          <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>UI/UX Soigné</h3>
        </div>

      </div>
    </div>
  );
}