// src/graphql/users/resolver.ts
import UserService, { type UserPayload } from "../../services/user.js";

const queries = {
    getUserToken: async (_: any, payload : {email: string; password: string }): Promise<string> => {
        const token = await UserService.getUserToken(
            payload
        );
        return token;
    }
}; // Add this

const mutations = {
    createUser: async (_: any, payload: UserPayload): Promise<string> => {
        const result = await UserService.createUser(payload);
        return `User created successfully ${result.id}`;
    }
};

export const resolver = {
    queries,
    mutations
};