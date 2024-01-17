import './Book.css';
import {BookDto} from "../../dto/BookDto.ts";

export const Book = (book: BookDto) => {


    return (
        <div
            className="max-w-[175px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg" src="https://images.ctfassets.net/usf1vwtuqyxm/24YWmI4UcyoMwj7wdKrEcL/374de1941927db12bd844fb197eab11f/English_Harry_Potter_3_Epub_9781781100233.jpg" alt=""/>
            </a>
            <div className="p-2">
                <h5 className="mb-1 text-sm font-semibold tracking-tight text-gray-900 dark:text-white">{book.name}Harry Potter - Prisoner of Azkaban</h5>
                <div className={`${book.isAvailable ? 'text-green-800' : 'text-red-800'} text-bold text-xs pb-2`}>{book.isAvailable ? 'Available' : 'Not Available'}</div>
                <a href="#"
                   className="inline-flex items-center px-3 py-1.5 text-sm font-medium text-center text-white bg-[#3b00c1] rounded-lg hover:bg-purple-950 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#3b00c1] dark:hover:bg-purple-950 dark:focus:ring-blue-800">
                    View more
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>

    );
}