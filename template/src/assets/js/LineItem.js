import Product from "./Product.js";

export default class LineItem {
    /**
     * @param {Product} product
     * @param {number} quantity
     * @param {number} total
     */
    constructor (product, quantity){
        this.product = product;
        this.quantity = quantity;
        this.total = Math.round(this.quantity * this.product.price);
    }

    toCartHtml(){
        const divCart = document.createElement('div');
        const imgCartHtml = document.createElement('img');
        const divTextCartHtml = document.createElement('div');
        const nameCartHtml = document.createElement('p');
        const descCartHtml = document.createElement('p');
        const priceCartHtml = document.createElement('p');
        const playWithQuantity = document.createElement('div');
        const quantityHtml = document.createElement('p');
        const btnRemoveQuantity = document.createElement('button');

        imgCartHtml.setAttribute('src', this.product.img);
        imgCartHtml.setAttribute('alt', this.product.title);
        nameCartHtml.textContent = this.product.title;
        descCartHtml.textContent = this.product.desc;
        priceCartHtml.textContent = '$' + this.product.price;
        btnRemoveQuantity.textContent = '-';
        quantityHtml.textContent = this.quantity;

        imgCartHtml.className = 'w-[100px]'
        btnRemoveQuantity.className = 'btn-remove';

        btnRemoveQuantity.addEventListener('click', () => {
            this.removeFromCart();
        });

        divCart.appendChild(imgCartHtml);
        divCart.appendChild(divTextCartHtml);
        divTextCartHtml.appendChild(nameCartHtml);
        divTextCartHtml.appendChild(descCartHtml);
        divTextCartHtml.appendChild(priceCartHtml);
        divCart.appendChild(playWithQuantity);
        playWithQuantity.appendChild(quantityHtml);
        playWithQuantity.appendChild(btnRemoveQuantity);

        //Pris sur internet
    this.element = divCart;
    return divCart;
    };

    //Reste à ajouter une condition si l'article est déjà présent, ajuster la quantité
    //Pris sur internet
    removeFromCart() {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        // Implement callback or event to notify Cart to remove this LineItem
        if (this.onRemove) {
            this.onRemove(this);
        }
    }

    setOnRemoveCallback(callback) {
        this.onRemove = callback;
    }
}



