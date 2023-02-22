import bcrypt from "bcrypt";
import usersRepositories from "../repositories/index.js"
import { conflictError } from "../errors/conflict-error.js";

async function findEmailExists(email: string, name: string, password:string){
    const emailExists = await usersRepositories.findEmail(email);

    if(emailExists){
        throw conflictError();
    }

    const passwordhash = bcrypt.hashSync(password, 12);

    await usersRepositories.createUser(email, name, passwordhash);
}



const usersServices = {
    findEmailExists
}

export default usersServices