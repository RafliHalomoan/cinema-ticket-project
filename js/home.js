const container = document.getElementById("filmContainer");
const searchInput = document.getElementById("searchInput");
const historyBtn = document.getElementById("historyBtn");


function renderFilms(data) {
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  data.forEach(film => {
    const card = document.createElement("div");
    card.classList.add("film-card");

    // IMAGE
    const img = document.createElement("img");
    img.src = film.image;
    img.alt = film.title;

    // kalau gambar error 
    img.onerror = () => {
      img.src = "https://via.placeholder.com/150x200?text=No+Image";
    };

    // TITLE
    const title = document.createElement("div");
    title.classList.add("film-title");
    title.textContent = film.title;

    // BUTTON
    const btn = document.createElement("button");
    btn.classList.add("film-btn");
    btn.textContent = "Continue";

    btn.addEventListener("click", () => {
      selectFilm(film.id);
    });

    // GABUNG
    card.appendChild(img);
    card.appendChild(title);
    card.appendChild(btn);

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

// 🔹 LOAD AWAL (HANYA SEKALI)
renderFilms(films);
searchInput.addEventListe
