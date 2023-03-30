import productsRepositories from "../../repositories/products";
import { badRequest, notFound } from "../../errors";

async function findProduts(){
    const products = await productsRepositories.findmanyProducts();
    return products;
}

async function findOneProduct(id:number){

    if (!id){
        throw badRequest();
    }

    const product = await productsRepositories.findFirstProduct(id);

    if(!product){
        throw notFound()
    }

    return product;

}

async function findOnlyWines(){
    return await productsRepositories.findWines();
}

async function findOnlyCups(){
    return await productsRepositories.findCups();
}

const productsService = {
    findProduts,
    findOneProduct,
    findOnlyWines,
    findOnlyCups
}

export default productsService;