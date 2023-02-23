import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";
import usersRepositories from "../repositories/users/index";
import sessionsRepositories from "../repositories/sessions/index";
import { conflictError, unauthorizedError } from "../errors/index";

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

    const idUser = account.id;
    const newToken = uuid();

    await sessionsRepositories.upsertToken(idUser, newToken);

    return {token: newToken};
}

const usersServices = {
    findEmailExists,
    findUserRegistration
}

export default usersServices;