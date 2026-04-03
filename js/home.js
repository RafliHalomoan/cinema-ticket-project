const container = document.getElementById("filmContainer");
const searchInput = document.getElementById("searchInput");
const historyBtn = document.getElementById("historyBtn");


function renderFilms(data) {
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  data.forEach(film => {
    const card = document.createElement("div");
    card.classList.add("film-card");

    const img = document.createElement("img");
    img.src = film.image;
    img.alt = film.title;

    const title = document.createElement("div");
    title.classList.add("film-title");
    title.textContent = film.title;

    const btn = document.createElement("button");
    btn.classList.add("film-btn");
    btn.textContent = "Continue";

    btn.addEventListener("click", () => {
    localStorage.setItem("selectedFilm", film.id);
    window.location.href = "film.html";
    });

    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(btn);

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

renderFilms(films);
searchInput.addEventListener("input", () => {
});

 historyBtn.addEventListener("click",function(){
  window.location.href = "history.html"
 });
