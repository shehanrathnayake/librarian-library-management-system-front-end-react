import './Aside.css'
import {Checkbox, Label} from "flowbite-react";
import {useCategoryDispatcher} from "../../context/CategoryContext.tsx";
import {useEffect, useState} from "react";

export const Aside = () => {
    const categoryDispatcher = useCategoryDispatcher();
    const [checkedCategories, setCheckedCategories] = useState<string[]>([]);

    const allCategories: string[] = ['entertainment','biographies','business',
        'comics','technology','fantasy','health','history','sci-fi','kids'];

    const onHandleCheckboxChanged = (category: string) => {
        if (checkedCategories.includes(category)) {
            setCheckedCategories((prevCategories) =>
                prevCategories.filter((c)=> c !== category)
            )
        } else {
            setCheckedCategories((prevCategories) => [...prevCategories, category]);
        }

    };

    useEffect(() => {
        categoryDispatcher({ type: 'set-list', categories: checkedCategories });
    }, [checkedCategories]);

    return (

        <div className="w-[20%] border-e h-[calc(100vh-5rem)] ps-1">
            <h6 className="mb-5 pt-6 font-semibold">Book Categories</h6>
            <div className="flex max-w-md flex-col gap-4" id="checkbox">
                {
                    allCategories.map(category =>
                        <div key={category} className="flex items-center gap-2">
                            <Checkbox onChange={() => onHandleCheckboxChanged(category)} id={category}/>
                            <Label htmlFor={category} className="flex">{category.toUpperCase()}</Label>
                        </div>
                    )
                }
            </div>
        </div>
    );
};