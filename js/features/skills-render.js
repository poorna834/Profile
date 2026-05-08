import { skills } from "../data/skills.js";

export function renderSkills() {

  const container = document.getElementById("skills-container");

  if (!container) return;

  container.innerHTML = "";

  skills.forEach(skill => {

    const card = document.createElement("div");

    card.className = "card skill-card";

    card.innerHTML = `

      <div class="skill-top">

        <i class="${skill.icon} skill-icon"></i>

        <div class="skill-info">

          <h3>${skill.name}</h3>

        </div>

      </div>

    `;

    container.appendChild(card);

  });

}