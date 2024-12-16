import * as bcrypt from 'bcrypt'

export async function hashPassword(plainTextPassword:string):Promise<string> {
    const saltRounds = 10 ; //todo : get salt rounds from .env file
    const hashedPassword = await bcrypt.hash(plainTextPassword,10);
    return hashedPassword;
}

export async function comparePassword(myPlainTextPassword:string,hashedpassword:string):Promise<boolean>{
 const isValidPassword = await bcrypt.compare(myPlainTextPassword,hashedpassword)
 return isValidPassword;
}