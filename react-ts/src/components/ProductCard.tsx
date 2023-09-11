import LineItem from "@dtos/LineItem";
import Product from "@dtos/Product";
import useCart from "@entities/useCart";
import _ from "lodash";
import { useState } from "react";

function ProductCard({ product }: { product: Product }) {
    const { setProductQuantity, state } = useCart();

    const lineItem = (state.data && state.data[product.id]) ?? new LineItem({product: product, quantity: 0 });
    const updateCartQuantity = _.debounce((quantity: number) => { setProductQuantity(product, quantity) }, 2000);

    return <>
        <div className="border-slate-600 border-2">
            <p className="font-bold text-center">{ product.name }</p>
            <p className="text-end">${ product.price }</p>
            <CartControls lineItem={lineItem} onChange={updateCartQuantity}/>
        </div>
    </>
}

function CartControls({ lineItem, onChange }: {
    lineItem: LineItem,
    onChange: (quantity: number) => void,
}) {
    const setQuantityHandler = (quantity:number) => {
        setCartQuantity(quantity);
        onChange(quantity);
    }

    const [cartQuantity, setCartQuantity] = useState(lineItem.quantity);

    if (cartQuantity > 0) {
        return <div className="text-center">
            <button className="border-2 border-slate-300" onClick={() => setQuantityHandler(cartQuantity - 1)}>-</button>
            <input className="text-center" value={cartQuantity} onChange={(e) => { setQuantityHandler(parseInt(e.target.value)); }}/>
            <button className="border-2 border-slate-300" onClick={() => setQuantityHandler(cartQuantity + 1)}>+</button>
        </div>;
    } else {
        return <div className="text-center">
            <button onClick={() => { setQuantityHandler(1); }}>Add To Cart</button>
        </div>;
    }
}

export default ProductCard;
