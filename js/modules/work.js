const workList = document.getElementById("workList");

if (workList) {
  fetch("../data/projects.json")
    .then(res => res.json())
    .then(projects => {
      workList.innerHTML = projects.map(project => `
        <article class="work-item">
          <span class="work-tag">${project.tag}</span>
          <h2>${project.title}</h2>
          <p class="work-description">${project.description}</p>

          <ul class="work-highlights">
            ${project.highlights.map(item => `<li>${item}</li>`).join("")}
          </ul>
        </article>
      `).join("");
    })
    .catch(err => console.error("Failed to load work:", err));
}
