import { Request, Response, NextFunction } from "express";
import { decodeToken } from "../auth/service/token.service";
import { NotFoundException, UnAuthorizedException } from "../common/error/http.error.";


const TokenMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (!req.headers.authorization) return next();

    const authorizationHeader = req.headers.authorization;

    const [bearer, accessToken] = authorizationHeader.split(' ');

    if (bearer !== 'Bearer') {
      throw new UnAuthorizedException('please provide a Bearer token');
    }
    
    if (!accessToken)  return next();
    
    const { tokenData, isExpired } = await decodeToken(accessToken);
    if (isExpired) throw new UnAuthorizedException('Error completing request. Token expired')

    res.locals.user = tokenData;
    return next();

  } catch (error) {
    next(error)
  }
};

export default TokenMiddleware;
