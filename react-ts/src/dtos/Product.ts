export class Product {
    id: number;

    price: number;

    name: string;

    constructor(attributes: Product) {
        this.id = attributes.id;
        this.price = attributes.price;
        this.name = attributes.name;
    }
}

export default Product;
