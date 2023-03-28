import { conflictError, notFound, unauthorizedError } from "../../errors";
import cartsRepositories from "../../repositories/carts";
import usersRepositories from "../../repositories/users";
import { Stripe } from "stripe";

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
    if(!id){
        throw notFound();
    }
    
    const productCart = await cartsRepositories.findFirstproductCart(id);

    if(!productCart){
        throw notFound()
    }
    
    await cartsRepositories.deleteProduct(id);
    return;
}

async function getBalanceCart(id:number){
    const balance = await cartsRepositories.findBalance(id);
    return balance;
}

async function paymentWithStripe(userId: number){
    
    try{

        const balance = await cartsRepositories.findBalance(userId);
        const userName = await usersRepositories.findNameUser(userId)


        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2022-11-15" });

        const customer = await stripe.customers.create({
        metadata: {
            userId: userId,
        },
        });

        const session = await stripe.checkout.sessions.create({
            line_items: [
            {
                price_data: {
                currency: "brl",
                product_data: {
                    name: userName,
                },
                unit_amount: balance[0].balance,
                },
                quantity: 1,
            },
            ],
            customer: customer.id,
            mode: "payment",
            success_url: `${process.env.CLIENT_URL}/products`,
            cancel_url: `${process.env.CLIENT_URL}/products`,
        });

        if (session.url) {
            return session.url;
        } else {
            return notFound();
        }
    } catch (error) {
      console.log(error);
    }
}



const cartService = {
    postOneCart,
    getAllProducts,
    deleteProductCart,
    getBalanceCart,
    paymentWithStripe
};

export default cartService;