import LineItem from "./LineItem.js"

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

    //Code qui ne cible pas exactement le bon produit
    addOrUpdateLineItem(product) {
        let existingLineItem = this.findLineItem(product);
        if (existingLineItem) {
            existingLineItem.quantity ++;
            //Le selecteur n'est pas le bon, il retourne toujours le premier lineItem
            document.querySelector('.quantity').textContent = existingLineItem.quantity;
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
        if (index > -1) {
            this.lineItems.splice(index, 1);
        }
        console.log('Item removed, new total:', this.getTotal());
    }
}