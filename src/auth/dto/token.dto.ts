export interface TokenDto {
 user:string
 userName:string
 email:string
 session?:string
 //:todo userRole
}

export interface RefreshTokenDto extends Pick<TokenDto,'user'>{}