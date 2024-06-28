import '../css/styles.css';
import Product from "./Product.js";
import products from './products.js';
import './dialog.js';
import LineItem from "./LineItem.js";
import Cart from "./Cart.js";
import './search.js';

const cart = new Cart();

const productsContainerIndex = document.querySelector('.products-container-index');
const productsContainerProduits = document.querySelector('.products-container-produits');

products.forEach(product => {
    productsContainerProduits.appendChild(product.toCardHtml());
})

//POURQUOI CA NE MARCHE PAS ? On ne peut utiliser qu'une seule fois la méthode toHtml ?
/* for(let i = 0; i < 4; i++) {
    productsContainerIndex.appendChild(products[i].toCardHtml());
} */

const mainCart = document.querySelector('.main-cart');

const btnsAddToCart = document.querySelectorAll('.btn-add-to-cart');
btnsAddToCart.forEach((btnAddToCart, index) => {
btnAddToCart.addEventListener('click', () => {
        const product = products[index];
        const lineItem = cart.addOrUpdateLineItem(product);
        if (lineItem) {
            mainCart.appendChild(lineItem.toCartHtml());
        }
        console.log(cart.getTotal());
    });
});

mainCart.appendChild(cart.toTotalCartHtml());
