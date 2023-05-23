window.onload = function() {
  var compteurElement = document.getElementById("compteur");
  var compteur = parseInt(compteurElement.innerText);
  
  // Vérifier si la valeur du compteur est valide
  if (isNaN(compteur)) {
    compteur = 0; // Si la valeur n'est pas valide, initialiser à 0
  }
  
  compteur++; // Incrémenter le compteur
  
  compteurElement.innerText = compteur; // Mettre à jour l'affichage du compteur
};