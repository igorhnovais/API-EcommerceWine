import { ApplicationError } from "../protocols";

export function conflictError(): ApplicationError{
    return{
        name: "Conflict Error",
        message: "Conflict Error",
        status: 409
    } ;
}