import './Main.css';
import {BookList} from "../booklist/BookList.tsx";

export const Main = () => {
    return (
        <div className="w-[80%]">
            <BookList/>
        </div>
    );
};