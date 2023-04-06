export type users = {
    id?: string,
    email: string,
    name?: string,
    password: string,
    confirmPassword?:string
};

export type product = {
    name: string,
    image: string,
    description?: string,
    type?: string,
    alcohol?: string,
    value: number,
    type_product?: string,
}
