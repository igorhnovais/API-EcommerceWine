import cartsRepositories from "../../repositories/carts";

async function postOneCart(user_id: number, id: number){
    await cartsRepositories.addProduct(user_id, id);
    return; 
}

const cartService = {
    postOneCart
};

export default cartService;