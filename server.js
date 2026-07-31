const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
// Railway ap bay pò a nan process.env.PORT, si l pa la n ap sèvi ak 8080
const PORT = process.env.PORT || 8080;

// Middleware pou li done JSON ki soti nan fòm kontak la
app.use(express.json());

// Sèvi fichiye statik ki soti nan dossier build Vite la (dist)
app.use(express.static(path.join(__dirname, 'dist')));

// Route POST pou resevwa done fòm kontak la epi anrejistre yo nan messages.json
app.post('/api/contact', (req, res) => {
  const { nom, email, message } = req.body;

  // Validation senp pou asire tout chan yo ranpli
  if (!nom || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs sont requis.' });
  }

  const newMessage = {
    nom,
    email,
    message,
    date: new Date().toISOString()
  };

  const filePath = path.join(__dirname, 'messages.json');
  let messages = [];

  // Li mesaj ki te deja anrejistre yo si fichiye a egziste
  if (fs.existsSync(filePath)) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      messages = JSON.parse(content || '[]');
    } catch (e) {
      messages = [];
    }
  }

  // Ajoute nouvo mesaj la epi anrejistre nan messages.json
  messages.push(newMessage);
  fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

  res.status(200).json({ success: true, message: 'Message enregistré avec succès !' });
});

// Redirecte tout lòt requêtes sou index.html pou React Router ka jere navigasyon an
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Demare sèvè a
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});