import './App.css'
import {Header} from "./component/header/Header.tsx";
import {Aside} from "./component/aside/Aside.tsx";
import {Main} from "./component/main/Main.tsx";
import {CategoryProvider} from "./context/CategoryContext.tsx";

function App() {

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
  )
}

export default App
