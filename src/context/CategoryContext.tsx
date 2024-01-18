import {createContext, Dispatch, ReactNode, useContext, useReducer} from "react";

type Action = {
    type: "set-list",
    [property: string]: any;
}

const CategoryContext = createContext<string[]>([]);
const CategoryDispatcherContext = createContext<Dispatch<any>>(() => {});

function categoryReducer(categories: string[], action: Action) {
    switch (action.type) {
        case "set-list":
            return action.categories;
        default:
            return categories;
    }
}

export function CategoryProvider({children}:{children: ReactNode}) {
    const [categories, categoryDispatcher] = useReducer(categoryReducer, []);

    return(
        <CategoryContext.Provider value={categories}>
            <CategoryDispatcherContext.Provider value={categoryDispatcher}>
                {children}
            </CategoryDispatcherContext.Provider>
        </CategoryContext.Provider>
    )
}

export function useCategories() {
    return useContext(CategoryContext);
}

export function useCategoryDispatcher() {
    return useContext(CategoryDispatcherContext);
}