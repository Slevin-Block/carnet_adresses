// PARTIE DES IMPORTS
import router from "./routes/routes.js"
import * as dotenv from 'dotenv'
import express from 'express';

dotenv.config()
const app = express();


// Nécessaire pour l'affichage avec EJS
app.set('view engine', 'ejs');

// Création de l'access public
app.use(express.static('public'));

// Pour la gestion des JSON au cas où
app.use(express.json())

//! Pour l'accessibilité en méthode POST <= NE PAS OUBLIER POUR LE POST
app.use(express.urlencoded({extended : true}))

// Chargement des Routes
app.use("/", router)

// Ouverture de l'écoute sur le port
app.listen(process.env.PORT, () => console.log(`Serveur started on port http://${process.env.MYHOSTNAME}:${process.env.PORT}`));