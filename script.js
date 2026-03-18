const machines = [
    { name: "John Deere 5050D", type: "Tractor", price: 500, loc: "Riverside Farm", cond: "Excellent", service: "Includes experienced driver", img: "machine1.jpg" },
    { name: "Mahindra Arjun 555", type: "Tractor", price: 450, loc: "Green Valley", cond: "Good", service: "Dry hire only", img: "machine2.jpg" },
    { name: "Kubota L-Series", type: "Compact Tractor", price: 300, loc: "North Hills", cond: "Mint", service: "Fuel tank full", img: "machine3.jpg" },
    { name: "Precision Disc Plough", type: "Plough", price: 150, loc: "West Plains", cond: "Used", service: "Includes coupling check", img: "machine4.jpg" },
    { name: "New Holland Combine", type: "Harvester", price: 1200, loc: "Central Hub", cond: "Excellent", service: "24/7 technical support", img: "machine5.jpg" },
    { name: "Rotavator Z-Series", type: "Tiller", price: 200, loc: "South Meadow", cond: "Good", service: "Blades sharpened daily", img: "machine6.jpg" },
    { name: "JCB 3CX Eco", type: "Backhoe Loader", price: 800, loc: "Quarry Lane", cond: "Excellent", service: "Operator included", img: "machine7.jpg" },
    { name: "Seed Drill Pro", type: "Seeder", price: 180, loc: "East Fields", cond: "Good", service: "Calibration assistance", img: "machine8.jpg" },
    { name: "Massey Ferguson 245", type: "Tractor", price: 400, loc: "Old Town", cond: "Fair", service: "Night lighting provided", img: "machine9.jpg" },
    { name: "Baler 3000", type: "Hay Baler", price: 350, loc: "High Grasslands", cond: "Excellent", service: "Twine rolls included", img: "machine10.jpg" },
    { name: "Case IH Magnum", type: "Heavy Tractor", price: 950, loc: "Summit Farm", cond: "Mint", service: "GPS guidance enabled", img: "machine11.jpg" },
    { name: "Power Sprayer X1", type: "Sprayer", price: 100, loc: "Orchard Park", cond: "Good", service: "Nozzle cleaning kit", img: "machine12.jpg" },
    { name: "Vermeer Mower", type: "Disc Mower", price: 250, loc: "Brookside", cond: "New", service: "Safety gear provided", img: "machine13.jpg" },
    { name: "Tipping Trailer", type: "Utility Vehicle", price: 120, loc: "East Gate", cond: "Robust", service: "Hydraulic check done", img: "machine14.jpg" }
];

function loadMachines() {
    const grid = document.getElementById('machine-grid');
    grid.innerHTML = machines.map(m => `
        <div class="card">
            <img src="images/${m.img}" alt="${m.name}" onerror="this.src='https://via.placeholder.com/300x200?text=AgriRent+Machine'">
            <div class="content">
                <span class="badge">${m.type}</span>
                <h3>${m.name}</h3>
                <p class="specs">📍 ${m.loc} | ✨ Condition: ${m.cond}</p>
                <p><strong>Service:</strong> ${m.service}</p>
                <div style="margin: 15px 0; display: flex; justify-content: space-between; align-items: center;">
                    <span class="price-tag">₹${m.price}/hr</span>
                </div>
                <button class="btn-rent" onclick="alert('Booking request sent for ${m.name}!')">Rent Now</button>
            </div>
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', loadMachines);
// Verification script for Student Profile
document.addEventListener('DOMContentLoaded', () => {
    const studentName = "Shreeratna.A.Gaikwad";
    const prn = "BSFU125029";
    
    console.log("Portfolio Loaded: " + studentName + " (PRN: " + prn + ")");
    
    // Optional: Alert or Welcome message
    // alert("Welcome to the profile of " + studentName);
});
