const container = document.getElementById("filmContainer");
const searchInput = document.getElementById("searchInput");
const historyBtn = document.getElementById("historyBtn");


function renderFilms(data) {
  container.innerHTML = "";

  const fragment = document.createDocumentFragment();

  data.forEach(film => {
    const card = document.createElement("div");
    card.classList.add("film-card");

    const imgWrapper = document.createElement("div");
    imgWrapper.classList.add("img-wrapper");

    const img = document.createElement("img");
    img.src = film.image;

    imgWrapper.appendChild(img);

    const title = document.createElement("div");
    title.classList.add("film-title");
    title.textContent = film.title;

    const btn = document.createElement("button");
    btn.classList.add("film-btn");
    btn.textContent = "Continue";

    btn.addEventListener("click", () => {
    localStorage.setItem("booking", JSON.stringify({
      id: film.id
    }));
    window.location.href = "film.html";
    });

    card.appendChild(imgWrapper);
    card.appendChild(title);
    card.appendChild(btn);

    fragment.appendChild(card);
  });

  container.appendChild(fragment);
}

renderFilms(films);

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();

  const filtered = films.filter(film => 
    film.title.toLowerCase().includes(keyword)
  );

  renderFilms(filtered);
});

 historyBtn.addEventListener("click",function(){
  window.location.href = "history.html"
 });
