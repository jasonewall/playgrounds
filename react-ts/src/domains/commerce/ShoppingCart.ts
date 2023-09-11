import LineItem from "@dtos/LineItem";
import Product from "@dtos/Product";
import { CartService, CartContents } from "@services/CartService";

class ShoppingCart {
    data: CartContents | undefined;

    service: CartService;

    constructor(data: CartContents | undefined, cartService: CartService) {
        this.data = data;
        this.service = cartService;
    }

    get lineItems(): LineItem[] {
        const data = this.data;
        return (data && Object.values(data)) ?? [];
    }

    add(product: Product, quantity: number) {
        const lineItem = new LineItem({
            product: product,
            quantity: quantity,
        });
        return this.service.addCartItem(lineItem);
    }
}

export default ShoppingCart;
