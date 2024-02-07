import './Header.css'
import React from "react";
import {useUser} from "../../context/UserContext.tsx";
import {useNavigate} from "react-router-dom";
import {Avatar, Dropdown} from "flowbite-react";

export const Header = () => {
    const user = useUser();
    const navigate = useNavigate();

    function onHandleRegisterBtnClick() {
        navigate('/app/register');
    }
    function onHandleLoginBtnClick() {
        navigate('/app/login');
    }

    return (
        <header className="h-[60px] w-full flex justify-center border-b">
            <div className="container flex justify-between items-center">
                <div className="flex w-auto h-[50px] items-center">
                    <img onClick={() => navigate('/app')} className="h-[40px] cursor-pointer"
                         src="/src/assets/logo/librarian-logo.png" alt="Librarian logo"/>
                </div>
                <div className="relative sign-in flex justify-end items-center gap-3">
                    <div className={`${user ? 'flex' : 'hidden'} user-image`}>
                        <Dropdown
                            label={<Avatar alt="User settings" size="md" rounded/>}
                            arrowIcon={false}
                            inline>
                            <Dropdown.Header>
                                <span className="block text-sm">{user?.name}</span>
                                <span className="block truncate text-sm font-medium">{user?.email}</span>
                            </Dropdown.Header>
                            <Dropdown.Item>Dashboard</Dropdown.Item>
                            <Dropdown.Item>Settings</Dropdown.Item>
                            <Dropdown.Item>Earnings</Dropdown.Item>
                            <Dropdown.Divider/>
                            <Dropdown.Item>Sign out</Dropdown.Item>
                        </Dropdown>
                    </div>
                    <button
                        className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                        onClick={onHandleLoginBtnClick}>
                        <span
                            className="relative px-4 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            {user ? 'Log out' : 'Log in'}
                        </span>
                    </button>
                    <button type="button" onClick={onHandleRegisterBtnClick}
                            className={`${user ? 'hidden' : 'block'} text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}>
                        Register
                    </button>
                </div>
            </div>
        </header>
    );
};