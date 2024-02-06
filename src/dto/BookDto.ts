export class BookDto {
    constructor(public id: string | null, public isbnNumber: string,
                public name: string, public description: string,
                public bookCover: string, public author: string,
                public category: string, public totalCopies: number, public availableCopies: number) {
    }
}