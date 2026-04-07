const historyList = document.getElementById("historyList");

let history = JSON.parse(localStorage.getItem("history")) || [];

function renderHistory() {
  historyList.innerHTML = "";

  if (history.length === 0) {
    historyList.innerHTML = "<p>No booking history</p>";
    return;
  }

  history.forEach((item, index) => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <img src="${item.image}" width="120">
      <h3>${item.title}</h3>
      <p>${item.day} - ${item.time}</p>
      <p>Seats: ${item.seats.join(", ")}</p>
      <p>Total: Rp ${item.total}</p>
      <p style="font-size:12px; color:#aaa;">${item.date}</p>
      

      <button onclick="deleteBooking(${index})">Delete</button>
      <button onclick="editBooking(${index})">Edit</button>
    `;

    historyList.appendChild(div);
  });
}

renderHistory();

function deleteBooking(index) {
  if (confirm("Delete this booking?")) {
    history.splice(index, 1);
    localStorage.setItem("history", JSON.stringify(history));
    renderHistory();
  }
}

function editBooking(index) {
  const selected = history[index];

  localStorage.setItem("booking", JSON.stringify(selected));
  localStorage.setItem("editIndex", index);

  window.location.href = "film.html";
}

function clearHistory() {
  if (confirm("Delete all?")) {
    localStorage.removeItem("history");
    history = [];
    renderHistory();
  }
}

function backHome() {
  window.location.href = "index.html";
}