import React, {createContext, ReactNode, useContext, useReducer} from "react";
import {UserDto} from "../dto/UserDto.ts";

type Action = {
    type: "sign-in" | "sign-out",
    [property: string]: any
}

const UserContext = createContext<UserDto | null>(null);
const UserDispatcherContext = createContext<React.Dispatch<Action>>(() => {});

function userReducer(user: UserDto,action: Action) {
    if (action.type === 'sign-in') {
        alert(action.user);
        console.log(action);
        return action.user
    } else {
        alert('No user');
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