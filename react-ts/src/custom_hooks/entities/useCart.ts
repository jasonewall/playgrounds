import LineItem from "@dtos/LineItem";
import Product from "@dtos/Product";
import _ from "lodash";
import { UseQueryResult, useQuery } from "react-query";

type CartContents = Record<number, LineItem>;

const cartContents: CartContents = {};

class Cart {
    query: UseQueryResult<CartContents>;

    constructor(query: UseQueryResult<CartContents>) {
        this.query = query;
    }

    get lineItems(): LineItem []{
        return (this.query.data && Object.values(this.query.data)) ?? [];
    }

    get length(): number {
        return (this.query.data && Object.keys(this.query.data).length) ?? 0;
    }

    get status(): UseQueryResult<CartContents> {
        return this.query;
    }

    add(product: Product, quantity: number) {
        const lineItem = new LineItem({
            product: product,
            quantity: quantity,
        })
        cartContents[lineItem.product.id] = lineItem;
        this.query.refetch();
    }
}

function fetchCart(): Promise<Record<number, LineItem>> {
    return new Promise<Record<number, LineItem>>((resolve) => {
        setTimeout(_.partial(resolve, cartContents), 2000);
    });
}

function useCart(): Cart {
    const cartResult = useQuery({
        queryKey: 'userCart',
        queryFn: fetchCart,
    });

    return new Cart(cartResult);
}


export default useCart;
