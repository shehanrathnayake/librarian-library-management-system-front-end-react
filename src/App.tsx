import './App.css'
import {Header} from "./component/header/Header.tsx";
import {Outlet, useNavigate} from "react-router-dom";
import {BookProvider} from "./context/BookContext.tsx";
import {useEffect} from "react";
import {useUser, useUserDispatcher} from "./context/UserContext.tsx";
import {getLoggedUser} from "./service/auth-service.ts";

function App() {

    const user = useUser();
    const userDispatcher = useUserDispatcher();
    const navigate = useNavigate();
    useEffect(() => {
        if(!user) {
            getLoggedUser().then(user => {userDispatcher({type:'sign-in', user})})
                .catch(() => navigate('/app/login'))
        }
    }, []);

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
