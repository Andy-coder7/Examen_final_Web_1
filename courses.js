function afficherCours() {
    const container = document.getElementById('courses-container');

    if (typeof data === 'undefined' || !container) return;

    container.innerHTML = '';

    data.courses.forEach(cours => {
        
        const htmlLangue = `<span class="px-2 py-1 rounded border border-gray-200 bg-white/90 backdrop-blur-sm text-gray-500 font-['Poppins'] text-[10px] font-bold uppercase tracking-wider z-10 shadow-sm">${cours.language}</span>`;

        
        let htmlTech = "";
        if (cours.technologies && cours.technologies !== "0" && cours.technologies !== 0) {
            htmlTech = `<span class="py-1 text-white bg-black/70 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-wider px-2 z-10 shadow-sm">${cours.technologies}</span>`;
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

const curseurMin = document.getElementById('minRange');
const curseurMax = document.getElementById('maxRange');


const labelMin = document.getElementById('minLabel');
const labelMax = document.getElementById('maxLabel');


const selectTech = document.getElementById('tech-filter');


const barreRecherche = document.querySelector('input[placeholder="Find a course..."]');

curseurMin.oninput = filtrerLesCours;


curseurMax.oninput = filtrerLesCours;


selectTech.onchange = filtrerLesCours;


barreRecherche.oninput = filtrerLesCours;
function filtrerLesCours() {
    
    let prixMinimumChoisi = Number(curseurMin.value);
    let prixMaximumChoisi = Number(curseurMax.value);
    let technologieChoisie = selectTech.value;
    let texteRecherche = barreRecherche.value.toLowerCase();

    
    labelMin.innerText = prixMinimumChoisi.toLocaleString('fr-FR');
    labelMax.innerText = prixMaximumChoisi.toLocaleString('fr-FR');

    
    let coursQuiSontBons = [];

    
    for (let i = 0; i < data.courses.length; i++) {
        let leCoursActuel = data.courses[i];

        
        let prixOk = leCoursActuel.price >= prixMinimumChoisi && leCoursActuel.price <= prixMaximumChoisi;

       
        let techOk = (technologieChoisie === "") || (leCoursActuel.technologies === technologieChoisie);

        
        let titreOk = leCoursActuel.title.toLowerCase().includes(texteRecherche);

        
        if (prixOk && techOk && titreOk) {
            coursQuiSontBons.push(leCoursActuel);
        }
    }

    
    let ancienneListe = data.courses; 
    data.courses = coursQuiSontBons;
    
    afficherCours(); 
    
    data.courses = ancienneListe; 
}