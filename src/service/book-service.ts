const API_BASE_URL = 'http://localhost:8080/api/v1/books';

export async function getAllBooks(category: string[]) {
    let stringUrl = `${API_BASE_URL}?`;
    if (category.length > 0) {
        category.map(category => {
            stringUrl =  stringUrl + `category=${category}&`
        });
    } else stringUrl = stringUrl + 'category=all&'
    stringUrl = stringUrl.substring(0,stringUrl.length-1);

    return await (await fetch(stringUrl)).json();
}

export async function getBookDetails(bookId: string) {
    let stringUrl = `${API_BASE_URL}/`+ bookId;
    return await (await fetch(stringUrl)).json();
}