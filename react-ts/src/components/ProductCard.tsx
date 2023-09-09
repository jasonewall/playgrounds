import Product from "@dtos/Product";
import useCart from "@entities/useCart";

function ProductCard({ product }: { product: Product }) {
    return <>
        <div className="border-slate-600 border-2">
            <p className="font-bold text-center">{ product.name }</p>
            <p className="text-end">${ product.price }</p>
            <CartControls product={product} />
        </div>
    </>
}

function CartControls({ product }: { product: Product }) {
    const cart = useCart();

    const addToCart = () => {
        cart.add(product, 1);
    }

    return (<button onClick={addToCart}>Add To Cart</button>);
}

export default ProductCard;
