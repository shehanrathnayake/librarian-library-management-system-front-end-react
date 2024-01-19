import './App.css'
import {Home} from "./component/home/Home.tsx";
import {UserProvider} from "./context/UserContext.tsx";

function App() {

  return (
    <>
        <UserProvider>
            <Home/>
        </UserProvider>

    </>
  )
}

export default App
