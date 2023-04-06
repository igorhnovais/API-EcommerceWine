import joi from "joi";

export const newProduct = joi.object({
    name: joi.string().min(3).required(),
    image: joi.string().required(),
    description: joi.string().min(6),
    type: joi.string(),
    alcohol: joi.string(),
    value: joi.number().required(), 
    type_product: joi.string()
});