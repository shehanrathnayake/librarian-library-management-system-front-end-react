import {Card} from "flowbite-react/lib/esm/components/Card/Card";
import {Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";
import {useUserDispatcher} from "../../context/UserContext.tsx";
import {authenticateUser} from "../../service/auth-service.ts";
import {UserCredentialDto} from "../../dto/UserCredentialDto.ts";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [nameValue, setNameValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const userDispatcher = useUserDispatcher();
    const navigate = useNavigate();
    async function onClickBtnLogin() {
        await authenticateUser(new UserCredentialDto(nameValue, passwordValue))
            .then(loggedUser => {
                userDispatcher({type: 'sign-in', user: loggedUser});
                navigate('/app');
            }).catch(error => {
                alert(error);
            });
    }
    return (
        <>
            <div className="w-[100%] flex flex-col justify-center items-center pt-6">
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
                                <Label htmlFor="password" value="Enter password"/>
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
                        <Button onClick={onClickBtnLogin} type="button">Login</Button>
                    </form>
                </Card>
            </div>
        </>
    );
};