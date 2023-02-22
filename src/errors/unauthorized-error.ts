import { ApplicationError } from "../protocols.js";

export function unauthorizedError(): ApplicationError{
    return{
        name: "Unauthorized Error",
        message: "Unauthorized Error",
        status: 401
    } ;
}