import useCart from "@entities/useCart";
import LineItemControls from "./LineItemControls";
import _ from "lodash";
import { useState } from "react";
import LineItemData from '@dtos/LineItem';

function UserCart() {
    const { lineItems } = useCart();

    return <div className="ml-20 mr-20">
        <h1 className="text-center text-4xl font-extrabold">Your Cart</h1>
        <ul className="list-disc list-outsdide">
            {lineItems.map(lineItem => (
                <LineItem lineItem={lineItem} />
            ))}
        </ul>
    </div>
}

function LineItem({ lineItem }: { lineItem: LineItemData }) {
    const { setProductQuantity } = useCart();

    const updateCartQuantity = _.debounce((quantity: number) => {
        setProductQuantity(lineItem.product, quantity);
    });

    const [quantity, setQuantity] = useState(lineItem.quantity);

    const handleQuantityChange = (quantity: number) => {
        setQuantity(quantity);
        updateCartQuantity(quantity);
    }

    return (<li key={lineItem.product.id}>
        <div className="flex flex-row">
            <div className="basis-2/6">{lineItem.product.name}</div>
            <LineItemControls quantity={quantity} onQuantityChange={handleQuantityChange} />
        </div>
    </li>);
}

export default UserCart;
