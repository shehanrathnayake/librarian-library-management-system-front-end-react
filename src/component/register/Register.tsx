import './Register.css';
import {Card} from "flowbite-react/lib/esm/components/Card/Card";
import {useUserDispatcher} from "../../context/UserContext.tsx";
import {Button, Label, TextInput} from "flowbite-react";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {UserDto} from "../../dto/UserDto.ts";
import {authenticateNewUser} from "../../service/auth-service.ts";

export const Register = () => {

    const userDispatcher = useUserDispatcher();

    const [name, setName] = useState("");
    const [nameMessage, setNameMessage] = useState("");

    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");

    const [address, setAddress] = useState("");
    const [addressMessage, setAddressMessage] = useState("");

    const [contact, setContact] = useState("");
    const [contactMessage, setContactMessage] = useState("");

    const [password, setPassword] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("")

    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordMessage, setConfirmPasswordMessage] = useState("");

    const navigate = useNavigate()

    function onChangeNameValue(e: any) {
        let newName = e.target.value;
        setName(newName);
        if (newName.trim() == "") setNameMessage("Name cannot be empty");
        else if (!newName.trim().match("^[A-Za-z ]+$")) setNameMessage("Invalid name");
        else setNameMessage("");
    }
    function onChangeEmailValue(e: any) {
        let newEmail = e.target.value;
        setEmail(newEmail);
        if (newEmail.trim() == "") setEmailMessage("Email cannot be empty");
        else if (!newEmail.trim().match("^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$")) setEmailMessage("Invalid email");
        else setEmailMessage("");
    }
    function onChangeAddressValue(e: any) {
        let newAddress = e.target.value;
        setAddress(newAddress);
        if (newAddress.trim() == "") setAddressMessage("Address cannot be empty");
        else if (!newAddress.trim().match("^[A-Za-z0-9/,. -]+$")) setAddressMessage("Invalid address");
        else setAddressMessage("");
    }
    function onChangeContactValue(e: any) {
        let newContact = e.target.value;
        setContact(newContact);
        if (newContact.trim() == "") setContactMessage("Contact cannot be empty");
        else if (!newContact.trim().match("^\\d+$")) setContactMessage("Invalid contact number");
        else setContactMessage("");
    }
    function onChangePasswordValue(e: any) {
        let newPassword = e.target.value;
        setPassword(newPassword);
        if (newPassword.trim() == "") setPasswordMessage("Password cannot be empty");
        else if (!newPassword.trim().match("^[A-Za-z0-9. ]+$")) setPasswordMessage("Invalid password");
        else setPasswordMessage("");
    }
    function onChangeConfirmPasswordValue(e: any) {
        let newConfirmPassword = e.target.value;
        setConfirmPassword(newConfirmPassword);
        if (newConfirmPassword.trim() == "") setConfirmPasswordMessage("Password confirmation cannot be empty");
        else if (newConfirmPassword !== confirmPassword) setConfirmPasswordMessage("Password should be matched");
        else setConfirmPasswordMessage("");
    }
    async function onClickBtnRegister() {
        await authenticateNewUser(new UserDto(null, name, email, password, address, contact, "member"))
            .then(loggedUser => {
                userDispatcher({type: 'sign-in', user: loggedUser});
                navigate('/app');
            }).catch(error => {userDispatcher({type: 'sign-in', user: null})});
    }
    return (
        <div className="w-[100%] flex flex-col justify-center items-center pt-6">
            <Card>
                <h1 className="w-[100%] text-3xl font-semibold">Register</h1>
                <form className="flex max-w-md flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name" color={`${nameMessage ? 'failure' : ''}`} value="Your name"/>
                        </div>
                        <TextInput
                            id="name"
                            placeholder="Eg: Shehan Rathnayake"
                            required
                            pattern="^[A-Za-z. ]+$"
                            value={name}
                            color={`${nameMessage ? 'failure' : ''}`}
                            onChange={onChangeNameValue}
                            helperText={
                                <>
                                    {nameMessage}
                                </>
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email" color={`${emailMessage ? 'failure' : ''}`} value="Your email"/>
                        </div>
                        <TextInput
                            id="email"
                            placeholder="Eg: shehanrathnayake@email.com"
                            required
                            color={`${emailMessage ? 'failure' : ''}`}
                            type="email"
                            value={email}
                            onChange={onChangeEmailValue}
                            helperText={
                                <>
                                    {emailMessage}
                                </>
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="address" color={`${addressMessage ? 'failure' : ''}`} value="Your address"/>
                        </div>
                        <TextInput
                            id="address"
                            placeholder="Eg: Colombo, Sri Lanka"
                            required
                            color={`${addressMessage ? 'failure' : ''}`}
                            value={address}
                            onChange={onChangeAddressValue}
                            helperText={
                                <>
                                    {addressMessage}
                                </>
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="contact" color={`${contactMessage ? 'failure' : ''}`} value="Your contact"/>
                        </div>
                        <TextInput
                            id="contact"
                            placeholder="Eg: +94771313951"
                            required
                            color={`${contactMessage ? 'failure' : ''}`}
                            value={contact}
                            onChange={onChangeContactValue}
                            helperText={
                                <>
                                    {contactMessage}
                                </>
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password" color={`${passwordMessage ? 'failure' : ''}`} value="Enter Password"/>
                        </div>
                        <TextInput
                            id="password"
                            placeholder="Eg: **********"
                            required
                            color={`${passwordMessage ? 'failure' : ''}`}
                            type="password"
                            value={password}
                            onChange={onChangePasswordValue}
                            helperText={
                                <>
                                    {passwordMessage}
                                </>
                            }
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="confirm-password" color={`${confirmPasswordMessage ? 'failure' : ''}`} value="Confirm Password"/>
                        </div>
                        <TextInput
                            id="confirm-password"
                            placeholder="Eg: **********"
                            required
                            color={`${confirmPasswordMessage ? 'failure' : ''}`}
                            type="password"
                            value={confirmPassword}
                            onChange={onChangeConfirmPasswordValue}
                            helperText={
                                <>
                                    {confirmPasswordMessage}
                                </>
                            }
                        />
                    </div>
                    <Button onClick={onClickBtnRegister} type="button">Register</Button>
                </form>
            </Card>
        </div>
    );
};