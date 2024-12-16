export class AppError extends Error {
   code:number;
   constructor(code:number,errorMessage:string){
     super(errorMessage);
     this.code=code;
   }
   
}