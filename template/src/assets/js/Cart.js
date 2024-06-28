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

    //À actualiser à chaque clic sur ajouter ou supprimer un article
    //Afficher le total dans le panier
    getTotal() {
        let total = 0;

        for(const lineItem of this.lineItems){
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

    addOrUpdateLineItem(product) {
        const existingLineItem = this.findLineItem(product);
        if (existingLineItem) {
            //À DEFINIR
            existingLineItem.quantity ++;
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