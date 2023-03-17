import productsRepositories from "../../repositories/products";

async function findProduts(){
    const products = await productsRepositories.findmanyProducts();
    return products;
}

const productsService = {
    findProduts
}

export default productsService;