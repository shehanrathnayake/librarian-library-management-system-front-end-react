import {UserCredentialDto} from "../dto/UserCredentialDto.ts";
import {AuthTokensDto} from "../dto/AuthTokensDto.ts";
import {createNewUser, getUserDetails} from "./user-service.ts";
import {UserDto} from "../dto/UserDto.ts";

const API_URL = 'http://localhost:8080/api/v1/login';
export async function authenticateUser(userCredentialDto: UserCredentialDto) {
    const securityTokens = await (await fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(userCredentialDto)
    })).json() as AuthTokensDto;
    saveAuthTokens(securityTokens);
    return await getUserDetails(userCredentialDto.username);
}

export async function authenticateNewUser(userDto: UserDto) {
    const registeredUser = await createNewUser(userDto)
        .catch(error => {
            alert("Couldn't register the user. Try again.");
            throw new Error(error);
        });
    return await authenticateUser(new UserCredentialDto(registeredUser.id!, userDto.password))
        .catch(error => {
            alert("Couldn't login the user. Try again.");
            throw new Error(error);
        });
}

export function saveAuthTokens(token: AuthTokensDto) {
    window.localStorage.setItem('access_token', token.access_token);
    window.localStorage.setItem('refresh_token', token.refresh_token);
}

export function setAuthorizationHeader() {
    return 'Bearer ' + window.localStorage.getItem('access_token');
}