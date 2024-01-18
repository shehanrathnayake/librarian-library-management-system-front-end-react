import './Book.css';
import {BookDto} from "../../dto/BookDto.ts";
import {useId, useState} from "react";

export const Book = (book: BookDto) => {
    const id = useId();
    const [name, setName] = useState(book.name);
    const [author, setAuthor] = useState(book.author);
    const [available, setAvailable] = useState(book.available);
    const [bookCover, setBookCover] = useState(book.bookCover);

    return (
        <div
            className="max-w-[175px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src={bookCover} alt=""/>
            </a>
            <div className="p-2">
                <h5 className="mb-1 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <div className="mb-1 text-xs font-semibold text-gray-700 italic">By {author}</div>
                <div className={`${available ? 'text-green-800' : 'text-red-800'} text-bold text-xs pb-2`}>{available ? 'Available' : 'Not Available'}</div>
                <a href="#"
                   className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-[#3b00c1] rounded-lg hover:bg-purple-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#3b00c1] dark:hover:bg-purple-950 dark:focus:ring-blue-800">
                    View more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

    );
}