

const API_BASE_URL = 'http://localhost:8080/api/v1/books';

export async function getAllBooks(category: string) {
    let stringUrl;
    if (category == 'all') {
        stringUrl = `${API_BASE_URL}`;
    } else {
        stringUrl = `${API_BASE_URL}?category=${category}`;
    }

    return await (await fetch(stringUrl)).json();
}
