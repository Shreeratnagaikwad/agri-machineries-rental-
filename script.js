const tractors = [
    {
        name: "Mahindra Arjun 555",
        hp: "50 HP",
        price: "₹1500/day",
        image: "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "John Deere 5310",
        hp: "55 HP",
        price: "₹1800/day",
        image: "https://images.unsplash.com/photo-1530268576440-624068b5774a?auto=format&fit=crop&q=80&w=500"
    },
    {
        name: "Swaraj 855 FE",
        hp: "52 HP",
        price: "₹1600/day",
        image: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=500"
    }
];

const grid = document.getElementById('tractor-grid');
const modal = document.getElementById('bookingModal');
const closeBtn = document.querySelector('.close-btn');

// Load tractors into the grid
tractors.forEach(tractor => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${tractor.image}" alt="${tractor.name}">
        <div class="card-info">
            <h3>${tractor.name}</h3>
            <p>Power: ${tractor.hp}</p>
            <p class="price">${tractor.price}</p>
            <button class="btn-submit" onclick="openModal()">Rent Now</button>
        </div>
    `;
    grid.appendChild(card);
});

function openModal() {
    modal.style.display = "block";
}

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}

document.getElementById('booking-form').onsubmit = (e) => {
    e.preventDefault();
    alert("Booking Request Sent! Our agent will call you shortly.");
    modal.style.display = "none";
};
