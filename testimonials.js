function afficherTestimonials() {
    const studentsTestimonials = document.getElementById('students-container');
    const collaboratorTestimonials = document.getElementById('collaborator-container');
    const costumersTestmonials = document.getElementById('costumers-container');
    data.testimonials.forEach(testimonial => {
        if (testimonial.role == 'student') {
            const cardHTML = ` 
    <div class="flex items-center pt-20 gap-2">
      <span class="w-8 h-px bg-[#991b1b]"></span>
      <div class="text-xs font-bold tracking-widest uppercase">
        <p>STUDENTS</p>
      </div>
    </div>
    `;
    studentsTestimonials.insertAdjacentHTML('beforeend', cardHTML);
        }
       else if (testimonial.role == 'collaborator') {
            const cardHTML2 = `
    <div class="flex items-center pt-20 gap-2">
      <span class="w-8 h-px bg-[#991b1b]"></span>
      <div class="text-xs font-bold tracking-widest uppercase">
        <p>COLLABORATORS</p>
      </div>
    </div>`;
    collaboratorTestimonials.insertAdjacentHTML('beforeend', cardHTML2);
       }
       else {
           const cardHTML3 =`
    <div class="flex items-center pt-20 gap-2">
      <span class="w-8 h-px bg-[#991b1b]"></span>
      <div class="text-xs font-bold tracking-widest uppercase">
        <p>COSTUMERS</p>
      </div>
    </div>`;
    costumersTestmonials.insertAdjacentHTML('beforeend', cardHTML3);
       }
    });
}