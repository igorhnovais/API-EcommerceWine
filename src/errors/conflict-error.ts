import { ApplicationError } from "../protocols.js";

export function conflictError(): ApplicationError{
    return{
        name: "Conflict Error",
        message: "Conflict Error"
    } ;
}