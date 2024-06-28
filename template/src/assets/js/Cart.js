import LineItem from "./LineItem.js"

//Faire fonctionner le total
//Ne pas faire disparaitre le lineItem à chaque clic sur le - mais quand la quantité = 0

export default class Cart{
    /**
     * @param {LineItem[]} lineItems
     * @param {number} total
     */
    constructor(){
        this.lineItems = [];
        this.total = 0;
    }

    toTotalCartHtml() {
        const totalDivHtml = document.createElement('div');
        const totalHtml = document.createElement('p');

        totalHtml.textContent = 'Total : $' + this.getTotal();

        totalDivHtml.className = 'order-2 p-3 font-bold text-lg';

        totalDivHtml.appendChild(totalHtml);

        return totalDivHtml;
    }

    //À actualiser à chaque clic sur ajouter ou supprimer un article
    getTotal() {
        let total = 0;

        for(let lineItem of this.lineItems){
            total += lineItem.total;
        }
        return total;
    }

    findLineItem(product) {
        for (let i = 0; i < this.lineItems.length; i++) {
            let lineItem = this.lineItems[i];
            if (lineItem.product.title === product.title) {
                return lineItem;
            }
        }
    }


    //À vérifier le code obsolète
    addOrUpdateLineItem(product) {
        let existingLineItem = this.findLineItem(product);
        if (existingLineItem) {
            existingLineItem.quantity ++;
            for(let quantity of document.querySelectorAll('.quantity')){
                quantity.textContent = existingLineItem.quantity;
            }
        } else {
            const lineItem = new LineItem(product, 1);
            this.lineItems.push(lineItem);
            //Code trouvé sur internet, à expliquer mieux
            lineItem.setOnRemoveCallback((item) => this.removeLineItem(item));
            return lineItem;
        }
    } 


    removeLineItem(lineItem) {
        const index = this.lineItems.indexOf(lineItem);
        //(lineItem.quantity === 0)
        if (index > -1) {
            this.lineItems.splice(index, 1);
        }
        console.log('Item removed, new total:', this.getTotal());
    }
}