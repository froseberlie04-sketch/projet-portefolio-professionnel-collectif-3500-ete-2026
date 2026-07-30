import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware pou li done JSON ki soti nan frontend
app.use(express.json());

// Servir les fichiers statiques du build Vite (dossier dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Route API POST pour le formulaire de contact
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  // Validation des champs côté serveur
  if (!name || !email || !message || !email.includes('@')) {
    return res.status(400).json({ error: 'Champs invalides ou manquants.' });
  }

  const newMessage = {
    id: Date.now(),
    name,
    email,
    message,
    date: new Date().toISOString()
  };

  let messages = [];

  // Lecture du fichier messages.json existant
  try {
    if (fs.existsSync('messages.json')) {
      const data = fs.readFileSync('messages.json', 'utf8');
      messages = JSON.parse(data);
    }
  } catch (err) {
    console.error("Erreur lors de la lecture de messages.json:", err);
  }

  // Ajout du nouveau message et sauvegarde
  messages.push(newMessage);

  try {
    fs.writeFileSync('messages.json', JSON.stringify(messages, null, 2));
    res.status(200).json({ success: true, message: 'Message enregistré avec succès !' });
  } catch (err) {
    console.error("Erreur lors de l'écriture dans messages.json:", err);
    res.status(500).json({ error: 'Erreur serveur lors de la sauvegarde.' });
  }
});

// Redirection pour React Router
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Serveur Express démarré sur le port ${PORT}`);
});