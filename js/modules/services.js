const servicesGrid = document.getElementById("servicesGrid");

if (servicesGrid) {
  const iconMap = {
    website: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2"></rect>
        <line x1="3" y1="10" x2="21" y2="10"></line>
        <circle cx="7" cy="7.5" r="1"></circle>
      </svg>
    `,
    system: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="4" y="4" width="6" height="6" rx="1"></rect>
        <rect x="14" y="4" width="6" height="6" rx="1"></rect>
        <rect x="4" y="14" width="6" height="6" rx="1"></rect>
        <rect x="14" y="14" width="6" height="6" rx="1"></rect>
      </svg>
    `,
    consult: `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8"></circle>
        <line x1="12" y1="8" x2="12" y2="12"></line>
        <circle cx="12" cy="15.5" r="0.8"></circle>
      </svg>
    `
  };

  fetch("../data/services.json")
    .then(res => res.json())
    .then(services => {
      servicesGrid.innerHTML = services.map(service => `
        <article class="service-card">
          <span class="service-kicker">${service.kicker || "Service"}</span>
          <div class="service-head">
            <span class="service-icon" aria-hidden="true">${iconMap[service.icon] || iconMap.website}</span>
            <h3>${service.title}</h3>
          </div>
          <p>${service.summary}</p>
          <ul class="service-list">
            ${service.points.map(point => `<li>${point}</li>`).join("")}
          </ul>
          <div class="service-meta">
            <span>${service.timeline || ""}</span>
            <span>${service.outcome || ""}</span>
          </div>
          <a href="contact.html" class="service-link">Discuss this service -&gt;</a>
        </article>
      `).join("");
    })
    .catch(err => console.error("Failed to load services:", err));
}
