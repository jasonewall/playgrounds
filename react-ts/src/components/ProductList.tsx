import useProducts from "@entities/useProducts";
import ProductCard from "./ProductCard";

function ProductList() {
    const { products } = useProducts();

    return  <div className="ml-20 mr-20">
        <h1 className="text-center text-4xl font-extrabold">Products</h1>
        <div className="grid grid-cols-4 gap-4">
            {products.map(product => (<ProductCard key={product.id} product={product} />))}
        </div>
    </div>
}

export default ProductList;
