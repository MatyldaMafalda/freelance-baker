export enum Role {
    Baker = "Baker",
    Customer = "Customer",
}

export interface TokenPayload {
    userId: string;
    role: Role;
    email: string;
    exp: number;
    iat: number;
}
