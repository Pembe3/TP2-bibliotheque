// Tableau pour stocker les livres
let bibliotheque = [];

// Fonction pour ajouter un livre
function ajouterLivre() {
  const titre = document.getElementById('title').value;
  const auteur = document.getElementById('author').value;
  const annee = parseInt(document.getElementById('year').value);

  if (!titre || !auteur || isNaN(annee)) {
    afficher("Veuillez remplir tous les champs.");
    return;
  }

  const livre = {
    title: titre,
    author: auteur,
    publicationYear: annee,
    borrowed: false
  };

  bibliotheque.push(livre);
  afficher(`Livre ajouté : ${titre} par ${auteur} (${annee})`);
}

// Fonction pour afficher les livres disponibles
function listerLivresDisponibles() {
  const disponibles = bibliotheque.filter(livre => !livre.borrowed);
  if (disponibles.length === 0) {
    afficher("Aucun livre disponible.");
  } else {
    afficher("Livres disponibles :");
    disponibles.forEach(l => afficher(`- ${l.title} par ${l.author} (${l.publicationYear})`));
  }
}

// Fonction pour chercher un livre par titre
function chercherParTitre() {
  const titre = document.getElementById('searchTitle').value.trim();
  const livre = bibliotheque.find(l => l.title.toLowerCase() === titre.toLowerCase());
  if (livre) {
    afficher(`Trouvé : ${livre.title} (${livre.borrowed ? "emprunté" : "disponible"})`);
  } else {
    afficher("Livre non trouvé.");
  }
}

// Fonction pour emprunter un livre
function emprunterLivre(titre) {
  const livre = bibliotheque.find(l => l.title.toLowerCase() === titre.toLowerCase());
  if (livre) {
    if (livre.borrowed) {
      afficher("Le livre est déjà emprunté.");
    } else {
      livre.borrowed = true;
      afficher(`Vous avez emprunté "${livre.title}".`);
    }
  } else {
    afficher("Livre non trouvé.");
  }
}

// Fonction pour retourner un livre
function retournerLivre(titre) {
  const livre = bibliotheque.find(l => l.title.toLowerCase() === titre.toLowerCase());
  if (livre) {
    if (!livre.borrowed) {
      afficher("Le livre est déjà retourné.");
    } else {
      livre.borrowed = false;
      afficher(`Vous avez retourné "${livre.title}".`);
    }
  } else {
    afficher("Livre non trouvé.");
  }
}

// BONUS : recherche avancée
function rechercheAvancee() {
  const auteur = document.getElementById('searchAuthor').value.trim().toLowerCase();
  const annee = parseInt(document.getElementById('searchYear').value);

  const resultats = bibliotheque.filter(l =>
    (auteur ? l.author.toLowerCase().includes(auteur) : true) &&
    (!isNaN(annee) ? l.publicationYear === annee : true)
  );

  if (resultats.length === 0) {
    afficher("Aucun livre correspondant.");
  } else {
    afficher("Résultats de la recherche :");
    resultats.forEach(l => afficher(`- ${l.title} par ${l.author} (${l.publicationYear})`));
  }
}

// Fonction utilitaire pour afficher dans la console de la page
function afficher(message) {
  const output = document.getElementById("output");
  output.textContent += message + "\n";
}
