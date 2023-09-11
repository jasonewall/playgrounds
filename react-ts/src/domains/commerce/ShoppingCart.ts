import LineItem from "@dtos/LineItem";
import Product from "@dtos/Product";
import { CartService, CartContents } from "@services/CartService";

class ShoppingCart {
    cartContents: CartContents | undefined;

    service: CartService;

    constructor(data: CartContents | undefined, cartService: CartService) {
        this.cartContents = data;
        this.service = cartService;
    }

    get lineItems(): LineItem[] {
        const data = this.cartContents;
        return (data && Object.values(data)) ?? [];
    }

    setProductQuantity(product: Product, quantity: number): Promise<LineItem> {
        const lineItem = new LineItem({
            product: product,
            quantity: quantity,
        });

        if (this.cartContents && this.cartContents[product.id]) {
            if (lineItem.quantity === 0) {
                return this.service.deleteLineItem(lineItem);
            } else {
                return this.service.updateLineItem(lineItem);
            }
        }
        else {
            if (lineItem.quantity === 0) return Promise.reject(new Error('Cannot add line item with quantity 0'));
            return this.service.addCartItem(lineItem);
        }
    }
}

export default ShoppingCart;
