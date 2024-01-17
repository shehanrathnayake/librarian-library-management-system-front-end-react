import {createContext, ReactNode, useContext, useReducer} from "react";
import {User} from "firebase/auth"

type Action = {
    type: "sign-in" | "sign-out",
    [property: string]: any
}

const UserContext = createContext<User | undefined>(undefined);
const UserDispatcherContext = createContext<React.Dispatch<Action>>(() => {});

function userReducer(user: User, action: Action) {
    if (action.type === 'sign-in') {
        return action.user
    } else {
        return null;
    }
}
export function UserProvider({children}:{children: ReactNode}) {
    const [user, userDispatcher] = useReducer(userReducer, null);

    return (<UserContext.Provider value={user}>
        <UserDispatcherContext.Provider value={userDispatcher}>
            {children}
        </UserDispatcherContext.Provider>
    </UserContext.Provider>)
}

export function useUser() {
    return useContext(UserContext);
}

export function useUserDispatcher() {
    return useContext(UserDispatcherContext);
}