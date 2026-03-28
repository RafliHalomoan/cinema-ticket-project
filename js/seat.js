const kursi = document.getElementById("isikursi")
let selectedSeat = []

const rows = ["A","B","C","D",]
const cols = 5

rows.forEach(row => {
    const baris = document.createElement("div");
    baris.classList.add("row");

    for (let i = 1; i <= cols; i++) {
        const seat = row + i;
        const btn = document.createElement("button");
        btn.innerText = seat;

        btn.onclick = () => {
            if (selectedSeat.includes(seat)) {
                selectedSeat = selectedSeat.filter(s => s !== seat);
                btn.style.background = "rgb(236, 1, 1)";
            } else {
                selectedSeat.push(seat);
                btn.style.background = "yellow";
            }
        };

        baris.appendChild(btn);
    }
    kursi.appendChild(baris);
});

function booked() {
    const booking = JSON.parse(localStorage.getItem("booking"))
    booking.seats = selectedSeat
    booking.tickets = selectedSeat.length
    booking.total = booking.price * booking.tickets
    
    localStorage.setItem("booking", JSON.stringify(booking))
    window.location.href = "summary.html"
}
function back() {
    window.location.href = "film.html"
}