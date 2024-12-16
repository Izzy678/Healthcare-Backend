import { AppError } from "./app.error";

export class BadRequestException extends AppError {
  constructor(message: string){
    super(400, message);
  }
}

export class ConflictException extends AppError {
  constructor(message: string) {
    super(409,message);
  }
}

export class NotFoundException extends AppError {
  constructor(message: string) {
    super(404,message);
  }

}

export class UnAuthorizedException extends AppError {
  constructor(message: string) {
    super(401,message);
  }
}

export class InternalServalError extends AppError {
    constructor(){
      super(500,"Internal Serval Error");
    }
}
