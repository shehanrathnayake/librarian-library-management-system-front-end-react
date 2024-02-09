import {UserCredentialDto} from "../dto/UserCredentialDto.ts";
import {AuthTokensDto} from "../dto/AuthTokensDto.ts";
import {createNewUser, getUserDetails} from "./user-service.ts";
import {UserDto} from "../dto/UserDto.ts";
import {jwtDecode} from "jwt-decode";

const API_URL = 'http://localhost:8080/api/v1/login';
const API_REFRESH_TOKEN_URL = 'http://localhost:8080/api/v1/refresh-token';

export async function getLoggedUser() {
    const accessToken = window.localStorage.getItem("access_token");
    if (!accessToken) return null;
    else {
        const loggedUser = await tryToGetLoggedUser(accessToken);
        if (!loggedUser) {
            const newAccessToken = await getNewTokenViaRefreshToken();
            if (!newAccessToken) return null;
            else {
                return await tryToGetLoggedUser(newAccessToken);
            }
        } else return loggedUser;
    }
}

async function tryToGetLoggedUser(accessToken: string) {
    let authenticatedUserId: string = jwtDecode(accessToken).sub!;
    return getUserDetails(authenticatedUserId)
        .then(loggedUser => {return loggedUser})
        .catch(()=> {return null});
}
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

async function getNewTokenViaRefreshToken() {
    try {
        const securityTokens = await (await fetch(API_REFRESH_TOKEN_URL, {
            headers: {'Authorization': 'Bearer ' + window.localStorage.getItem("refresh_token")}
        })).json() as AuthTokensDto;
        saveAuthTokens(securityTokens)
        return securityTokens.access_token;
    } catch(e) {
        return null;
    }
}

export function logoutUser() {
    window.localStorage.removeItem("access_token");
    window.localStorage.removeItem("refresh_token");
}

export function saveAuthTokens(token: AuthTokensDto) {
    window.localStorage.setItem('access_token', token.access_token);
    window.localStorage.setItem('refresh_token', token.refresh_token);
}

export function setAuthHeader() {
    return 'Bearer ' + window.localStorage.getItem('access_token');
}