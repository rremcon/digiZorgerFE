import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Product from "../components/Product/Product";
import Button from "../components/Button/Button";


const Productpagina = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState([])
    const {id} = useParams()
    console.log(id)


    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setLoading(true);
            try {
                setError(false);
                const response = await axios.get("https://fakestoreapi.com/products/" + id, {
                    signal: controller.signal,
                });
                setData(response.data);
                console.log(response.data)
                
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
    }, [id])



    const {image, title, description, price} = data;
    return (
        <>
            <main>
                {loading && <p>Loading...</p>}
                {error && <p>Error: Could not fetch data!</p>}

                {/*<div>*/}
                <div className="product-page-inner-container">

                    <Product
                        className="product-item"
                        id={id}
                        image={image}
                        title={title}
                        description={description}
                        price={price}
                    />

                    {/*<Button*/}
                    {/*    type="submit"*/}
                    {/*>Add to card*/}
                    {/*</Button>*/}

                </div>
            </main>
        </>
    );
};

export default Productpagina;

