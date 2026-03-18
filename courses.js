let panier = JSON.parse(localStorage.getItem('panier')) || [];
let langueSelectionnee = localStorage.getItem('langueSelectionnee') || "";

function afficherCours(liste = data.courses) {
    const container = document.getElementById('courses-container');
    if (!container || typeof data === 'undefined') return;

    container.innerHTML = '';
    
    liste.forEach(cours => {
        const htmlLangue = `<span class="px-2 py-1 rounded border border-gray-200 bg-white/90 backdrop-blur-sm text-gray-500 font-['Poppins'] text-[10px] font-bold uppercase tracking-wider z-10 shadow-sm">${cours.language.toUpperCase()}</span>`;
        
        let htmlTech = "";
        if (cours.technologies && cours.technologies.length > 0) {
            const techs = Array.isArray(cours.technologies) ? cours.technologies : [cours.technologies];
            htmlTech = techs.map(tech => 
                `<span class="py-1 text-white bg-black/70 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider px-2 z-10 shadow-sm">${tech}</span>`
            ).join('');
        }

        const cardHTML = `
            <div class="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col max-w-[16rem] mx-auto">
                <div class="relative">
                    <img src="${cours.thumbnail}" alt="${cours.title}" class="w-full h-48 object-cover" loading="lazy">
                    <div class="absolute top-2 left-2 flex flex-wrap gap-1">${htmlLangue}${htmlTech}</div>
                    <div class="absolute top-40 bg-green-600 text-white right-0 rounded-l w-28 h-8 flex items-center justify-center text-xs font-bold">${cours.level.charAt(0).toUpperCase() + cours.level.slice(1)}</div>
                </div>
                <div class="p-3 grow flex flex-col">
                    <h3 class="font-['Playfair_Display'] text-2xl font-bold text-[#991b1b] leading-tight mb-3 line-clamp-2">${cours.title}</h3>
                    <span class="font-bold text-gray-900 text-lg font-['Poppins']">${cours.price.toLocaleString()} Ar</span>
                    <p class="text-gray-500 font-['Poppins'] text-sm line-clamp-2 leading-relaxed mb-6 mt-1">${cours.description}</p>
                    <div class="mt-auto flex justify-between items-center border-t border-gray-50 pt-4">
                        <button class="bg-gray-300 text-[#991b1b] px-3 py-2 rounded-lg text-xs font-semibold hover:bg-amber-50 transition-colors" onclick="window.open('/course/${cours.id}','_blank')">Learn more</button>
                        <button onclick="ajouterAuPanier('${cours.id}', '${cours.title}', ${cours.price})" class="bg-[#991b1b] text-white px-3 py-2 rounded-lg text-xs font-semibold hover:bg-[#7f1d1d] transition-colors shadow-sm hover:shadow-md">Add to cart</button>
                    </div>
                </div>
            </div>`;
        container.insertAdjacentHTML('beforeend', cardHTML);
    });
}

function filtrerLesCours() {
    const selectTech = document.getElementById('tech-filter');
    const selectLevel = document.getElementById('level-filter');
    const barreRecherche = document.querySelector('input[placeholder="Find a course..."]');
    const curseurMin = document.getElementById('minRange');
    const curseurMax = document.getElementById('maxRange');

    if (!selectTech || !selectLevel || !curseurMin || !curseurMax) return;

    let pMin = Number(curseurMin.value);
    let pMax = Number(curseurMax.value);
    let techChoisie = selectTech.value.toLowerCase().trim();
    let niveauChoisi = selectLevel.value.toLowerCase().trim();
    let recherche = barreRecherche ? barreRecherche.value.toLowerCase().trim() : '';

    if (pMin > pMax) {
        curseurMin.value = pMax;
        pMin = pMax;
    }

    document.getElementById('minLabel').innerText = pMin.toLocaleString();
    document.getElementById('maxLabel').innerText = pMax.toLocaleString();

    const resultats = data.courses.filter(cours => {
        const matchPrix = cours.price >= pMin && cours.price <= pMax;
        
        let matchTech = true;
        if (techChoisie) {
            const techsCours = Array.isArray(cours.technologies) 
                ? cours.technologies.map(t => t.toLowerCase()).includes(techChoisie)
                : cours.technologies?.toString().toLowerCase() === techChoisie;
            matchTech = techsCours;
        }
        
        const niveauNormalise = cours.level.toLowerCase();
        const matchNiveau = !niveauChoisi || niveauNormalise === niveauChoisi;
        
        const matchLangue = !langueSelectionnee || cours.language.toUpperCase() === langueSelectionnee;
        
        const matchRecherche = cours.title.toLowerCase().includes(recherche) || 
                              cours.description.toLowerCase().includes(recherche);

        return matchPrix && matchTech && matchNiveau && matchLangue && matchRecherche;
    });

    afficherCours(resultats);
    const titreH3 = document.querySelector('h3');
    if (titreH3) titreH3.innerText = `${resultats.length} COURSES FOUND`;
}

function filtrerParLangue(langue) {
    langueSelectionnee = langueSelectionnee === langue ? "" : langue;
    localStorage.setItem('langueSelectionnee', langueSelectionnee);
    
    document.querySelectorAll('.langue-filtre').forEach(btn => {
        btn.classList.remove('active');
        const img = btn.querySelector('.drapeau');
        if (img) img.classList.remove('active');
    });
    
    if (langueSelectionnee) {
        const btnActif = document.querySelector(`[data-langue="${langueSelectionnee}"]`);
        if (btnActif) {
            btnActif.classList.add('active');
            const imgActif = btnActif.querySelector('.drapeau');
            if (imgActif) imgActif.classList.add('active');
        }
    }
    
    filtrerLesCours();
}

function ajouterAuPanier(id, title, price) {
    const existeDeja = panier.find(c => c.id == id);
    if (existeDeja) {
        alert(`${title} est déjà dans votre panier !`);
        return;
    }

    panier.push({ id: id, titre: title, tarif: price });
    localStorage.setItem('panier', JSON.stringify(panier));
    miseAJourBadgePanier();

    const btn = event.target;
    const texteOriginal = btn.innerText;
    btn.innerText = '✓ Added!';
    btn.classList.add('bg-green-600', 'animate-pulse');
    
    setTimeout(() => {
        btn.innerText = texteOriginal;
        btn.classList.remove('bg-green-600', 'animate-pulse');
    }, 1500);
}

function miseAJourBadgePanier() {
    const badges = document.querySelectorAll('#cart-count, [id*="cart-count"], .cart-count');
    badges.forEach(badge => {
        badge.textContent = panier.length || '0';
        if (panier.length === 0) {
            badge.style.display = 'none';
        } else {
            badge.style.display = 'inline-flex';
        }
    });
}

function viderPanier() {
    if (panier.length === 0) return;
    
    if (confirm(`Vider complètement le panier ?\n\n${panier.length} cours seront supprimés.`)) {
        panier = [];
        localStorage.removeItem('panier');
        miseAJourBadgePanier();
        fermerPanier();
        console.log('✅ Panier vidé');
    }
}

function finaliserAchat() {
    if (panier.length === 0) {
        alert('Votre panier est vide !');
        return;
    }
    
    const total = panier.reduce((sum, item) => sum + item.tarif, 0);
    const confirmation = confirm(
        `✅ CONFIRMER VOTRE ACHAT\n\n` +
        `📦 ${panier.length} cours\n` +
        `💰 TOTAL: ${total.toLocaleString()} Ar\n\n` +
        `💳 PAIEMENT Mobile Money\n` +
        `📱 MVola / Orange Money / Airtel Money\n\n` +
        `📞 Appelez: 034 58 777 77 (Tokimahery)\n\n` +
        `Confirmez-vous ?`
    );
    
    if (confirmation) {
        const message = `🛒 *NOUVELLE COMMANDE COURS*\n\n` +
            `*Cours (${panier.length})*:\n` +
            panier.map(item => `• ${item.titre}`).join('\n') + '\n\n' +
            `*💰 TOTAL: ${total.toLocaleString()} Ar*\n\n` +
            `👤 *Nom:* [Votre nom]\n` +
            `📞 *Tel:* [Votre numéro]\n\n` +
            `Merci pour votre confiance ! 🙏`;
        
        const whatsappUrl = `https://wa.me/261345877777?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        
        panier = [];
        localStorage.removeItem('panier');
        miseAJourBadgePanier();
        alert('✅ *Commande transmise !*\n\n📞 Appelez 034 58 777 77 pour payer.');
        fermerPanier();
    }
}

function clearAllFilters() {
    document.getElementById('minRange').value = 0;
    document.getElementById('maxRange').value = 300000;
    document.getElementById('minLabel').innerText = '0';
    document.getElementById('maxLabel').innerText = '300.000';
    
    document.getElementById('tech-filter').value = '';
    document.getElementById('level-filter').value = '';
    document.querySelector('input[placeholder="Find a course..."]').value = '';
    
    langueSelectionnee = '';
    localStorage.removeItem('langueSelectionnee');
    
    document.querySelectorAll('.langue-filtre').forEach(btn => {
        btn.classList.remove('active');
        const img = btn.querySelector('.drapeau');
        if (img) img.classList.remove('active');
    });
    
    afficherCours(data.courses);
}

function ouvrirPanier() {
    const fenetre = document.getElementById('panier');
    const zoneTexte = document.getElementById('listePanier');
    const zoneTotal = document.getElementById('totalPrix');
    
    if (!fenetre || !zoneTexte || !zoneTotal) return;
    
    fenetre.classList.remove('hidden');
    fenetre.classList.add('flex');
    
    if (panier.length > 0) {
        zoneTexte.innerHTML = "";
        const total = panier.reduce((sum, item) => sum + item.tarif, 0);
        
        panier.forEach((item, index) => {
            zoneTexte.innerHTML += `
                <div class="flex justify-between items-center py-3 border-b border-gray-100">
                    <div>
                        <div class="font-medium text-sm">${item.titre}</div>
                        <div class="text-xs text-gray-500">ID: ${item.id}</div>
                    </div>
                    <div class="text-right">
                        <div class="font-bold text-[#991b1b] text-sm">${item.tarif.toLocaleString()} Ar</div>
                        <button onclick="retirerDuPanier(${item.id})" class="text-xs text-red-500 hover:text-red-700 mt-1">Supprimer</button>
                    </div>
                </div>`;
        });
        
        zoneTotal.innerText = total.toLocaleString() + " Ar";
        
        const boutons = document.querySelector('.boutons-panier');
        if (boutons) boutons.classList.remove('hidden');
    } else {
        zoneTexte.innerHTML = '<div class="text-center py-12 text-gray-400"><p class="text-lg">Votre panier est vide</p><p class="text-sm mt-2">Ajoutez des cours pour commencer !</p></div>';
        zoneTotal.innerText = "0 Ar";
        
        const boutons = document.querySelector('.boutons-panier');
        if (boutons) boutons.classList.add('hidden');
    }
}

function retirerDuPanier(id) {
    panier = panier.filter(item => item.id != id);
    localStorage.setItem('panier', JSON.stringify(panier));
    miseAJourBadgePanier();
    ouvrirPanier();
}

function fermerPanier() {
    const fenetre = document.getElementById('panier');
    if (fenetre) {
        fenetre.classList.remove('flex');
        fenetre.classList.add('hidden');
    }
}

function initialiserFiltres() {
    miseAJourBadgePanier();
    
    if (langueSelectionnee) {
        const btnActif = document.querySelector(`[data-langue="${langueSelectionnee}"]`);
        if (btnActif) {
            btnActif.classList.add('active');
            const imgActif = btnActif.querySelector('.drapeau');
            if (imgActif) imgActif.classList.add('active');
        }
    }
    
    if (document.getElementById('courses-container')) {
        afficherCours();
    }
    
    attacherEvenementsFiltres();
    attacherEvenementsPanier();
}

function attacherEvenementsFiltres() {
    const elements = {
        'minRange': 'input',
        'maxRange': 'input',
        'tech-filter': 'change',
        'level-filter': 'change',
        'clear-all-btn': 'click'
    };
    
    Object.entries(elements).forEach(([id, event]) => {
        const el = document.getElementById(id);
        if (el) {
            if (id === 'clear-all-btn') {
                el.addEventListener(event, clearAllFilters);
            } else if (event === 'input') {
                el.addEventListener(event, filtrerLesCours);
            } else {
                el.addEventListener(event, filtrerLesCours);
            }
        }
    });
    
    const searchInput = document.querySelector('input[placeholder="Find a course..."]');
    if (searchInput) searchInput.addEventListener('input', filtrerLesCours);
}

function attacherEvenementsPanier() {
    const viderBtn = document.getElementById('vider-panier');
    const finaliserBtn = document.getElementById('finaliser-achat');
    
    if (viderBtn) viderBtn.addEventListener('click', viderPanier);
    if (finaliserBtn) finaliserBtn.addEventListener('click', finaliserAchat);
}


document.addEventListener('DOMContentLoaded', initialiserFiltres);

window.addEventListener('storage', (e) => {
    if (e.key === 'panier') {
        panier = JSON.parse(e.newValue || '[]');
        miseAJourBadgePanier();
    }
});
