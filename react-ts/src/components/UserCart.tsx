import useCart from "@entities/useCart";

function UserCart() {
    const cart = useCart();
    return <>
        <ul>
            {cart.lineItems.map(lineItem => (
                <li key={lineItem.product.id}>{lineItem.product.name} - {lineItem.quantity}</li>
            ))}
        </ul>
    </>
}

export default UserCart;
