import './App.css'
import {Header} from "./component/header/Header.tsx";
import {Outlet} from "react-router-dom";
import {BookProvider} from "./context/BookContext.tsx";

function App() {

  return (
    <>
        <Header/>
        <div className="w-full flex justify-center">
            <div className="container w-full flex">
                <BookProvider>
                    <Outlet />
                </BookProvider>
            </div>
        </div>
    </>
  )
}

export default App
