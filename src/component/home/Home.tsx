import {Aside} from "../aside/Aside.tsx";
import {Main} from "../main/Main.tsx";
import {CategoryProvider} from "../../context/CategoryContext.tsx";

export const Home = () => {
    return (
        <>
            <CategoryProvider>
                <Aside/>
                <Main/>
            </CategoryProvider>
        </>
    );
};