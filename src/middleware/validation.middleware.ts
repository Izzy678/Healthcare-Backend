import { Request, Response, NextFunction } from "express";
import * as joi from "joi";
import { BadRequestException } from "../common/error/http.error.";

export const ValidateUserInput =
  (schema: joi.Schema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      const { error } = schema.validate({...req.body, ...req.query , ...req.params});
      if (error) throw new BadRequestException(error.message);
      next();
    } catch (error) {
      next(error);
    }
  };
