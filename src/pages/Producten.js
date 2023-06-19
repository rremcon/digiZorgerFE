import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";


const Producten = () => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try{
                setError(false);
                const response = await axios.get('https://fakestoreapi.com/products', {
                // const response = await axios.get('https://api.bol.com', {
                // const response = await axios.get('http://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405', {
                    signal: controller.signal,
                });
                setData(response.data);

                // console.log(response);
                // console.log(response.data);
                // console.log(response.data[8]);
                // console.log(response.data[8].title);
                // console.log(response.data[8].id);
                // console.log(response.data[8].category);
                // console.log(response.data[8].price);
                // console.log(response.data[8].description);
                // console.log(response.data[8].image);
                console.log(response.data);


            } catch (e) {
                //console.error(e)
                setError(true)

                if(axios.isCancel(e)){
                    console.log('The axios request was cancelled')
                } else {
                    console.error(e)
                }
            }
            setLoading(false);
        }
        fetchData()

        return function cleanup() {
            controller.abort();
        }
    }, [])



    return (
        <>
            <main>

                {loading && <p>Loading...</p>}
                {error && <p>Error: Could not fetch data!</p>}

                <h1 className="page-title">Producten</h1>
                <div className="grid-container">
                    {
                        data.map((product) => {
                            return (

                                <article className="grid-box"
                                         key={product.id}>
                                    <Link to={`/product/${product.id}`}>
                                        <img className="box-image" src={product.image} alt={product.title}/>
                                        {/*<div className="grid-box-content">*/}
                                        <h3 className="box-title">{product.title.slice(0, 25)}</h3>
                                        <br/>
                                        {/*<p className="box-content"></p>*/}
                                        <br/>
                                        <span className="box-price">€{product.price}</span>
                                        {/*</div>*/}
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

export default Producten;