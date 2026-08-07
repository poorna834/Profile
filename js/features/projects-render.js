import { projects } from "../data/projects.js";


export function renderProjects() {

  const container = document.getElementById("projects-container");


  if (!container) return;


  container.innerHTML = "";


  projects.forEach((project, index) => {


    const card = document.createElement("div");


    card.className = "card project-card";


    card.innerHTML = `

      <h3>${project.title}</h3>


      <p>${project.description}</p>



      ${
        project.techStack
        ?
        `
        <div class="tech-stack">

          ${project.techStack
            .map(
              tech => 
              `<span class="tech">${tech}</span>`
            )
            .join("")
          }

        </div>
        `
        :
        ""
      }



      ${
        project.github || project.demo
        ?
        `
        <div class="project-actions">


          ${
            project.github
            ?
            `
            <a
              href="${project.github}"
              target="_blank"
              class="btn">

              GitHub

            </a>
            `
            :
            ""
          }



          ${
            project.demo
            ?
            `
            <a
              href="${project.demo}"
              target="_blank"
              class="btn">

              Live Demo

            </a>
            `
            :
            ""
          }


        </div>
        `
        :
        ""
      }



      <div class="project-actions">

        <button 
          class="btn favourite-btn"
          data-id="${index}">

          ☆ Favourite

        </button>

      </div>


    `;


    container.appendChild(card);


  });


  initializeFavouriteProjects();

}




/* =========================
   FAVOURITES USING LOCAL STORAGE
========================= */


function initializeFavouriteProjects() {


  const buttons =
    document.querySelectorAll(".favourite-btn");



  let favourites =
    JSON.parse(
      localStorage.getItem("favourites")
    ) || [];



  buttons.forEach(button => {


    const id = button.dataset.id;



    if (favourites.includes(id)) {

      button.textContent = "★ Saved";

      button.classList.add("saved");

    }



    button.addEventListener("click", () => {


      if (favourites.includes(id)) {


        favourites =
          favourites.filter(
            item => item !== id
          );


        button.textContent =
          "☆ Favourite";


        button.classList.remove("saved");


      } 
      else {


        favourites.push(id);


        button.textContent =
          "★ Saved";


        button.classList.add("saved");


      }



      localStorage.setItem(
        "favourites",
        JSON.stringify(favourites)
      );


    });


  });


}