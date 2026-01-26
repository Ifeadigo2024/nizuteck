const servicesGrid = document.getElementById("servicesGrid");

if (servicesGrid) {
  fetch("../data/services.json")
    .then(res => res.json())
    .then(services => {
      servicesGrid.innerHTML = services.map(service => `
        <article class="service-card">
          <h3>${service.title}</h3>
          <p>${service.summary}</p>
          <ul>
            ${service.points.map(point => `<li>${point}</li>`).join("")}
          </ul>
        </article>
      `).join("");
    })
    .catch(err => console.error("Failed to load services:", err));
}
