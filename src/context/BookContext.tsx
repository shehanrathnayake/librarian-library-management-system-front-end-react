import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {BookDto} from "../dto/BookDto.ts";

type Action = {
    type: "set-list",
    [property: string]: any
}

const BookContext = createContext<BookDto[]>([]);
const BookDispatcherContext = createContext<React.Dispatch<any>>(()=>{});

function bookReducer(bookList: BookDto[], action: Action) {
    if (action.type === 'set-list') return action.bookList;
    else return bookList;
}

export function BookProvider({children}:{children: ReactNode}) {
    const [bookList, bookDispatcher] = useReducer(bookReducer, []);
    return(
        <BookContext.Provider value={bookList}>
            <BookDispatcherContext.Provider value={bookDispatcher}>
                {children}
            </BookDispatcherContext.Provider>
        </BookContext.Provider>
    );
}

export function useBookList() {
    return useContext(BookContext);
}

export function useBookDispatcher() {
    return useContext(BookDispatcherContext);
}