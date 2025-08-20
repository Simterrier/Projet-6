import express from "express";
import cors from "cors";

const app = express();

// Active CORS (important pour que le frontend puisse appeler l’API)
app.use(cors());

// Permet à Express de lire du JSON dans les requêtes
app.use(express.json());

// Route de test
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Page d’accueil API
app.get("/", (req, res) => {
  res.type("text").send("Mon Vieux Grimoire API – backend en ligne 🚀");
});

// Si aucune route ne correspond → 404
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// Gestion globale des erreurs
app.use((err, req, res, next) => {
  console.error("❌ Erreur serveur:", err);
  if (err instanceof Error) {
    return res.status(500).json({ error: err.message });
  }
  res.status(500).json({ error: "Internal server error" });
});

export default app;
