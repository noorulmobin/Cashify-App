let data = [];

function btn() {
    fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(resData => {
            data = resData.products;
            displayProducts();
        });
}

function displayProducts() {
    const container = document.getElementById('products-container');
    container.innerHTML = ''; // Clear previous content
    data.forEach(product => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${product.thumbnail}" alt="${product.title}">
            <h2>${product.title}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price}</p>
        `;
        container.appendChild(card);
    });
}











