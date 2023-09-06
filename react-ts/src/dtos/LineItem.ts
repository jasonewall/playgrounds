import Product from "./Product";

class LineItem {
    product: Product;

    quantity: number;

    constructor(attributes: LineItem) {
        this.product = attributes.product;
        this.quantity = attributes.quantity;
    }
}

export default LineItem;
