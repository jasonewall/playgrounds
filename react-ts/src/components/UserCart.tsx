import useCart from "@entities/useCart";

function UserCart() {
    const { lineItems, setProductQuantity } = useCart();

    return <div className="ml-20 mr-20">
        <h1 className="text-center text-4xl font-extrabold">Your Cart</h1>
        <ul className="list-disc list-outsdide">
            {lineItems.map(lineItem => (
                <li key={lineItem.product.id}>
                    {lineItem.product.name}
                    <input value={lineItem.quantity} onChange={(e) => setProductQuantity(lineItem.product, parseInt(e.target.value))} />
                </li>
            ))}
        </ul>
    </div>
}

export default UserCart;
