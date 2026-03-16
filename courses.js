let panier = []; 
let langueSelectionnee = ""; 

// 1. AFFICHER LES COURS
function afficherCours(liste = data.courses) {
    const container = document.getElementById('courses-container');
    if (typeof data === 'undefined' || !container) return;

    container.innerHTML = '';

    liste.forEach(cours => {
        const htmlLangue = `<span class="px-2 py-1 rounded border border-gray-200 bg-white/90 backdrop-blur-sm text-gray-500 font-['Poppins'] text-[10px] font-bold uppercase tracking-wider z-10 shadow-sm">${cours.language}</span>`;
        
        let htmlTech = "";
        if (cours.technologies && cours.technologies !== "0" && cours.technologies !== 0) {
            htmlTech = `<span class="py-1 text-white bg-black/70 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider px-2 z-10 shadow-sm">${cours.technologies}</span>`;
        }

        const cardHTML = `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col max-w-[16rem] mx-auto">
                <div class="relative">
                    <img src="${cours.thumbnail}" alt="${cours.title}" class="w-full h-48 object-cover">
                    <div class="absolute top-2 left-2 flex gap-1">${htmlLangue}${htmlTech}</div>
                    <div class="absolute top-40 bg-green-600 text-white right-0 rounded-l w-28 h-8 flex items-center justify-center">${cours.level}</div>
                </div>
                <div class="p-3 grow flex flex-col">
                    <h3 class="font-['Playfair_Display'] text-2xl font-bold text-[#991b1b] leading-tight mb-3">${cours.title}</h3>
                    <span class="font-bold text-gray-900 text-lg font-['Poppins']">${cours.price.toLocaleString()} Ar</span>
                    <p class="text-gray-500 font-['Poppins'] text-sm line-clamp-2 leading-relaxed mb-6">${cours.description}</p>
                    <div class="mt-auto flex justify-between items-center border-t border-gray-50 pt-4">
                        <button class="bg-gray-300 text-[#991b1b] px-3 py-2 rounded-lg text-xs font-semibold hover:bg-amber-50">Learn more</button>
                        <button onclick="ajouterAuPanier('${cours.title}', ${cours.price})" class="bg-[#991b1b] text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-[#7f1d1d]">Add to cart</button>
                    </div>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// 2. FILTRER LES COURS
function filtrerLesCours() {
    // 1. Récupération des éléments
    const selectTech = document.getElementById('tech-filter');
    const selectLevel = document.getElementById('level-filter');
    const barreRecherche = document.querySelector('input[placeholder="Search anything..."]'); // Vérifie bien cet ID/Placeholder
    const curseurMin = document.getElementById('minRange');
    const curseurMax = document.getElementById('maxRange');

    // 2. Récupération des valeurs
    let pMin = Number(curseurMin.value);
    let pMax = Number(curseurMax.value);
    let techChoisie = selectTech.value.toLowerCase().trim();
    let niveauChoisi = selectLevel.value.trim();
    let recherche = barreRecherche.value.toLowerCase().trim();

    
    if (pMin > pMax) {
        curseurMin.value = pMax;
        pMin = pMax;
    }

    // Mise à jour des textes de prix
    document.getElementById('minLabel').innerText = pMin.toLocaleString();
    document.getElementById('maxLabel').innerText = pMax.toLocaleString();

    // 3. Le filtrage
    const resultats = data.courses.filter(cours => {
        // Prix
        const matchPrix = cours.price >= pMin && cours.price <= pMax;
        
        // Technologie (On compare en minuscules pour éviter les erreurs "Javascript" vs "javascript")
        const coursTech = cours.technologies ? cours.technologies.toString().toLowerCase() : "";
        const matchTech = (techChoisie === "") || (coursTech === techChoisie);
        
        // Niveau (doit correspondre exactement à "Beginner" ou "Advanced")
        const matchNiveau = (niveauChoisi === "") || (cours.level === niveauChoisi);
        
        // Langue (Variable globale)
        const matchLangue = (langueSelectionnee === "") || (cours.language === langueSelectionnee);

        // Recherche par titre
        const matchTitre = cours.title.toLowerCase().includes(recherche);

        return matchPrix && matchTech && matchNiveau && matchLangue && matchTitre;
    });

    // 4. On réaffiche
    afficherCours(resultats);
}
// 3. INITIALISATION ET ÉVÉNEMENTS
window.onload = () => {
    afficherCours();
    
    // Liaison des événements
    document.getElementById('minRange').oninput = filtrerLesCours;
    document.getElementById('maxRange').oninput = filtrerLesCours;
    document.getElementById('tech-filter').onchange = filtrerLesCours;
    document.getElementById('level-filter').onchange = filtrerLesCours;
    document.querySelector('input[placeholder="Find a course..."]').oninput = filtrerLesCours;
};

// Fonction pour les drapeaux
function filtrerParLangue(langue) {
    langueSelectionnee = (langueSelectionnee === langue) ? "" : langue;
    filtrerLesCours();
}
document.getElementById('tech-filter').addEventListener('change', filtrerLesCours);
document.getElementById('level-filter').addEventListener('change', filtrerLesCours);

const laFenetrePanier = document.getElementById('panierModale');
function ajouterAuPanier(title, price) {
    
    const existeDeja = panier.find(c => c.titre === title);

    if (existeDeja) {
        alert(title + " is already in your cart!");
        return; 
    }

    
    let objetCours = {
        titre: title,
        tarif: price
    };
    panier.push(objetCours);
    
   
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = panier.length;
    }

    
    console.log("Panier mis à jour :", panier);
}



function ouvrirPanier() {
    const fenetre = document.getElementById('panier');
    const zoneTexte = document.getElementById('listePanier');
    const zoneTotal = document.getElementById('totalPrix'); 
    
    fenetre.classList.remove('hidden');
    fenetre.classList.add('flex');
    
    if (panier.length > 0) {
        zoneTexte.innerHTML = ""; 
        let somme = 0; 

        for (let i = 0; i < panier.length; i++) {
           
            somme = somme + panier[i].tarif;

            zoneTexte.innerHTML += `
                <div class="flex justify-between border-b pb-2">
                    <span>${panier[i].titre}</span>
                    <span class="font-bold">${panier[i].tarif.toLocaleString()} Ar</span>
                </div>`;
        }
        
        zoneTotal.innerText = somme.toLocaleString() + " Ar";

    } else {
        zoneTexte.innerHTML = '<p class="text-gray-400 italic">Your cart is empty.</p>';
        zoneTotal.innerText = "0 Ar";
    }
}

function fermerPanier() {
    document.getElementById('panier').classList.remove('flex');
    document.getElementById('panier').classList.add('hidden');
}
// On ajoute l'écouteur pour le niveau
document.getElementById('level-filter').onchange = filtrerLesCours;
function filtrerParLangue(langue) {
    // Si on clique sur la même langue, on l'enlève (désélection), sinon on la met à jour
    if (langueSelectionnee === langue) {
        langueSelectionnee = ""; 
    } else {
        langueSelectionnee = langue;
    }
    
    // On relance le filtrage général pour que le prix et la recherche s'appliquent aussi
    filtrerLesCours();
}