function afficherCours() {
    const container = document.getElementById('courses-container');

    if (typeof data === 'undefined' || !container) return;

    container.innerHTML = '';

    data.courses.forEach(cours => {
        // 1. Badge Langue (Toujours présent)
        const htmlLangue = `<span class="px-2 py-1 rounded border border-gray-200 bg-white/90 backdrop-blur-sm text-gray-500 font-['Poppins'] text-[10px] font-bold uppercase tracking-wider z-10 shadow-sm">${cours.language}</span>`;

        // 2. Badge Technologie : RÉSOLUTION DU PROBLÈME
        // On vérifie si cours.technologies existe ET n'est pas "0"
        let htmlTech = "";
        if (cours.technologies && cours.technologies !== "0" && cours.technologies !== 0) {
            htmlTech = `<span class="px-2 py-1 text-white bg-black/70 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider px-2 z-10 shadow-sm">${cours.technologies}</span>`;
        }

        const cardHTML = `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col">
                
                <div class="relative">
                    <img src="${cours.thumbnail}" alt="${cours.title}" class="w-full h-48 object-cover">
                    
                    <div class="absolute top-3 left-3 flex gap-2">
                        ${htmlLangue}
                        ${htmlTech}
                    </div>
                </div>
                
                <div class="p-6 grow flex flex-col">
                    <h3 class="font-['Playfair_Display'] text-2xl font-bold text-[#991b1b] leading-tight mb-3">
                        ${cours.title}
                    </h3>
                    <span class="font-bold text-gray-900 text-lg font-['Poppins']">
                            ${cours.price.toLocaleString()} Ar
                        </span>
                    
                    <p class="text-gray-500 font-['Poppins'] text-sm line-clamp-2 leading-relaxed mb-6">
                        ${cours.description}
                    </p>

                    <div class="mt-auto flex justify-between items-center border-t border-gray-50 pt-4">
                       
                        
                        <div class="flex items-center gap-2">
                            <button class="bg-gray-300 text-[#991b1b] px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-50 transition-colors">
                                Learn more
                            </button>
                            
                            <button class="bg-[#991b1b] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#7f1d1d] transition-colors">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

window.onload = afficherCours;
// On attrape les sliders de prix
const curseurMin = document.getElementById('minRange');
const curseurMax = document.getElementById('maxRange');

// On attrape les textes qui affichent le prix au-dessus des sliders
const labelMin = document.getElementById('minLabel');
const labelMax = document.getElementById('maxLabel');

// On attrape le menu de technologie (le select)
const selectTech = document.getElementById('tech-filter');

// On attrape la barre de recherche
const barreRecherche = document.querySelector('input[placeholder="Find a course..."]');
// Dès qu'on bouge le curseur Min
curseurMin.oninput = filtrerLesCours;

// Dès qu'on bouge le curseur Max
curseurMax.oninput = filtrerLesCours;

// Dès qu'on change la technologie dans la liste
selectTech.onchange = filtrerLesCours;

// Dès qu'on tape dans la barre de recherche
barreRecherche.oninput = filtrerLesCours;
function filtrerLesCours() {
    // ÉTAPE A : Récupérer ce que l'utilisateur a choisi
    let prixMinimumChoisi = Number(curseurMin.value);
    let prixMaximumChoisi = Number(curseurMax.value);
    let technologieChoisie = selectTech.value;
    let texteRecherche = barreRecherche.value.toLowerCase();

    // ÉTAPE B : Mettre à jour les petits textes de prix en haut
    labelMin.innerText = prixMinimumChoisi.toLocaleString('fr-FR');
    labelMax.innerText = prixMaximumChoisi.toLocaleString('fr-FR');

    // ÉTAPE C : Faire le tri (Le filtrage)
    // On crée une nouvelle liste vide pour stocker les cours qui correspondent
    let coursQuiSontBons = [];

    // On regarde chaque cours un par un dans tes données originales
    for (let i = 0; i < data.courses.length; i++) {
        let leCoursActuel = data.courses[i];

        // 1. Est-ce que le prix est entre le min et le max ?
        let prixOk = leCoursActuel.price >= prixMinimumChoisi && leCoursActuel.price <= prixMaximumChoisi;

        // 2. Est-ce que c'est la bonne technologie ? 
        // (Si c'est vide "" dans le select, ça veut dire "Tout afficher")
        let techOk = (technologieChoisie === "") || (leCoursActuel.technologies === technologieChoisie);

        // 3. Est-ce que le titre contient ce qu'on a tapé ?
        let titreOk = leCoursActuel.title.toLowerCase().includes(texteRecherche);

        // Si le cours remplit TOUTES les conditions, on l'ajoute à notre liste
        if (prixOk && techOk && titreOk) {
            coursQuiSontBons.push(leCoursActuel);
        }
    }

    // ÉTAPE D : Afficher le résultat
    // On remplace temporairement la liste globale par notre liste triée
    // Puis on appelle TA fonction afficherCours()
    let ancienneListe = data.courses; 
    data.courses = coursQuiSontBons;
    
    afficherCours(); // Ton code original qui dessine les cartes
    
    data.courses = ancienneListe; // On remet la liste complète pour le prochain tri
}