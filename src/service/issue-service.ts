import {IssueDto} from "../dto/IssueDto.ts";

const API_BASE_URL = 'http://localhost:8080/api/v1/issues';

export async function createNewIssue(issueDto: IssueDto) {
    issueDto.id = null;
    console.log(issueDto);
    return await (await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(issueDto)
    })).json() as IssueDto;
}