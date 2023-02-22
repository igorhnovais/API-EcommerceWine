import bcrypt from "bcrypt";
import usersRepositories from "../repositories/users/index.js"
import { conflictError, unauthorizedError } from "../errors/index.js";

async function findEmailExists(email: string, name: string, password:string){
    const emailExists = await usersRepositories.findEmail(email);

    if(emailExists){
        throw conflictError();
    }

    const passwordhash = bcrypt.hashSync(password, 12);

    await usersRepositories.createUser(email, name, passwordhash);
}

async function findUserRegistration(email: string, password:string){
    const account = await usersRepositories.findEmail(email);

    if(!account){
        throw unauthorizedError();
    }

    const passwordHashed = bcrypt.compareSync(password, account.password);
    
    if(!passwordHashed){
        throw unauthorizedError();
    }


}

const usersServices = {
    findEmailExists,
    findUserRegistration
}

export default usersServices