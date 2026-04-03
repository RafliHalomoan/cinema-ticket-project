const booking = JSON.parse(localStorage.getItem("booking"));

if (!booking) {
  alert("No booking data found");
  window.location.href = "index.html";
}

// ambil element
const image = document.getElementById("image");
const title = document.getElementById("title");
const day = document.getElementById("day");
const time = document.getElementById("time");
const seats = document.getElementById("seats");
const tickets = document.getElementById("tickets");
const price = document.getElementById("price");
const total = document.getElementById("total");

// isi data
image.src = booking.image;
title.innerText = booking.title;
day.innerText = "Day: " + booking.day;
time.innerText = "Time: " + booking.time;
seats.innerText = "Seats: " + booking.seats.join(", ");
tickets.innerText = "Tickets: " + booking.tickets;
price.innerText = "Price per ticket: Rp " + booking.price;
total.innerText = "Total: Rp " + booking.total;

// tombol confirm
function confirmBooking() {
  alert("Booking Successful 🎉");
  localStorage.removeItem("booking");
  window.location.href = "index.html";
}

// tombol back
function back() {
  window.location.href = "seat.html";
}
