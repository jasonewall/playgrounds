import Product from "@dtos/Product";
import { useQuery } from "react-query";

function getProducts(): Promise<Product[]> {
    return Promise.resolve([]);
}

function useProducts() {
    const result = useQuery(
        'products',
        getProducts,
    );
    return result
}

export default useProducts;
