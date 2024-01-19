import './App.css'
import {UserProvider} from "./context/UserContext.tsx";
import {Header} from "./component/header/Header.tsx";
import {CategoryProvider} from "./context/CategoryContext.tsx";
import {Aside} from "./component/aside/Aside.tsx";
import {Main} from "./component/main/Main.tsx";

function App() {

  return (
    <>
        <UserProvider>
            <Header/>
            <div className="w-full flex justify-center">
                <div className="container w-full flex">
                    <CategoryProvider>
                        <Aside/>
                        <Main/>
                    </CategoryProvider>
                </div>
            </div>
        </UserProvider>

    </>
  )
}

export default App
