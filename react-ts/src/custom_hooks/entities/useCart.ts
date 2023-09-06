import LineItem from "@dtos/LineItem";
import Product from "@dtos/Product";
import _ from "lodash";
import { QueryClient, UseQueryResult, useQuery, useQueryClient } from "react-query";

const CartContents: LineItem[] = [];

class Cart {
    query: UseQueryResult<LineItem[]>;

    queryClient: QueryClient;

    constructor(query: UseQueryResult<LineItem[]>, queryClient: QueryClient) {
        this.query = query;
        this.queryClient = queryClient;
    }

    get lineItems(): LineItem[] {
        return this.query.data ?? [];
    }

    get length(): number {
        return this.query.data?.length ?? 0;
    }

    get status(): UseQueryResult<LineItem[]> {
        return this.query;
    }

    add(product: Product) {
        const lineItem = new LineItem({
            product: product,
            quantity: 1,
        })
        CartContents.push(lineItem);
        this.queryClient.invalidateQueries({ queryKey: 'userCart' });
    }
}

function fetchCart(): Promise<LineItem[]> {
    return new Promise<LineItem[]>((resolve) => {
        setTimeout(_.partial(resolve, CartContents), 2000);
    });
}

function useCart(): Cart {
    const cartResult = useQuery({
        queryKey: 'userCart',
        queryFn: fetchCart,
    });

    return new Cart(cartResult, useQueryClient());
}


export default useCart;
