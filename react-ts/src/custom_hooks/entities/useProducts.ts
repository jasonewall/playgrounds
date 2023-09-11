import Product from "@dtos/Product";
import { useQuery } from "react-query";

function getProducts(): Promise<Product[]> {
    return Promise.resolve([
        { id: 1, price: 29.99, name: 'Soap' },
        { id: 2, price: 299.99, name: 'Stereo' },
    ].map(productAttributes => new Product(productAttributes)));
}

function useProducts() {
    const result = useQuery(
        'products',
        getProducts,
    );
    return {
        state: result,
        products: result.data ?? [],
    }
}

export default useProducts;
