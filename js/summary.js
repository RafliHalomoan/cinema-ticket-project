const booking = JSON.parse(localStorage.getItem("booking"));

if (!booking) {
  alert("No booking data found");
  window.location.href = "index.html";
}
if (!booking.date) {
  const now = new Date();
  booking.date = now.toLocaleString();
}
if (!booking.uid) {
  booking.uid = Math.floor(Math.random() * 100000);
}

booking.title = booking.title.toUpperCase();
localStorage.setItem("booking", JSON.stringify(booking));

const image = document.getElementById("image");
const title = document.getElementById("title");
const day = document.getElementById("day");
const time = document.getElementById("time");
const seats = document.getElementById("seats");
const tickets = document.getElementById("tickets");
const price = document.getElementById("price");
const total = document.getElementById("total");

image.src = booking.image;
title.innerText = booking.title;

day.innerText = "Day: " + booking.day.toUpperCase();
time.innerText = "Time: " + booking.time;

seats.innerText = "Seats: " + booking.seats.join(", ");

tickets.innerText = "Tickets: " + booking.tickets;
price.innerText = "Price: Rp " + booking.price;

total.innerText = "Total: Rp " + Math.floor(booking.total);

function confirmBooking() {
  let history = JSON.parse(localStorage.getItem("history")) || [];
  const editIndex = localStorage.getItem("editIndex");

  if (editIndex !== null) {
    history[editIndex] = booking;
    localStorage.removeItem("editIndex");
  } else {
    history.push(booking);
  }

  localStorage.setItem("history", JSON.stringify(history));
  localStorage.removeItem("booking");

  alert("Booking Saved 🎉");
  window.location.href = "index.html";
}

function back() {
  window.location.href = "seat.html";
}