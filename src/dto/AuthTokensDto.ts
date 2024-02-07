export class AuthTokensDto {
    constructor(public access_token:string, public refresh_token:string) {
    }
}