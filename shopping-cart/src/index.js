let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'RAYMOND SHIRTS',
        image: 'dress1.webp',
        price: 'RS.1200',
        description: 'Best for comfort and design'
    },
    {
        id: 2,
        name: 'PETER ENGLAND SHIRTS',
        image: 'dress2.webp',
        price: 'Rs.2450',
        description: 'Best for design and ife-long compatibility'
    },
    {
        id: 3,
        name: ' RELIANCE TRENDS',
        image: 'dress3.webp',
        price: 'Rs.1300',
        description: 'Stylish trends and modelling'
    },
    {
        id: 4,
        name: 'HMT BRANDED WATCH',
        image: 'dress4.webp',
        price: 'Rs.2000',
        description: 'Lifetime reusable'
    },
    {
        id: 5,
        name: 'PANTALOON SHIRTS AND PANTS',
        image: 'dress5.webp',
        price: 'Rs.2000',
        description: 'Colorful and stylish forever'
    },
    {
        id: 6,
        name: 'QUART Z COMBO',
        image: 'dress6.webp',
        price: 'Rs.1500',
        description: 'Best Rating No.1 in world'
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="titles">${value.description}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.description}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}