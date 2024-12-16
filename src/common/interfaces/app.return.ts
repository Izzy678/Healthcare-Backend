export interface IAppResponse<T>{
    code?:number
    data?:T,
    message?:string
    headers?:any
}

export interface IDecodeToken<T> { 
  tokenData?:T,
  isExpired:boolean
}