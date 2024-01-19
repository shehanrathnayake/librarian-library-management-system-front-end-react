import {Header} from "../header/Header.tsx";
import {CategoryProvider} from "../../context/CategoryContext.tsx";
import {Aside} from "../aside/Aside.tsx";
import {Main} from "../main/Main.tsx";

export const Home = () => {
    return (
        <>
            <Header/>
            <div className="w-full flex justify-center">
                <div className="container w-full flex">
                    <CategoryProvider>
                        <Aside/>
                        <Main/>
                    </CategoryProvider>
                </div>
            </div>
        </>
    );
};