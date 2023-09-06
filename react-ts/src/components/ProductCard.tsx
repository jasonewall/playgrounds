import Product from "@dtos/Product";
import useCart from "@entities/useCart";

function ProductCard({ product }: { product: Product }) {
    const cart = useCart();

    const addToCart = () => {
        cart.add(product);
    }
    return <>
        <div className="border-slate-600 border-2">
            <p className="font-bold text-center">{ product.name }</p>
            <p className="text-end">${ product.price }</p>
            <button onClick={addToCart}>Add To Cart</button>
        </div>
    </>
}

export default ProductCard;
