import Product from "@dtos/Product";
import { useQuery } from "react-query";
import cartServiceKey, { CartService } from '@services/CartService';
import ShoppingCart from "@domains/commerce/ShoppingCart";
import serviceRegistry from "@services/registery";

function useCart() {
    const cartResult = useQuery({
        queryKey: 'userCart',
        queryFn: () => { return serviceRegistry.get<CartService>(cartServiceKey).getCartItems() },
        cacheTime: 500,
        staleTime: 10_000,
    });

    const cart = new ShoppingCart(cartResult.data, serviceRegistry.get<CartService>(cartServiceKey));

    return {
        addToCart: async (product: Product, quantity: number) => {
            const lineItem = await cart.setProductQuantity(product, quantity);
            cartResult.refetch();
            return lineItem;
        },
        lineItems: cart.lineItems,
        state: cartResult,
    };
}

export default useCart;
