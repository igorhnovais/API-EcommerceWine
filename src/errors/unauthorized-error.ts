import { ApplicationError } from "../protocols";

export function unauthorizedError(): ApplicationError{
    return{
        name: "Unauthorized Error",
        message: "Unauthorized Error",
        status: 401
    } ;
}