export class IssueDto {
    constructor(public id: string | null, public issuedDate: Date,
                public status: string, public renews: Number,
                public issuedEmployee: string | null, public bookId: string, public userId: string) {

    }
}