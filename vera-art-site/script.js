const $ = (selector) => document.querySelector(selector);

document.title = `Vera — ${siteData.year}`;
$("#headerYear").textContent = siteData.year;
$("#navYear").textContent = siteData.year;
$("#footerYear").textContent = siteData.year;

const email = siteData.email;
$("#emailLink").href = `mailto:${email}`;
$("#emailLink").textContent = "Email";

$("#worksTitle").textContent = siteData.works.title;
$("#worksIntro").textContent = siteData.works.intro;

const worksGrid = $("#worksGrid");
siteData.works.items.forEach((work) => {
  const article = document.createElement("article");
  article.className = "work-card";
  article.innerHTML = `
    <a href="#collection" aria-label="${work.title}">
      <figure><img src="${work.image}" alt="${work.title}"></figure>
      <div class="work-meta">
        <span>${work.title}</span>
        <span class="year">${work.year}</span>
      </div>
    </a>
  `;
  worksGrid.appendChild(article);
});

$("#albumTitle").textContent = siteData.album.title;
$("#albumIntro").textContent = siteData.album.intro;
$("#albumHeadline").textContent = siteData.album.headline;
$("#albumText").textContent = siteData.album.text;
$("#albumImage").src = siteData.album.image;
$("#albumImage").alt = siteData.album.headline;

$("#practiceTitle").innerHTML = siteData.practice.title.replace("\n", "<br>");
$("#heroImage").src = siteData.practice.image;
$("#heroImage").alt = siteData.practice.title.replace("\n", " ");

const collectionGrid = $("#collectionGrid");
siteData.collection.forEach((item) => {
  const card = document.createElement("article");
  card.className = "collection-card";
  card.innerHTML = `
    <div>
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </div>
    <img src="${item.image}" alt="${item.title}">
  `;
  collectionGrid.appendChild(card);
});

$("#aboutTitle").textContent = siteData.about.title;
$("#aboutText").textContent = siteData.about.text;

// Simple, unobtrusive active-section highlighting.
const navLinks = [...document.querySelectorAll(".main-nav a")];
const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    navLinks.forEach((link) => link.style.opacity = link.getAttribute("href") === `#${entry.target.id}` ? "1" : "");
  });
}, { rootMargin: "-35% 0px -55% 0px", threshold: 0 });
sections.forEach((section) => observer.observe(section));
