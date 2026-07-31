import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ nom: '', email: '', message: '' });
  const [statut, setStatut] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatut('Envoi en cours...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatut('Message envoyé avec succès !');
        setFormData({ nom: '', email: '', message: '' });
      } else {
        setStatut('Erreur lors de l\'envoi du message.');
      }
    } catch (error) {
      setStatut('Impossible de contacter le serveur.');
    }
  };

  return (
    <div style={{ padding: '3rem 2rem', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#1e3a8a', marginBottom: '0.5rem' }}>Contactez-nous</h1>
      <p style={{ textAlign: 'center', color: '#4b5563', marginBottom: '2rem' }}>
        Laissez-nous un message et nous vous répondrons rapidement.
      </p>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>Nom complet</label>
          <input
            type="text"
            required
            value={formData.nom}
            onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>Adresse Courriel</label>
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
          />
        </div>

        <div>
          <label style={{ display: 'block', fontWeight: 'bold', marginBottom: '0.5rem', color: '#374151' }}>Message</label>
          <textarea
            required
            rows="5"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            style={{ width: '100%', padding: '0.75rem', borderRadius: '6px', border: '1px solid #d1d5db', boxSizing: 'border-box' }}
          ></textarea>
        </div>

        <button
          type="submit"
          style={{ padding: '0.85rem', backgroundColor: '#2563eb', color: '#ffffff', border: 'none', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer' }}
        >
          Envoyer le message
        </button>
      </form>

      {statut && (
        <p style={{ textAlign: 'center', marginTop: '1.5rem', fontWeight: 'bold', color: statut.includes('succès') ? 'green' : 'red' }}>
          {statut}
        </p>
      )}
    </div>
  );
}