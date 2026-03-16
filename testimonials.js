function afficherTestimonials() {
    const studentsTestimonials = document.getElementById('students-container');
    const collaboratorTestimonials = document.getElementById('collaborator-container');
    const costumersTestmonials = document.getElementById('costumers-container');
   const getStarsHtml = (rating) => {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += `<i class="fa-solid fa-star text-red-600 text-xs"></i>`;
    } else {
      stars += `<i class="fa-solid fa-star text-gray-200 text-xs"></i>`;
    }
  }
  return `<div class="flex gap-1 mb-4">${stars}</div>`;
};
    data.testimonials.forEach(testimonial => {
        if (testimonial.role == 'student') {
            const cardHTML = ` 
       <article class="bg-white p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col h-full">
       <div class="flex items-center gap-3">
        <img src="${testimonial.thumbnail}" 
             alt="${testimonial.author}" 
             class="w-10 h-10 rounded-full bg-gray-200 grayscale">
        <div>
            <h1 class="font-bold text-sm text-gray-900 leading-none">${testimonial.author}</h1>
            <p class="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mt-1">
                ${testimonial.role}
            </p>
        </div>
    </div>
    <span class="w-8 h-px bg-[#991b1b]"></span>
    <p class="text-gray-600 text-sm leading-relaxed mb-8 grow">
    "${testimonial.description}"
    </p>
    
    
    ${getStarsHtml(testimonial.rating)}
</article>    
 `;
            studentsTestimonials.insertAdjacentHTML('beforeend', cardHTML);
        }
        else if (testimonial.role == 'collaborator') {
            const cardHTML2 = `
            <article class="bg-white p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col h-full">
    
    <p class="text-gray-600 text-sm leading-relaxed mb-8 grow">
        "${testimonial.description}"
    </p>

    <div class="flex items-center gap-3">
        <img src="${testimonial.thumbnail}" 
             alt="${testimonial.author}" 
             class="w-10 h-10 rounded-full bg-gray-200 grayscale">
        <div>
            <h1 class="font-bold text-sm text-gray-900 leading-none">${testimonial.author}</h1>
            <p class="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mt-1">
                ${testimonial.role}
            </p>
        </div>
    </div>
</article>
`;
            collaboratorTestimonials.insertAdjacentHTML('beforeend', cardHTML2);
        }
        else {
            const cardHTML3 = 
           `<article class="bg-white p-8 rounded-xl shadow-sm border border-gray-50 flex flex-col h-full">
    ${getStarsHtml(testimonial.rating)}

    <p class="text-gray-600 text-sm leading-relaxed mb-8 grow">
        "${testimonial.description}"
    </p>

    <div class="flex items-center gap-3">
        <img src="${testimonial.thumbnail}" 
             alt="${testimonial.author}" 
             class="w-10 h-10 rounded-full bg-gray-200 grayscale">
        <div>
            <h1 class="font-bold text-sm text-gray-900 leading-none">${testimonial.author}</h1>
            <p class="text-[10px] font-bold tracking-[0.1em] uppercase text-gray-400 mt-1">
                ${testimonial.role}
            </p>
        </div>
    </div>
</article>`
;
            costumersTestmonials.insertAdjacentHTML('beforeend', cardHTML3);
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
    afficherTestimonials();
});