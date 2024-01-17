import './Header.css'
import {useEffect, useState} from "react";
import {auth} from "../../../firebase.ts";
import {onAuthStateChanged} from "firebase/auth"
import {useUser} from "../../context/UserContext.tsx";

export const Header = () => {

    const user = useUser();
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [userProfile, setUserProfile] = useState<boolean>(false);

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                let image = user.photoURL;
                setImageUrl(image || undefined);
            } else {
                setImageUrl("")
            }
        });
        return ()=> unsubscribed();
    }, []);

    function onHandleUserImageClick() {
        setUserProfile(!userProfile);
    }

    return (
        <header className="h-[60px] w-full flex justify-center border-b">
            <div className="container flex justify-between items-center">
                <div className="flex w-auto h-[50px] items-center">
                    <img className="h-[40px] cursor-pointer" src="/src/assets/logo/librarian-logo.png" alt="Librarian logo"/>
                </div>
                <div className="relative sign-in flex justify-end items-center gap-3">
                    <div onClick={onHandleUserImageClick} className={`${user ? 'block' : 'block'} user-image`}>
                        <img className="object-cover" src={user ? imageUrl : ""} alt="User profile image"/>
                    </div>
                    <div
                        className={`${userProfile ? 'block' : 'hidden'} absolute top-[65px] max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700`}>
                        <p className="mb-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                            {user?.displayName}Shehan Rathnayake
                        </p>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                            {user?.email}shehandj.swd@gmail.com
                        </p>
                        <a href="#"
                           className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#3b00c1] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            User Profile
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                            </svg>
                        </a>
                    </div>
                    <button
                        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                        <span
                            className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            {user ? 'Log out' : 'Log in'}
                        </span>
                    </button>
                    <button type="button"
                            className={`${user ? 'hidden' : 'block'} text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                        Register
                    </button>
                </div>
            </div>
        </header>
    );
};