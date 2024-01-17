import './App.css'
import {Header} from "./component/header/Header.tsx";
import {Aside} from "./component/aside/Aside.tsx";
import {Main} from "./component/main/Main.tsx";

function App() {

  return (
    <>
        <Header/>
        <div className="w-full flex justify-center">
            <div className="container w-full flex">
                <Aside/>
                <Main/>
            </div>

        </div>
    </>
  )
}

export default App
