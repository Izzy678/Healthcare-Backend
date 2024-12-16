import { User } from "../model/user.model";

export interface IcreateUser extends Pick<User,'firstName'|'lastName'|'email'|'password'>{}

export interface ISignIn extends Pick<User,'email'|'password'>{}



export interface IUpdateUser extends IcreateUser {
     id:string
    refreshToken:string
}