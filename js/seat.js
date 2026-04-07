const kursi = document.getElementById("isikursi");

const booking = JSON.parse(localStorage.getItem("booking"));

if (!booking) {
  alert("No booking found");
  window.location.href = "index.html";
}

let selectedSeat = booking.seats || [];

const rows = ["A","B","C","D"];
const cols = 5;

rows.forEach(row => {
  const baris = document.createElement("div");
  baris.classList.add("row");

  for (let i = 1; i <= cols; i++) {
    const seat = row + i;
    const btn = document.createElement("button");
    btn.innerText = seat;

    if (selectedSeat.includes(seat)) {
      btn.classList.add("selected");
    }

    btn.onclick = () => {
      if (selectedSeat.includes(seat)) {
        selectedSeat = selectedSeat.filter(s => s !== seat);
        btn.classList.remove("selected");
      } else {
        selectedSeat.push(seat);
        btn.classList.add("selected");
      }
    };

    baris.appendChild(btn);
  }

  kursi.appendChild(baris);
});

function booked() {
  const updatedBooking = {
    ...booking,
    seats: selectedSeat,
    tickets: selectedSeat.length,
    total: booking.price * selectedSeat.length
  };

  localStorage.setItem("booking", JSON.stringify(updatedBooking));
  window.location.href = "summary.html";
}

function back() {
  window.location.href = "film.html";
}