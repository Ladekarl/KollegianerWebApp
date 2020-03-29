import { createAsyncAction } from "typesafe-actions";
import { UserModel, RegisterModel } from "GlobalTypes";

export const registerUserAsync = createAsyncAction(
    'REGISTER_USER_REQUEST',
    'REGISTER_USER_SUCCESS',
    'REGISTER_USER_FAILURE'
)<RegisterModel, UserModel, string>();