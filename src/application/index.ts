import { GetUserHandler } from "./users/get-user.query";
import { CreateUserHandler } from "./users/create-user.command";

export const queries = [GetUserHandler];
export const commands = [CreateUserHandler];