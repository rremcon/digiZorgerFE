import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";


function Boeken() {

    const [books, setBooks] = useState([]);

    useEffect(()=> {
        async function fetchBooks() {
            try {
                const response = await axios.get('http://localhost:8080/books');
                setBooks(response.data);
                console.log(response.data);

            } catch (e) {
                console.error(e);
            }
        }
        fetchBooks();
    }, []);



    return (
        <>
            <main>
                <h1 className="page-title">Boeken</h1>
                <div className="grid-container">
                    <br/>
                    {
                        books.map((book) => {
                            console.log(book.img)
                            return (
                                <article className="grid-box"
                                         key={book.id}>
                                    <Link to={`/boek/${book.id}`}>
                                        {/*<img className="box-image" src={book.img}/>*/}
                                        <div className="grid-box-content">
                                            <h1 className="box-title">
                                                {book.title.slice(0, 25)}</h1>
                                            <h3 className="box-content">
                                                {book.subtitle}</h3>
                                            <h4>{book.authors}</h4>
                                            <h4>{book.genre}</h4>
                                            <br/>

                                            <span className="box-price">€{book.price}</span>

                                            <br/>

                                            <button
                                                className="select-button"
                                                type="submit"
                                            >selecteer
                                            </button>
                                            <h4>ISBN{book.isbn}</h4>

                                        </div>
                                    </Link>
                                </article>
                            )
                        })
                    }
                </div>
            </main>
        </>
    );
}

export default Boeken;
