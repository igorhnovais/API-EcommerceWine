import { notFound, unauthorizedError } from "../../errors";
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

async function deleteProductCart(id: number){
    const productCart = await cartsRepositories.findFirstproductCart(id);

    if(!productCart){
        throw notFound()
    }
    
    await cartsRepositories.deleteProduct(id);
    return;
}

const cartService = {
    postOneCart,
    getAllProducts,
    deleteProductCart
};

export default cartService;