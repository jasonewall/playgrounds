import LineItem from "@dtos/LineItem";
import _ from "lodash";
import serviceRegistry from "./registery";

export type CartContents = Record<number, LineItem>;

export interface CartService {
    getCartItems(): Promise<CartContents>;

    addCartItem(lineItem: LineItem): Promise<LineItem>;
}

class CartServiceImpl implements CartService {
    private cartContents: CartContents = {};

    getCartItems(): Promise<CartContents> {
        return new Promise((resolve) => {
            console.log("fetching cart ...");
            setTimeout(_.partial(resolve, this.cartContents), 2000);
        });
    }

    addCartItem(lineItem: LineItem): Promise<LineItem> {
        return new Promise((resolve) => {
            this.cartContents[lineItem.product.id] = lineItem;
            setTimeout(_.partial(resolve, lineItem), 500);
        })
    }
}

const cartServiceKey = 'cartService';

serviceRegistry.register(cartServiceKey, new CartServiceImpl());

export default cartServiceKey;
