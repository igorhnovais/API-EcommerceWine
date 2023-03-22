import { ApplicationError } from "../protocols";

export function badRequest(): ApplicationError{
    return{
        name: "Bad Request",
        message: "Bad Request",
        status: 400
    } ;
}