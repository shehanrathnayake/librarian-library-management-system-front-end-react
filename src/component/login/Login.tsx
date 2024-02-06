import {Card} from "flowbite-react/lib/esm/components/Card/Card";
import {Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";
import {getUserDetails} from "../../service/user-service.ts";
import {useUser, useUserDispatcher} from "../../context/UserContext.tsx";

export const Login = () => {
    const [nameValue, setNameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const loggedUser = useUser();
    const userDispatcher = useUserDispatcher();
    async function onClickBtnLogin() {
        await getUserDetails(nameValue)
            .then(user => {
                userDispatcher({type: 'sign-in', user: user});
            }).catch(error => {
                alert("onClickLogin: " + nameValue + error);
        });
    }
    return (
        <>
            <div className="w-[100%] flex flex-col justify-center items-center">
                <div className="registration-step1">
                    <Card>
                        <h1 className="w-[100%] text-3xl font-semibold">Login</h1>
                        <form className="flex max-w-md flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="userId" value="Your name"/>
                                </div>
                                <TextInput
                                    id="userId"
                                    placeholder="Eg: U000000"
                                    required
                                    value={nameValue}
                                    onChange={(e) => {
                                        setNameValue(e.target.value)
                                    }}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="password" value="Your email"/>
                                </div>
                                <TextInput
                                    id="password"
                                    placeholder="Eg: *******"
                                    required
                                    type="password"
                                    value={passwordValue}
                                    onChange={(e) => {
                                        setPasswordValue(e.target.value)
                                    }}
                                />
                            </div>
                            <Button onClick={/*(e) => {*/
                                // e.preventDefault();
                                onClickBtnLogin
                            } type="button">Login</Button>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    );
};