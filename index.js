    const express = require('express');
    const cors = require('cors'); // CORS paketini dahil et
    const app = express();
    const port = 3000;

    // 🚨 Buraya yaz! (app tanımlandıktan hemen sonra)
    app.use(cors({ origin: 'https://nyxion.netlify.app' }));

    app.use(express.json());

    // Aşağısı API rotaların
    let projects = [
    { id: 1, title: "Portfolyo", description: "Kendi bootstrap ile tasarladığım site" },
    { id: 2, title: "Mesajlaşma sitesi", description: "Bootstrap ile mesajlaşma sitesi" }
    ];

    app.get('/', (req, res) => {
    res.send('Merhaba, backend API hazır!');
    });

    app.get('/projects', (req, res) => {
    res.json(projects);
    });

    app.post('/projects', (req, res) => {
    const { title, description } = req.body;
    if (!title || !description) {
        return res.status(400).json({ error: 'Başlık ve açıklama gerekli.' });
    }
    const newProject = { id: projects.length + 1, title, description };
    projects.push(newProject);
    res.status(201).json(newProject);
    });

    app.listen(port, () => {
    console.log(`Backend http://localhost:${port} adresinde çalışıyor`);
    });
