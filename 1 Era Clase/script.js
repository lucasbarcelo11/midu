//const botones = document.querySelectorAll(".button-apply-job");

//botones.forEach((boton) => {
// boton.addEventListener("click", () => {
//  boton.textContent = "¡Aplicado!";
// boton.classList.add("is-applied");
// boton.disabled = true;
// });
//});

const jobsListingSection = document.querySelector(".jobs-listings");
const jobs = document.querySelectorAll(".jobs-listings-card");

jobsListingSection.addEventListener("click", function (event) {
  const element = event.target;
  if (element.classList.contains("button-apply-job")) {
    element.textContent = "¡Aplicado!";
    element.classList.add("is-applied");
    element.disabled = true;
  }
});

const filter = document.querySelector("#filter-location");

filter.addEventListener("change", function () {
  const jobs = document.querySelectorAll(".jobs-listings-card");
  const selectedValue = filter.value;

  jobs.forEach((job) => {
    const modalidad = job.dataset.modalidad;

    if (selectedValue === "" || selectedValue === modalidad) {
      job.style.display = "flex";
    } else {
      job.style.display = "none";
    }
  });
});

const container = document.querySelector(".jobs-listings");
fetch("./data.json")
  .then((resp) => {
    return resp.json();
  })
  .then((jobs) => {
    jobs.forEach((job) => {
      const article = document.createElement("article");
      article.className = "jobs-listings-card";
      article.dataset.modalidad = job.data.modalidad;
      article.dataset.nivel = job.data.nivel;
      article.dataset.technology = job.data.technology;

      article.innerHTML = `<div>
          <h3>${job.titulo}</h3>
          <small>${job.empresa} | ${job.ubicacion}</small>
          <p>${job.descripcion}</p>
        </div>
        <button class="button-apply-job">Aplicar</button>`;

      container.appendChild(article);
    });
  });
