export class BookDto {
    constructor(public id: string | null, public name: string,
                public description: string,public isbnNumber: string,
                public bookCover: string, public author: string,
                public category: string, public available: boolean | string) {
    }
}