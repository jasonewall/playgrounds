import LineItem from "@dtos/LineItem";
import Product from "@dtos/Product";
import useCart from "@entities/useCart";
import _ from "lodash";
import LineItemControls from "./LineItemControls";
import { useState } from "react";

function ProductCard({ product }: { product: Product }) {
    const { setProductQuantity, state } = useCart();

    const lineItem = (state.data && state.data[product.id]) ?? new LineItem({product: product, quantity: 0 });
    const updateCartQuantity = _.debounce((quantity: number) => { setProductQuantity(product, quantity) }, 2000);

    return <>
        <div className="border-slate-600 border-2">
            <p className="font-bold text-center">{ product.name }</p>
            <p className="text-end">${product.price}</p>
            <CartControls lineItem={lineItem} onQuantityChange={updateCartQuantity} />
        </div>
    </>
}

function CartControls({ lineItem, onQuantityChange }: {
    lineItem: LineItem,
    onQuantityChange: (quantity: number) => void,
}) {
    const [quantity, setQuantity] = useState(lineItem.quantity);

    const changeQuantity = (quantity: number) => {
        lineItem.quantity = quantity;
        setQuantity(quantity);
        onQuantityChange(quantity);
    }

    if(quantity > 0) {
        return <LineItemControls quantity={lineItem.quantity} onQuantityChange={changeQuantity} />;
    } else {
        return <div className="text-center">
            <button onClick={() => changeQuantity(1)}>Add To Cart</button>
        </div>
    }
}

export default ProductCard;
