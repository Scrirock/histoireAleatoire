let noms = [
    "Jacque", "Louise",
    "Mathéo", "Carla",
    "Fernand", "Héloise",
    "Michel", "Nathalie",
    "Romain", "Emilie",
    "Lucas", "Merivane",
    "Patrick", "Manon",
    "Hubert", "Ginette",
    "Julien", "Océane",
    "Thomas", "Alana",
    "Igor", "Isabelle",
    "Vladimir", "Bernadette",
    "Bill", "Jessica",
    "Trevor", "Tiffani",
    "Killian", "Julie"
];
let lieux = [
    "a Momignies", "a Chimay",
    "a Virelle", "a Monceau",
    "a Seloignes", "a Charlerois",
    "a Mons", "a Liège",
    "a Namur", "a Bruxelle",
    "A Paris", "a Londre",
    "a Dublin", "a Foumies",
    "a Hirson", "en Roumanie",
    "en Russie", "au Nigeria",
    "prêt du petit arbre",
    "a coté de la maison rouge",
    "dans la cuisine",
    "dans la chambre de mon voisin",
    "chez Bertrand",
    "dans un musé",
    "au mileur de nul part",
    "pas vraiment sur terre",
];
let objets = [
    "une table", "une chaise",
    "un mur", "une voiture",
    "une pomme", "une fraise",
    "un steak", "du pain",
    "un clavier", "un écrans",
    "une souris", "un verre d'eau",
    "une bouteille de coca",
    "un tapis de gym",
    "un vélo", "une montre",
    "un cailloux", "des poils de chat",
    "une raquette de tennis", "un livre",
    "des frittes", "un volant",
    "une laisse", "du déo", "une lettre",
    "un peigne", "une bille",
    "une poupée", "un balai",
    "une bibliothèque", "un tabouret"
];
let temperatures = [
    "beacoup trop froid", "super froid",
    "froid", "pas chaud", "au moins moins 8000",
    "trop chaud", "chaud", "pas froid",
    "en pleine canicule", "proche de 100 degrès",
    "5 degrès", "24 degrès"
];
let verbes = [
    "manger", "dormir sur", "courir après",
    "casser", "perdre", "lancer"
];

let max;
function aletatoire(max){
    return Math.trunc(Math.random() * max)
}

let div = document.createElement("div");
document.body.append(div);

let nom = document.getElementById("nom");

document.getElementById("bouton").addEventListener("click", function (){
    let choixNom = noms[aletatoire(noms.length-1)];
    let choixLieu = lieux[aletatoire(lieux.length-1)];
    let choixObjet = objets[aletatoire(objets.length-1)];
    let choixTemperature = temperatures[aletatoire(temperatures.length-1)];
    let choixVerbe = verbes[aletatoire(verbes.length-1)];

    div.innerHTML += "Il fait "+choixTemperature+", "+nom.value+ " a vu "+" "+choixNom+" "+choixVerbe+" "+choixObjet+" "+choixLieu + "<br>";
});