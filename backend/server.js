import dotenv from "dotenv";
dotenv.config(); // charge le fichier .env

import http from "http";
import app from "./src/app.js";

const PORT = process.env.PORT || 4000;

// 1) Crée le serveur
const server = http.createServer(app);

// 2) Lance l’écoute
server.listen(PORT, () => {
  console.log(`✅ Server ready: http://localhost:${PORT}`);
});
