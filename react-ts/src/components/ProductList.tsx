import useProducts from "@entities/useProducts";
import ProductCard from "./ProductCard";

function ProductList() {
    const { data: products } = useProducts();

    return  <>
        <h1 className="text-center text-4xl font-extrabold">Products</h1>
        <div className="grid grid-cols-4 gap-4">
            {products && products.map(product => (<ProductCard product={product} />))}
        </div>
    </>
}

export default ProductList;
