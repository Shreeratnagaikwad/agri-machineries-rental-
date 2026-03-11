const wasteMaterials = [
    { name: "Rice Husk", price: "₹150", qty: "500 kg", loc: "Punjab", info: "Ideal for bio-fuel bricks." },
    { name: "Wheat Straw", price: "₹120", qty: "1 Ton", loc: "Haryana", info: "Used for paper pulp." },
    { name: "Sugarcane Bagasse", price: "₹200", qty: "2 Tons", loc: "UP", info: "Great for eco-packaging." },
    { name: "Corn Cobs", price: "₹80", qty: "300 kg", loc: "Maharashtra", info: "Animal feed additive." },
    { name: "Coconut Shells", price: "₹300", qty: "100 kg", loc: "Kerala", info: "Activated charcoal base." },
    // Add 19 more similar items here...
];

const grid = document.getElementById('product-grid');

wasteMaterials.forEach(item => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
        <h3>${item.name}</h3>
        <p class="price">${item.price} <small>per unit</small></p>
        <div class="meta">
            📍 ${item.loc} | 📦 ${item.qty}
        </div>
        <p>${item.info}</p>
        <a href="#" class="btn" onclick="alert('Contacting Seller in ${item.loc}...')">View Details</a>
    `;
    grid.appendChild(card);
});
