import {UserDto} from "../dto/UserDto.ts";

const API_BASE_URL = 'http://localhost:8080/api/v1/users';

export async function userExistByEmail(email: string): Promise<UserDto> {
    let stringUrl = `${API_BASE_URL}?email=${email}`;
    return await (await fetch(stringUrl)).json() as UserDto;
}

export async function userExistByContact(contact: string): Promise<UserDto> {
    let stringUrl = `${API_BASE_URL}?contact=${contact}`;
    return await (await fetch(stringUrl)).json() as UserDto;
}

export async function createNewUser(newUser: UserDto) {
    return await (await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {'Content-Type' : "application/json"},
        body: JSON.stringify(newUser)
    })).json() as UserDto;
}

export async function getUserDetails(userId: string){
    return await (await fetch(`${API_BASE_URL}/${userId}`)).json() as UserDto;
}