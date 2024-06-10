const ITEMS = [
    {
        id: 1,
        name: 'Camisa Corp Exemplo',
        color: 'Creme',
        size: 'P',
        price: 100,
        images: 'assets/img/camisa-exemplo-2.jpg',
        qty: 1
    },
    {
        id: 2,
        name: 'Camisa Corp Exemplo',
        color: 'Creme',
        size: 'M',
        price: 100,
        images: 'assets/img/camisa-exemplo-2.jpg',
        qty: 1
    },
    {
        id: 3,
        name: 'Camisa Corp Exemplo',
        color: 'Creme',
        size: 'G',
        price: 100,
        images: 'assets/img/camisa-exemplo-2.jpg',
        qty: 1
    },
    {
        id: 4,
        name: 'Camisa Corp Exemplo',
        color: 'Chumbo',
        size: 'P',
        price: 100,
        images: 'assets/img/camisa-exemplo.jpg',
        qty: 1
    },
    {
        id: 5,
        name: 'Camisa Corp Exemplo',
        color: 'Chumbo',
        size: 'M',
        price: 100,
        images: 'assets/img/camisa-exemplo.jpg',
        qty: 1
    },
    {
        id: 6,
        name: 'Camisa Corp Exemplo',
        color: 'Chumbo',
        size: 'G',
        price: 100,
        images: 'assets/img/camisa-exemplo.jpg',
        qty: 1
    }
]

const openBtn = document.getElementById('open-cart-btn');
const cart = document.getElementById('sidecart');
const closeBtn = document.getElementById('close-btn');
const backdrop = document.querySelector('.backdrop');
const cartItems = document.querySelector('.cart-items');
const subtotalPrice = document.getElementById('subtotal-price');
const buyButton = document.querySelector('.buy-button');

let cart_data = JSON.parse(localStorage.getItem('cart_data')) || [];

if (openBtn && closeBtn && backdrop) {
    openBtn.addEventListener('click', openCart);
    closeBtn.addEventListener('click', closeCart);
    backdrop.addEventListener('click', closeCart);
}

if (buyButton) {
    buyButton.addEventListener('click', (evt) => {
        changeButtonId();
    
        const index = evt.target.id.split(' ')[1];
        
        addItem(index, ITEMS[index].id);
    });
}

calcSubtotalPrice();
renderCartItems();

function changeButtonId() {
    const selectedColor = [...document.getElementsByName('color')].find(rb => rb.checked).value;
    const selectedSize = [...document.getElementsByName('size')].find(rb => rb.checked).value;

    if (selectedColor === 'Creme') {
        if (selectedSize === 'P') {
            buyButton.id = 'buy-button 0';
        } else if (selectedSize === 'M') {
            buyButton.id = 'buy-button 1';
        } else if (selectedSize === 'G') {
            buyButton.id = 'buy-button 2';
        }
    } else if (selectedColor === 'Chumbo') {
        if (selectedSize === 'P') {
            buyButton.id = 'buy-button 3';
        } else if (selectedSize === 'M') {
            buyButton.id = 'buy-button 4';
        } else if (selectedSize === 'G') {
            buyButton.id = 'buy-button 5';
        }
    }
}

function openCart() {
    cart.classList.add('open');
    backdrop.style.display = 'block';

    setTimeout(() => {
        backdrop.classList.add('show');
    }, 0);
}

function closeCart() {
    cart.classList.remove('open');
    backdrop.classList.remove('show');

    setTimeout(() => {
        backdrop.style.display = 'none';
    }, 500);
}

function addItem(idx, itemId) {
    const foundedItem = cart_data.find(
        item => item.id.toString() === itemId.toString()
    );

    if(foundedItem) {
        increaseQty(itemId);
    } else {
        cart_data.push(ITEMS[idx]);
    }

    updateCart();
    openCart();
}

function removeCartItem(itemId) {
    cart_data = cart_data.filter(item => item.id != itemId);

    updateCart();
}

function increaseQty(itemId) {
    cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? { ...item, qty: item.qty + 1 } : item);
    updateCart();
}

function decreaseQty(itemId) {
    cart_data = cart_data.map(item => item.id.toString() === itemId.toString() ? { ...item, qty: item.qty > 1 ? item.qty - 1 : item.qty } : item);
    updateCart();
}

function calcSubtotalPrice() {
    let subtotal = 0;

    cart_data.forEach((item) => (subtotal += item.price * item.qty));

    subtotalPrice.innerText = subtotal;
}

function renderCartItems() {
    cartItems.innerHTML = '';

    cart_data.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <div class="remove-item" onclick="removeCartItem(${item.id})">
                <span>&times;</span>
            </div>
            <div class="item-img">
                <img src="${item.images}" alt="">
            </div>
            <div class="item-details">
                <p>${item.name}</p>
                <p class="p-size">Tamanho: ${item.size}</p>
                <strong>R$${item.price}</strong>
                <div class="qty">
                    <span onclick="decreaseQty(${item.id})">-</span>
                    <p style="font-weight: 600;">${item.qty}</p>
                    <span onclick="increaseQty(${item.id})">+</span>
                </div>
            </div>
        `
        cartItems.appendChild(cartItem);
    })
}

function updateCart() {
    renderCartItems();
    calcSubtotalPrice();
    localStorage.setItem('cart_data', JSON.stringify(cart_data));
}