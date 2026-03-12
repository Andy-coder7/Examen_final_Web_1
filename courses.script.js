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
