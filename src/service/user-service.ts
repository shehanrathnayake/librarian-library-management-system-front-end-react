import {UserDto} from "../dto/UserDto.ts";
import {setAuthHeader} from "./auth-service.ts";

const API_URL = 'http://localhost:8080/api/v1/users';

export async function userExistByEmail(email: string): Promise<UserDto> {
    let stringUrl = `${API_URL}?email=${email}`;
    return await (await fetch(stringUrl)).json() as UserDto;
}

export async function userExistByContact(contact: string): Promise<UserDto> {
    let stringUrl = `${API_URL}?contact=${contact}`;
    return await (await fetch(stringUrl)).json() as UserDto;
}

export async function createNewUser(newUser: UserDto) {
    return await (await fetch(API_URL, {
        method: 'POST',
        headers: {'Content-Type' : "application/json"},
        body: JSON.stringify(newUser)
    })).json() as UserDto;
}

export async function getUserDetails(userId: string){
    return await (await fetch(`${API_URL}/${userId}`, {
        headers: {'Authorization' : setAuthHeader()},
    })).json() as UserDto;
}