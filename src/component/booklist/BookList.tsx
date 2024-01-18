import './BookList.css'
import {useBookDispatcher, useBookList} from "../../context/BookContext.tsx";
import {useEffect} from "react";
import {getAllBooks} from "../../service/book-service.ts";
import {Book} from "../book/Book.tsx";
import {useCategories} from "../../context/CategoryContext.tsx";

export const BookList = () => {
    const bookList = useBookList();
    const bookDispatcher = useBookDispatcher();
    const checkedCategories = useCategories();

    useEffect(() => {
        getAllBooks(checkedCategories).then(bookList => {
            bookDispatcher({type: 'set-list', bookList})
        }).catch(err => {
            alert("Failed to load tasks")
        });

        return () => {
            bookDispatcher({type: 'set-list', bookList: []});
        }
    }, [checkedCategories]);

    return (
        <div className="p-6">
            <ul className="flex justify-start items-start flex-wrap gap-3 list-none">
                {bookList.map(book =>
                    <Book key={book.id} {...book}/>
                )}
            </ul>
        </div>
    );
};