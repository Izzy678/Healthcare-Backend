import jwt from "jsonwebtoken";
import { TokenDto } from "../dto/token.dto";
import {
  BadRequestException,
  NotFoundException,
} from "../../common/error/http.error.";
import { User } from "../../users/model/user.model";
import { config } from "../../config/environment.config";


const { jwtSecretKey, accessTokenTTL, refreshTokenTTL } = config.TOKEN;

export function generateTokens(user: User) {
  const accessTokenPayload = {
    email: user.email,
    user: user.id
  };
  const accessToken = jwt.sign(accessTokenPayload, jwtSecretKey, {
    expiresIn: accessTokenTTL,
  });

  const refreshTokenPayload = {
    user: user.id,
  };

  const refreshToken = jwt.sign(refreshTokenPayload, jwtSecretKey, {
    expiresIn: refreshTokenTTL,
  });

  return {
    accessToken,
    refreshToken,
  };
}

export async function decodeToken(token: string): Promise<{
  tokenData: TokenDto | undefined;
  isExpired: boolean;
}> {
  try {
    const tokenData = jwt.verify(token, jwtSecretKey) as unknown as TokenDto;
    return {
      tokenData: tokenData,
      isExpired: false,
    };
  } catch (error: any) {
    if (error.message === "jwt expired") {
      return {
        tokenData: undefined,
        isExpired: true,
      };
    } else {
      return {
        isExpired: false,
        tokenData: undefined,
      };
    }
  }
}

export async function reIssueAccessTokens(refreshToken: string) {
  const { tokenData, isExpired } = await decodeToken(refreshToken);
  if (isExpired || !tokenData)

    throw new BadRequestException(
      "Invalid refresh token. Please login to get a new access token."
    );
  const user = await User.findOne({ where: { id: tokenData.user } });
  
    if (!user) throw new NotFoundException("User not found.");
    return generateTokens(user);
  }