body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 0;
    background-color: #f4f7f2;
}

header {
    background: #2e7d32;
    color: white;
    padding: 2rem;
    text-align: center;
}

#machinery-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
    padding: 20px;
}

.card {
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    padding: 15px;
    transition: 0.3s;
}

.card:hover { transform: translateY(-5px); }

.card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 5px;
}

.price { color: #2e7d32; font-weight: bold; font-size: 1.2rem; }

.modal { display: none; position: fixed; z-index: 1; top: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); }
.modal-content { background: white; margin: 10% auto; padding: 20px; width: 70%; border-radius: 10px; }
