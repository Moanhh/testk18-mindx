const form = document.getElementById("myForm");
const imgInput = document.querySelector(".img");
const file = document.getElementById("imgInput");
const productName = document.getElementById("name");
const price = document.getElementById("price");
const description = document.getElementById("description");
const submitBtn = document.querySelector(".submit");
const productGrid = document.getElementById("productGrid");
const modal = document.getElementById("productForm");
const modalTitle = document.querySelector("#productForm .modal-title");
const newProductBtn = document.querySelector(".newProduct");

let products = JSON.parse(localStorage.getItem('products')) || [];
let isEdit = false, editId;

newProductBtn.addEventListener('click', () => {
    submitBtn.innerText = 'Submit';
    modalTitle.innerText = "Add New Product";
    isEdit = false;
    imgInput.src = "";
    form.reset();
});

file.onchange = function() {
    if (file.files[0].size < 3000000) {  // 3MB = 3000000
        const fileReader = new FileReader();
        fileReader.onload = function(e) {
            imgInput.src = e.target.result;
        }
        fileReader.readAsDataURL(file.files[0]);
    } else {
        alert("This file is too large!");
    }
}

function showProducts() {
    productGrid.innerHTML = '';
    products.forEach((product, index) => {
        const productElement = `
            <div class="col-md-4 mb-3">
                <div class="card">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">Product: ${product.name}</h5>
                        <p class="card-text">Price: $${product.price}</p>
                        <p class="card-text">Description: ${product.description}</p>
                        <button class="btn btn-primary" onclick="editProduct(${index})">Edit</button>
                        <button class="btn btn-danger" onclick="deleteProduct(${index})">Delete</button>
                    </div>
                </div>
            </div>
        `;
        productGrid.innerHTML += productElement;
    });
}

function editProduct(index) {
    isEdit = true;
    editId = index;
    const product = products[index];
    imgInput.src = product.image;
    productName.value = product.name;
    price.value = product.price;
    description.value = product.description;
    submitBtn.innerText = "Update";
    modalTitle.innerText = "Update Product";
    new bootstrap.Modal(modal).show();
}

function deleteProduct(index) {
    if (confirm("Are you sure you want to delete this product?")) {
        products.splice(index, 1);
        localStorage.setItem("products", JSON.stringify(products));
        showProducts();
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const product = {
        id: isEdit ? products[editId].id : Date.now(),
        image: imgInput.src,
        name: productName.value,
        price: price.value,
        description: description.value
    };

    if (!isEdit) {
        products.push(product);
    } else {
        products[editId] = product;
    }

    localStorage.setItem('products', JSON.stringify(products));
    showProducts();
    form.reset();
    imgInput.src = "";
    bootstrap.Modal.getInstance(modal).hide();
});

showProducts();