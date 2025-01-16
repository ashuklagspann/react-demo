
import { Product } from "./data/product";
import axios from "axios";

const fetchProductsDetails = async (productId: number) : Promise<Product>=> {
    const [productResponse, descriptionResponse] = await Promise.all([
       axios.get( `http://localhost:3000/api/products/${productId}`),
       axios.get( `http://localhost:3000/api/product-description/${productId}`)
    ]);

    const { title, id, discountPercentage, images, price, category  } = productResponse.data;
    const {description} = descriptionResponse.data;

    return {
        id,
        title,
        discountPercentage,
        images,
        description,
        price,
        category
    };
};

export const fetchAllProducts = async (productList: number[]): Promise<Product[]> => {
    const promises = productList.map(productId => fetchProductsDetails(productId));
    return Promise.all(promises);
}

