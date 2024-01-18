import './Main.css';
import {BookList} from "../booklist/BookList.tsx";
import {BookProvider} from "../../context/BookContext.tsx";

export const Main = () => {
    return (
        <div className="w-[80%]">
            <BookProvider>
                <BookList/>
            </BookProvider>
        </div>
    );
};