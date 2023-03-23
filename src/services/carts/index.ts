import { unauthorizedError } from "../../errors";
import cartsRepositories from "../../repositories/carts";

async function postOneCart(user_id: number, id: number){
    await cartsRepositories.addProduct(user_id, id);
    return; 
}

async function getAllProducts(id: number){
    
    if (!id){
        throw unauthorizedError()
    }

    const products = await cartsRepositories.findManyProductsCart(id);
    return products;
}

const cartService = {
    postOneCart,
    getAllProducts
};

export default cartService;