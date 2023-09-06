import Menu, { MenuItem } from "@components/Menu";
import ProductList from "@components/ProductList";
import UserCart from "@components/UserCart";
import useCart from "@entities/useCart";
import { useState } from "react";

function ShoppingCart() {
    const [view, setView] = useState(1);

    const cart = useCart();

    const views: MenuItem<() => JSX.Element>[] = [
        { description: `Cart (${cart.length})`, value: UserCart },
        { description: 'Products', value: ProductList }
    ]

    const CurrentView = views[view].value;

    return <>
        <Menu items={views} selected={view} onClick={setView}/>
        <CurrentView />
    </>
}

export default ShoppingCart;
