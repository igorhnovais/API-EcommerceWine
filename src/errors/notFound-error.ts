import { ApplicationError } from "../protocols";

export function notFound(): ApplicationError{
    return{
        name: "Not Found",
        message: "Not Found",
        status: 404
    } ;
}