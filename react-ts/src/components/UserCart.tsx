import useCart from "@entities/useCart";

function UserCart() {
    const { lineItems } = useCart();
    return <div className="ml-20 mr-20">
        <h1 className="text-center text-4xl font-extrabold">Your Cart</h1>
        <ul className="list-disc list-outsdide">
            {lineItems.map(lineItem => (
                <li key={lineItem.product.id}>{lineItem.product.name} - {lineItem.quantity}</li>
            ))}
        </ul>
    </div>
}

export default UserCart;
