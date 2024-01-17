import './Aside.css'
import {Checkbox, Label} from "flowbite-react";

export const Aside = () => {
    return (
        <div className="w-[20%] border-e h-[calc(100vh-5rem)] ps-1">
            <h6 className="mb-5 pt-10">Book Categories</h6>

            <div className="flex max-w-md flex-col gap-4" id="checkbox">
                <div className="flex items-center gap-2">
                    <Checkbox id="all" defaultChecked/>
                    <Label htmlFor="all" className="flex">All</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="entertainment" defaultChecked/>
                    <Label htmlFor="entertainment" className="flex">Entertainment</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="biographies"/>
                    <Label htmlFor="biographies">Biographies</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="business"/>
                    <Label htmlFor="business">Business</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="comics"/>
                    <Label htmlFor="comics">Comics</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="technology"/>
                    <Label htmlFor="technology">Technology</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="fantacy"/>
                    <Label htmlFor="fantacy">Fantasy</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="health"/>
                    <Label htmlFor="health">Health</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="history"/>
                    <Label htmlFor="history">History</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="sci-fi"/>
                    <Label htmlFor="sci-fi">Sci-Fi</Label>
                </div>
                <div className="flex items-center gap-2">
                    <Checkbox id="kids"/>
                    <Label htmlFor="kids">kids</Label>
                </div>
            </div>
        </div>
    );
};