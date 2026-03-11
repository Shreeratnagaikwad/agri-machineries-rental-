const machineryData = [
    { id: 1, name: "John Deere 5050E", price: 800, location: "Pune, MH", img: "images/tractor1.jpg" },
    { id: 2, name: "Mahindra Arjun 555", price: 750, location: "Nashik, MH", img: "images/tractor2.jpg" },
    { id: 3, name: "Rotavator - 7 Feet", price: 300, location: "Satara, MH", img: "images/tool1.jpg" },
    { id: 4, name: "Combine Harvester", price: 2500, location: "Sangli, MH", img: "images/harvester.jpg" },
    { id: 5, name: "Power Tiller", price: 400, location: "Kolhapur, MH", img: "images/tiller.jpg" },
    { id: 6, name: "Swaraj 855 FE", price: 700, location: "Nagpur, MH", img: "images/tractor3.jpg" },
    { id: 7, name: "Seed Drill", price: 350, location: "Solapur, MH", img: "images/tool2.jpg" },
    { id: 8, name: "Mini Tractor", price: 500, location: "Ahmednagar, MH", img: "images/mini.jpg" },
    { id: 9, name: "Rice Transplanter", price: 1200, location: "Raigad, MH", img: "images/rice.jpg" },
    { id: 10, name: "Pesticide Sprayer (Drone)", price: 1500, location: "Aurangabad, MH", img: "images/drone.jpg" }
];

const grid = document.getElementById('machinery-grid');

machineryData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <img src="${item.img}" alt="${item.name}">
        <div class="card-content">
            <h3>${item.name}</h3>
            <p class="location">📍 ${item.location}</p>
            <p class="price">₹${item.price} / hr</p>
            <button onclick="viewDetails(${item.id})">View Details</button>
        </div>
    `;
    grid.appendChild(card);
});

function viewDetails(id) {
    alert("Redirecting to detailed info for machinery ID: " + id + "\nIn a full build, this would open a new page!");
}
