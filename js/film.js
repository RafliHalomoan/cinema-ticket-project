const booking = JSON.parse(localStorage.getItem("booking"));
const film = films.find(f => f.id == booking.id);

if (!film) {
  alert("Film not found");
  window.location.href = "index.html";
}

const gambar = document.getElementById("image");
gambar.src = film.image;

const rate = document.getElementById("rate");
rate.innerHTML = `<i class="fa-solid fa-star"></i> ${film.rating}`;

const harga = document.getElementById("harga");
harga.innerHTML = `Price : ${film.price} Rp`;

const judul = document.getElementById("judul");
judul.innerHTML = `<h1>${film.title}</h1><p>${film.description}</p>`;

let selectedDay = booking?.day || null;
let selectedTime = booking?.time || null;

const hari = document.getElementById("hari");
const waktu = document.getElementById("waktu");

film.days.forEach(day => {
  const btn = document.createElement("button");
  btn.innerText = day;

  if (day === selectedDay) {
    btn.classList.add("active");
  }

  btn.onclick = () => {
    selectedDay = day;
    document.querySelectorAll("#hari button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  };

  hari.appendChild(btn);
});

film.times.forEach(time => {
  const btn = document.createElement("button");
  btn.innerText = time;

  if (time === selectedTime) {
    btn.classList.add("active");
  }

  btn.onclick = () => {
    selectedTime = time;
    document.querySelectorAll("#waktu button")
      .forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  };

  waktu.appendChild(btn);
});

function yakin() {
  if (!selectedDay || !selectedTime) {
    alert("Pilih hari dan waktu dulu!");
    return;
  }

  const newBooking = {
    ...booking,
    id: film.id,
    title: film.title,
    day: selectedDay,
    time: selectedTime,
    image: film.image,
    price: film.price
  };

  localStorage.setItem("booking", JSON.stringify(newBooking));
  window.location.href = "seat.html";
}

function back() {
  window.location.href = "index.html";
}