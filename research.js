function afficherPapers() {
  const container = document.getElementById('papers_container'); 
  if (!container) return;

  container.innerHTML = ""; 

  data.papers.forEach(paper => {
    const cardHTML = `
    <article class="bg-white rounded-xl border border-neutral-200 p-8">
        <div class="flex justify-between items-start mb-3">
          <div class="flex flex-wrap gap-2">
            ${paper.tags.map(tag => `<span class="px-2 py-1 bg-neutral-100 text-xs rounded">${tag}</span>`).join('')}
          </div>
          <span class="text-sm text-neutral-500">
            ${paper.publishedDate.toLocaleDateString('fr-FR', { year: 'numeric', month: 'long' })}
          </span>
        </div>

        <h3 class="text-2xl font-['Playfair_Display'] text-neutral-900 font-extrabold mb-2">
            ${paper.title}
        </h3>

        <p class="text-sm text-neutral-500 mb-4">
            ${paper.authors.join(', ')} — ${paper.journal}
        </p>

        <p class="text-[#78716c] leading-relaxed mb-6 font-['Poppins']">
            ${paper.abstract}
        </p>

        <a href="${paper.url}"
        target="_blank"
        class="flex items-center gap-2 text-[#b91c1c] underline font-medium text-sm">
          <svg xmlns="http://www.w3.org/2000/svg"
          class="w-4 h-4"
          fill="currentColor"
          viewBox="0 0 24 24">
          <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
          </svg>
          <span>Read pdf</span>
        </a>
      </article>
    `;
    container.innerHTML += cardHTML;
  });
}

document.addEventListener('DOMContentLoaded', () => {
    afficherPapers();
});