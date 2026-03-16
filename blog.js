 const data = {

  // -------------------------
  // HOME
  // -------------------------

  aboutMe_part1: `I am a PhD researcher studying complex systems through agent-based modeling and simulation. However, teaching, is my Ikigai, it is driven by a deep commitment to helping students grow beyond what they thought possible.`,

  aboutMe_part2: `It is not an accessory to my work — it is its foundation and its energy. Research sharpens my thinking; the classroom gives it meaning. And as a developer, I turn ideas into clean, reliable software built to last.`,

  overview: [
    { number: new Date().getFullYear() - 2017, label: 'Years experience' },
    { number: '800+', label: 'Students taught' },
    { number: '20+', label: 'Topics' }
  ],

  experiences: [
    { year: '2026 – Present', role: 'Consultant', org: 'Independent', desc: 'Advising, teaching, on a much more singular level for all societies, and developing scalable solutions' },
    { year: '2021 – 2026', role: 'Study Coordinator | Back-end developer', org: "HEI Madagascar (Haute École d'Informatique), Antananarivo", desc: 'Responsible of studies, permanent teacher for 5 different topics, as well as some back-end development on the school management app' },
    { year: '2024', role: 'PhD in Computer Science', org: 'Université de Fianarantsoa', desc: 'A self-founded PhD on modeling complex systems, between the university of Fianarantsoa, and CIRAD, Montpellier, titled: Accounting for norms in agent-based modeling' },
    { year: '2017 – 2020', role: 'Teacher', org: "ESMIA (École Supérieure de Management et d'Informatique appliquée), Antananarivo", desc: 'Taught over 14 different topics from first years to Master degree. Mentoring students from small projects to technical ones' }
  ],

  homeCourses: [
    { tag: 'Development', title: 'Web Development Fundamentals', mode: 'Online', duration: '8 weeks' },
    { tag: 'Translation', title: 'Technical Translation Masterclass', mode: 'Hybrid', duration: '6 weeks' },
    { tag: 'Research', title: 'Academic Writing & Methodology', mode: 'Offline', duration: '10 weeks' },
  ],

  // -------------------------
  // COURSES
  // -------------------------

  courses: [
    { id: 1, title: 'Javascript for beginners', description: 'Javascript made easy as your first language. This video walks you through the basic mechanism of algorithms, loops, conditions, functions, JS modules, unit tests, and modern syntax perfect for starters', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 120000, level: 'beginner', language: 'en', technologies: ['javascript'] },
    { id: 2, title: 'Java for beginners', description: 'A simple course for true beginners in Java. Learn OOP fundamentals: classes, objects, encapsulation, inheritance, polymorphism, abstraction to understand the basics of Java.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 220000, level: 'beginner', language: 'en', technologies: ['java'] },
    { id: 3, title: 'Relational Databases for beginners', description: 'Understand how relational databases really work. This course introduces tables, primary keys, foreign keys, constraints, normalization, ER diagrams, and SQL basics.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 180000, level: 'beginner', language: 'fr', technologies: ['sql'] },
    { id: 4, title: 'Git & Version Control Essentials', description: 'Master Git from scratch. Learn repositories, commits, branches, merging, rebasing, resolving conflicts, and collaborating with remote repositories like GitHub.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 95000, level: 'beginner', language: 'en', technologies: [] },
    { id: 5, title: 'Operating Systems Fundamentals', description: 'Discover how operating systems manage processes, memory, files, threads, and scheduling. Understand the difference between user space and kernel space, concurrency basics.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 200000, level: 'beginner', language: 'fr', technologies: [] },
    { id: 6, title: 'Technical English for Developers', description: 'Improve your English for the tech world. Learn essential vocabulary for programming, documentation, meetings, presentations, and job interviews.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 85000, level: 'beginner', language: 'mg', technologies: [] },
    { id: 7, title: 'Professional French Communication', description: 'Strengthen your French for academic and professional environments. Focus on formal writing, presentations, technical explanations, and clear structured arguments.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 80000, level: 'beginner', language: 'mg', technologies: [] },
    { id: 8, title: 'SEO Fundamentals for Web Developers', description: 'Learn how search engines work and how to optimize websites for visibility. Cover keywords, technical SEO, performance optimization, metadata, and structured data.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 150000, level: 'intermediate', language: 'en', technologies: ['javascript'] },
    { id: 9, title: 'Spring Boot for Backend Development', description: 'Build modern REST APIs with Spring Boot. Learn dependency injection, controllers, services, JPA, security basics, validation, and scalable backend architecture.', creationDate: new Date('2026-01-01'), thumbnail: 'https://picsum.photos/400', price: 250000, level: 'advanced', language: 'fr', technologies: ['java'] },
  ],

  // -------------------------
  // TESTIMONIALS
  // -------------------------

  testimonials: [
    { id: 1, role: 'student', rating: 5, description: 'A precious aid, a light shining upon every step of my journey', author: 'Soa Mariaka, Promotion Mpamakilay, HEI (2021-2024)', thumbnail: 'https://picsum.photos/200' },
    { id: 2, role: 'student', rating: 5, description: 'An inspiring mentor who transforms complex concepts into clear and structured knowledge. The discipline and rigor I learned here shaped the way I approach every technical challenge today.', author: 'Faniry Keziah, Promotion Mpamakilay, HEI (2022-2025)', thumbnail: 'https://picsum.photos/200' },
    { id: 3, role: 'student', rating: 5, description: 'More than courses, it was a mindset shift. Learning how to think structurally about databases and algorithms changed my confidence as a developer.', author: 'Ando Ramanantsoa, Promotion Avotra, HEI (2021-2024)', thumbnail: 'https://picsum.photos/200' },
    { id: 4, role: 'student', rating: 4, description: 'The emphasis on fundamentals — Git, SQL, system design — prepared me for real-world projects. Every assignment felt practical and meaningful.', author: 'Dinasoa Ratsimba, Promotion Avotra, HEI (2022-2025)', thumbnail: 'https://picsum.photos/200' },
    { id: 5, role: 'student', rating: 5, description: 'Demanding but fair. The standards were high, yet the support was constant. I learned discipline, autonomy, and how to truly understand what I build.', author: 'Judicael Randrianjato, Promotion Mpamakilay, HEI (2021-2024)', thumbnail: 'https://picsum.photos/200' },
    { id: 6, role: 'collaborator', rating: 5, description: 'From algorithm storytelling to backend architecture, every lesson connected theory with practice. It pushed me to go beyond just "making it work."', author: 'Mayah Andriatsitohaina, Promotion Avotra, HEI (2023-2026)', thumbnail: 'https://picsum.photos/200' },
    { id: 7, role: 'collaborator', rating: 4, description: 'The way operating systems and databases were taught made abstract concepts concrete. I now approach technical problems with clarity and structure.', author: 'Axel, Promotion Mpamakilay, HEI (2022-2025)', thumbnail: 'https://picsum.photos/200' },
    { id: 8, role: 'collaborator', rating: 5, description: 'Beyond coding, I gained professional communication skills and technical English confidence. That made a real difference during internships.', author: 'Tolojanahary Randrambelo, Promotion Avotra, HEI (2023-2026)', thumbnail: 'https://picsum.photos/200' },
    { id: 9, role: 'collaborator', rating: 5, description: 'The rigor in project reviews and exam preparation pushed me to exceed my limits. It was challenging, but it prepared me for industry expectations.', author: 'Fiantso Harena, Promotion Mpamakilay, HEI (2021-2024)', thumbnail: 'https://picsum.photos/200' },
    { id: 10, role: 'collaborator', rating: 4, description: 'A rare combination of technical depth and pedagogical clarity. Working alongside Tokimahery elevated the quality of everything we built together.', author: 'Ravo Rakotondrabe', thumbnail: 'https://picsum.photos/200' },
    { id: 11, role: 'customer', rating: 5, description: 'The translation work delivered was precise, fast, and culturally nuanced. Exactly what our project needed.', author: 'Hery Andriantsoa', thumbnail: 'https://picsum.photos/200' },
    { id: 12, role: 'customer', rating: 5, description: 'We hired Tokimahery to consult on our backend architecture. The recommendations were pragmatic and immediately actionable.', author: 'Lalaina Rasolofo', thumbnail: 'https://picsum.photos/200' },
    { id: 13, role: 'customer', rating: 4, description: 'Professional, responsive, and thorough. The deliverables exceeded our expectations in both quality and timeliness.', author: 'Miora Randriamihaja', thumbnail: 'https://picsum.photos/200' },
    { id: 14, role: 'customer', rating: 5, description: 'Tokimahery helped us untangle a legacy codebase that had been holding us back for years. Clear roadmap, clean execution.', author: 'Njaka Rakotomalala', thumbnail: 'https://picsum.photos/200' },
    { id: 15, role: 'customer', rating: 5, description: 'From scoping to delivery, the whole process was smooth and transparent. I would not hesitate to work together again.', author: 'Sitraka Andriamanantena', thumbnail: 'https://picsum.photos/200' },
  ],

  posts: [
    { id: 1, title: 'Join me at HEI', description: "Since 2021, I have been a part of HEI - Haute École d'Informatique, from the ground up, and until its evolution, struggles, and first students, I have been there, and it was a lot of fun.", creationDate: new Date('2026-03-08'), thumbnail: 'https://picsum.photos/400', tags: ['education', 'HEI'] },
    { id: 2, title: 'Teaching Databases the Right Way', description: "Too many students jump directly into ORMs without understanding relational thinking. In my courses, we start with normalization, constraints, and real SQL joins before touching any abstraction layer. Strong foundations create confident engineers.", creationDate: new Date('2026-01-12'), thumbnail: 'https://picsum.photos/400', tags: ['databases', 'SQL', 'education'] },
    { id: 3, title: 'Why Git Is a Survival Skill', description: "Version control is not optional. I teach Git before advanced frameworks because collaboration, clean commit history, and conflict resolution are what make or break real-world software projects.", creationDate: new Date('2026-02-03'), thumbnail: 'https://picsum.photos/400', tags: ['git', 'software-engineering', 'education'] },
    { id: 4, title: 'Building a Secure Exam Platform', description: "Designing a live exam platform with strict tab-focus control and paste restrictions pushed me to combine pedagogy and engineering. Fair assessment requires both technical precision and educational clarity.", creationDate: new Date('2026-03-19'), thumbnail: 'https://picsum.photos/400', tags: ['svelte', 'typescript', 'assessment'] },
    { id: 5, title: 'Operating Systems: From Theory to Practice', description: "Processes, threads, memory management — these concepts only make sense when students experiment with them. I prioritize simulations and real concurrency problems to make operating systems tangible.", creationDate: new Date('2026-04-08'), thumbnail: 'https://picsum.photos/400', tags: ['operating-systems', 'computer-science', 'education'] },
    { id: 6, title: 'Spring Boot Beyond CRUD', description: "Teaching Spring Boot is not about generating controllers. It is about architecture: layered design, validation, security, JPA relationships, and writing backend systems that remain maintainable years later.", creationDate: new Date('2026-05-27'), thumbnail: 'https://picsum.photos/400', tags: ['spring-boot', 'java', 'backend'] },
    { id: 7, title: 'Technical English Is a Career Lever', description: "Reading documentation, writing clear README files, and communicating ideas internationally are critical skills for developers. Integrating technical English into IT training unlocks global opportunities.", creationDate: new Date('2026-07-14'), thumbnail: 'https://picsum.photos/400', tags: ['english', 'career', 'education'] },
    { id: 8, title: 'SEO for Engineers', description: "SEO is not just marketing. It is structured HTML, accessibility, performance optimization, and semantic clarity. Developers who understand search engines build better web applications.", creationDate: new Date('2026-09-02'), thumbnail: 'https://picsum.photos/400', tags: ['seo', 'web-development', 'performance'] },
    { id: 9, title: 'Narrative-Driven Programming Exercises', description: "I design algorithm problems with storytelling elements while keeping strict technical constraints. Students engage more deeply, and still practice loops, accumulators, edge cases, and structured thinking.", creationDate: new Date('2026-11-18'), thumbnail: 'https://picsum.photos/400', tags: ['algorithms', 'pedagogy', 'education'] },
  ],

  youtubeVideos: [
    { id: 'cdWNlGD_FzQ', title: 'Counter App with Pharo' },
    { id: 'cfS4XP4bBEk', title: 'Build a DSL with Pharo' },
    { id: 'Ut2aeuFc2KY', title: 'My keyboard addiction' }
  ],

  archives: [
    { label: 'January 2026', slug: '2026-01', count: 2 },
    { label: 'February 2026', slug: '2026-02', count: 1 },
  ],

  papers: [
    { id: 1, title: 'Automatic Generation of Thematic Maps Using Multi-Agent Systems', abstract: 'This paper presents an approach to automating the generation of thematic maps through multi-agent systems. Agents collaborate to process, interpret, and spatially organize geographic data, reducing the manual effort typically required in cartographic workflows. The system is demonstrated and evaluated within the GAMA simulation platform.', publishedDate: new Date('2024-11-01'), journal: 'GAMA Days 2024', authors: ['I. H. Maminiaina', 'H. Rakotonirainy', 'J. Dinaharison', 'T. Ramarozaka', 'A. Razafinimaro'], tags: ['multi-agent systems', 'cartography', 'GAMA'], url: 'https://hal.science/hal-04890215v1/file/Gama_days_2024_Maminiaina.pdf', pdfUrl: 'https://hal.science/hal-04890215v1/file/Gama_days_2024_Maminiaina.pdf' },
    { id: 2, title: 'Prise en compte des normes dans les comportements des agents', abstract: "Cette thèse de doctorat explore comment les normes sociales et organisationnelles peuvent être intégrées dans les comportements des agents autonomes. Elle propose un cadre formel permettant aux agents de percevoir, interpréter et respecter des normes dans des environnements multi-agents complexes, avec des applications en simulation sociale et en systèmes distribués.", publishedDate: new Date('2024-01-01'), journal: 'Université de Fianarantsoa — Thèse de doctorat en Informatique', authors: ['T. Ramarozaka'], tags: ['multi-agent systems', 'norms', 'PhD thesis'], url: 'https://agritrop.cirad.fr/610658/1/THESE%20Tokimahery%20FINALE.pdf', pdfUrl: 'https://agritrop.cirad.fr/610658/1/THESE%20Tokimahery%20FINALE.pdf' },
    { id: 3, title: 'Extending Partial-Order Planning to Account for Norms in Agent Behavior', abstract: 'This paper proposes an extension of partial-order planning to integrate normative constraints into agent behavior. By incorporating norms directly into the planning process, agents can reason about socially acceptable action sequences while still achieving their goals. The approach is evaluated in the context of multi-agent simulations and discussed within the European Social Simulation community.', publishedDate: new Date('2022-09-01'), journal: 'Conference of the European Social Simulation Association, Springer Nature Switzerland', authors: ['T. Ramarozaka', 'J. P. Müller', 'H. L. Rakotonirainy'], tags: ['multi-agent systems', 'norms', 'planning'], url: 'https://edepot.wur.nl/641647#page=144', pdfUrl: 'https://edepot.wur.nl/641647#page=144' },
  ],

};

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};

const setSrc = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.src = value;
};

const posts = data.posts;

setText("post_title", posts[0].title);
setText("post_date", posts[0].creationDate);
setText("post_description", posts[0].description);
setSrc("thumbnail", posts[0].thumbnail);
setText("tags1", posts[0].tags[0]);
setText("tags2", posts[0].tags[1]);

setText("post_title2", posts[1].title);
setText("post_date2", posts[1].creationDate);
setText("post_description2", posts[1].description);
setSrc("thumbnail2", posts[1].thumbnail);
setText("tags3", posts[1].tags[0]);
setText("tags4", posts[1].tags[1]);
setText("tags5", posts[1].tags[2]);

setText("post_title3", posts[2].title);
setText("post_date3", posts[2].creationDate);
setText("post_description3", posts[2].description);
setSrc("thumbnail3", posts[2].thumbnail);
setText("tags6", posts[2].tags[0]);
setText("tags7", posts[2].tags[1]);
setText("tags8", posts[2].tags[2]);

setText("post_title4", posts[3].title);
setText("post_date4", posts[3].creationDate);
setText("post_description4", posts[3].description);
setSrc("thumbnail4", posts[3].thumbnail);
setText("tags9", posts[3].tags[0]);
setText("tags10", posts[3].tags[1]);
setText("tags11", posts[3].tags[2]);

setText("post_title5", posts[4].title);
setText("post_date5", posts[4].creationDate);
setText("post_description5", posts[4].description);
setSrc("thumbnail5", posts[4].thumbnail);
setText("tags12", posts[4].tags[0]);
setText("tags13", posts[4].tags[1]);
setText("tags14", posts[4].tags[2]);

setText("post_title6", posts[5].title);
setText("post_date6", posts[5].creationDate);
setText("post_description6", posts[5].description);
setSrc("thumbnail6", posts[5].thumbnail);
setText("tags15", posts[5].tags[0]);
setText("tags16", posts[5].tags[1]);
setText("tags17", posts[5].tags[2]);

setText("post_title7", posts[6].title);
setText("post_date7", posts[6].creationDate);
setText("post_description7", posts[6].description);
setSrc("thumbnail7", posts[6].thumbnail);
setText("tags18", posts[6].tags[0]);
setText("tags19", posts[6].tags[1]);
setText("tags20", posts[6].tags[2]);

setText("post_title8", posts[7].title);
setText("post_date8", posts[7].creationDate);
setText("post_description8", posts[7].description);
setSrc("thumbnail8", posts[7].thumbnail);
setText("tags21", posts[7].tags[0]);
setText("tags22", posts[7].tags[1]);
setText("tags23", posts[7].tags[2]);

setText("post_title9", posts[8].title);
setText("post_date9", posts[8].creationDate);
setText("post_description9", posts[8].description);
setSrc("thumbnail9", posts[8].thumbnail);
setText("tags24", posts[8].tags[0]);
setText("tags25", posts[8].tags[1]);
setText("tags26", posts[8].tags[2]);

const archives = data.archives;

setText("archives_container", archives[0].label);
setText("archives_container2", archives[0].count);

setText("archives_container3", archives[1].label);
setText("archives_container4", archives[1].count);
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const prev_page = document.getElementById("prev_page");
const next_page = document.getElementById("next_page");
const bouton1 = document.getElementById("1");
const bouton2 = document.getElementById("2");

div2.style.display='none';
bouton1.style.backgroundColor='#b91c1c';
bouton1.style.color='white';
prev_page.disabled=true;

bouton2.addEventListener("click",function(){
  div1.style.display="none";
  div2.style.display="block";
  div2.style.gap="40px";
  div2.style.display="flex";
  bouton2.style.backgroundColor="#b91c1c";
  bouton2.style.color="white";
  prev_page.disabled=false;
  next_page.disabled=true;
  bouton1.style.backgroundColor="white";
  bouton1.style.color="black";
});
next_page.addEventListener("click",function(){
  div1.style.display="none";
  div2.style.display="block";
  div2.style.gap="40px";
  div2.style.display="flex";
  bouton2.style.backgroundColor="#b91c1c";
  bouton2.style.color="white";
  prev_page.disabled=false;
  next_page.disabled=true;
  bouton1.style.backgroundColor="white";
  bouton1.style.color="black";
});
bouton1.addEventListener("click",function(){
  div1.style.display="block";
  div1.style.gap="40px";
  div1.style.display="flex";
  div2.style.display="none";
  bouton2.style.backgroundColor="white";
  bouton2.style.color="black";
  prev_page.disabled=true;
  next_page.disabled=false;
  bouton1.style.backgroundColor="#b91c1c";
  bouton1.style.color="white";
});
prev_page.addEventListener("click",function(){
  div1.style.display="block";
  div1.style.gap="40px";
  div1.style.display="flex";
  div2.style.display="none";
  bouton2.style.backgroundColor="white";
  bouton2.style.color="black";
  prev_page.disabled=true;
  next_page.disabled=false;
  bouton1.style.backgroundColor="#b91c1c";
  bouton1.style.color="white";
});

const youtube_container = document.getElementById("youtube_container");
data.youtubeVideos.forEach(video => {
  const videoHTML = `
    <div>
      <iframe 
        class="w-full h-40 rounded-lg"
        src="https://www.youtube.com/embed/${video.id}"
        title="${video.title}"
        frameborder="0"
        allowfullscreen>
      </iframe>
      <p class="text-sm mt-2 font-['Poppins'] text-[#57534e]">${video.title}</p>
    </div>
  `;
  youtube_container.innerHTML += videoHTML;
});