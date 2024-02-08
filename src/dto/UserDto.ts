export class UserDto {
    constructor(public id: string | null, public name: string,
                public email: string, public password: string,
                public address: string, public contact: string, public roles: string) {
    }
}