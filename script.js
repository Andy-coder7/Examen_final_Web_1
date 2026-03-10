import data from './tokimahery.data.js';

function injectionDansDOM() {
  // About Me
  const aboutMe1 = document.getElementById('about-part-1');
  const aboutMe2 = document.getElementById('about-part-2');
  if (aboutMe1) aboutMe1.textContent = data.aboutMe_part1;
  if (aboutMe2) aboutMe2.textContent = data.aboutMe_part2;

  //Overview
  const overviewContainer = document.getElementById('overview');
  if (overviewContainer) {
    overviewContainer.innerHTML = data.overview.map(item => `
      <div class="overview-item">
        <div class="number">${item.number}</div>
        <div class="label">${item.label}</div>
      </div>
    `).join('');
  }

  //Experiences
  const experiencesContainer = document.getElementById('experiences');
  if (experiencesContainer) {
    experiencesContainer.innerHTML = data.experiences.map(exp => `
      <div class="experience-item">
        <div class="year">${exp.year}</div>
        <div class="role">${exp.role}</div>
        <div class="org">${exp.org}</div>
        <div class="desc">${exp.desc}</div>
      </div>
    `).join('');
  }

  //Cours
  const coursesContainer = document.getElementById('courses');
  if (coursesContainer) {
    coursesContainer.innerHTML = data.courses.map(course => `
      <div class="course-card">
        <img src="${course.thumbnail}" alt="${course.title}">
        <h3>${course.title}</h3>
        <p>${course.description}</p>
        <div class="course-meta">
          <span class="level">${course.level}</span>
          <span class="price">${course.price.toLocaleString()} Ar</span>
        </div>
      </div>
    `).join('');
  }

  //Testimonials
  const testimonialsContainer = document.getElementById('testimonials');
  if (testimonialsContainer) {
    testimonialsContainer.innerHTML = data.testimonials.map(testimonial => `
      <div class="testimonial-card">
        <div class="rating">${'⭐'.repeat(testimonial.rating)}</div>
        <p class="description">"${testimonial.description}"</p>
        <p class="author">— ${testimonial.author}</p>
      </div>
    `).join('');
  }

  //Blog posts
  const postsContainer = document.getElementById('posts');
  if (postsContainer) {
    postsContainer.innerHTML = data.posts.map(post => `
      <article class="blog-post">
        <img src="${post.thumbnail}" alt="${post.title}">
        <h2>${post.title}</h2>
        <p>${post.description}</p>
        <div class="post-meta">
          <span class="date">${post.creationDate.toLocaleDateString('fr-FR')}</span>
          <div class="tags">${post.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        </div>
      </article>
    `).join('');
  }

  //Papers
  const papersContainer = document.getElementById('papers');
  if (papersContainer) {
    papersContainer.innerHTML = data.papers.map(paper => `
      <div class="paper-item">
        <h3>${paper.title}</h3>
        <p class="abstract">${paper.abstract}</p>
        <p class="journal"><strong>${paper.journal}</strong></p>
        <p class="authors">Auteurs: ${paper.authors.join(', ')}</p>
        <a href="${paper.pdfUrl}" target="_blank" class="pdf-link">Lire le PDF</a>
      </div>
    `).join('');
  }

  console.log('✅ Données injectées avec succès!');
}

// Injection des données quand le DOM est chargé
document.addEventListener('DOMContentLoaded', injectionDansDOM);