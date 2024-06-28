export default class Product {
    /**
     * @param {string} img
     * @param {string} title
     * @param {string} desc
     * @param {number} price
     */
    constructor(img, title, desc, price, id) {
        this.img = img;
        this.title = title;
        this.desc = desc;
        this.price = price;
        this.id = id;
    }

    toCardHtml(){
        const cardHtml = document.createElement ('div');
        cardHtml.setAttribute('data-search', this.title)

        const divCardHtml = document.createElement('div');
        const divImg = document.createElement('div');
        const imgHtml = document.createElement('img');
        const titleHtml = document.createElement('h2');
        const descHtml = document.createElement('p');
        const priceHtml = document.createElement('p');
        const btnAddToCart = document.createElement('button');

        imgHtml.setAttribute('src', this.img);
        imgHtml.setAttribute('alt', this.title);
        titleHtml.textContent = this.title;
        descHtml.textContent = this.desc;
        priceHtml.textContent = '$' +this.price;
        btnAddToCart.textContent = 'Ajouter au panier';
        btnAddToCart.setAttribute('data-dialog', '#cart');

        cardHtml.id = this.id;
        cardHtml.className = "carte w-full";
        divCardHtml.className = "card min-h-full bg-white rounded-lg p-4 shadow-lg items-center text-center border-2 border-lightOrange flex flex-col justify-end gap-2";
        divImg.className = "p-6 lg:p-10";
        imgHtml.className = "mx-auto mb-4 max-w-[100%]";
        titleHtml.className = "text-xl font-bold";
        descHtml.className = 'italic text-sm';
        priceHtml.className = "font-bold text-lg";
        btnAddToCart.className = 'btn-add-to-cart px-6 py-3 border rounded-full font-bold hover:shadow-lg transition-all duration-300 hover:bg-orange';


        cardHtml.appendChild(divCardHtml);
        divCardHtml.appendChild(divImg);
        divImg.appendChild(imgHtml);
        divCardHtml.appendChild(titleHtml);
        divCardHtml.appendChild(descHtml);
        divCardHtml.appendChild(priceHtml);
        divCardHtml.appendChild(btnAddToCart);

        return cardHtml;
    }
}