function confirmBooking() {
  let booking = JSON.parse(localStorage.getItem("booking"));

  // ambil history lama (kalau ada)
  let history = JSON.parse(localStorage.getItem("history")) || [];

  // tambah booking ke history
  history.push(booking);

  // simpan kembali
  localStorage.setItem("history", JSON.stringify(history));

  // hapus booking sekarang
  localStorage.removeItem("booking");

  alert("Booking Successful ");
  window.location.href = "history.html";
}