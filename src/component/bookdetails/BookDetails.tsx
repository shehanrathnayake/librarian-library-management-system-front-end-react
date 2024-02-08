import {getBookDetails} from "../../service/book-service.ts";
import React, {useEffect, useState} from "react";
import {BookDto} from "../../dto/BookDto.ts";
import {Card} from "flowbite-react/lib/esm/components/Card/Card";
import {useNavigate, useParams} from "react-router-dom";
import {useUser} from "../../context/UserContext.tsx";
import {createNewIssue} from "../../service/issue-service.ts";
import {IssueDto} from "../../dto/IssueDto.ts";

export const BookDetails = () => {
    const [book, setBook] = useState<BookDto | null>(null);
    const {bookId} = useParams();
    const loggedUser = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        getBookDetails(bookId!).then(book => {
            setBook(book);
        }).catch(error => {
            alert("Could not fetch book details from the server")
        });
    }, [bookId]);

    function onClickReserveBook() {
        if (loggedUser) {
            createNewIssue(new IssueDto(null, new Date(), "issued", 0, null, bookId!, loggedUser.id!))
                .then(issueDto => {
                    alert(book?.name + " is issued to " + loggedUser.name);
                }).catch(error => {
                alert("Couldn't issue the book. Please try again");
            });
            navigate('/app')
        } else {
            navigate('/login');
        }
    }

    return (
        <div className="h-full flex justify-center mt-5 w-[100%]">
            <Card>
                <div className="flex flex-col md:flex-row gap-4">
                    <img className="md:h-[calc(100vh-250px)]" src={book?.bookCover} alt=""/>
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-2xl font-bold dark:text-white">{book?.name}</h3>
                            <p className="mb-3 text-gray-500">By {book?.author}</p>
                            <p className=" font-normal dark:text-gray-400">ISBN Number: {book?.isbnNumber}</p>
                            <p className="mb-4 font-normal dark:text-gray-400">Category: {book?.category}</p>
                            <p className="mb-4 font-normal dark:text-gray-400">{book?.description}</p>
                            <p className={`${(book?.availableCopies! > 0) ? 'text-green-800' : 'text-red-800'} text-bold italic text-xs pb-2`}>{(book?.availableCopies! > 0) ? 'Available' : 'Not Available'}</p>
                        </div>
                        <button type="button" onClick={onClickReserveBook}
                                className="text-white bg-[#3b00c1] hover:bg-blue-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Reserve
                        </button>
                    </div>
                </div>
            </Card>
        </div>
    );
};