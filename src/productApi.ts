
import { Product } from "./data/product";


export const fetchProducts = async (): Promise<Product[]> => {
    try {
        const response = await fetch('https://dummyjson.com/products');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data.products; // Assuming the API returns an object with a 'products' array
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};
