import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Jewellery() {
    const [state, setState] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products/category/jewelery')
            .then((res) => res.json())
            .then((data) => setState(data));
    }, []);

    const ProductDetails = {
        color: 'black',
        fontSize: '18px',
        textDecoration: 'none',
    };

    return (
        <div>
            <h1>Jewellery</h1>
            <ul>
                {
                    state.map((el, i) => (
                        <>
                            <Link to={`/ProductDetails/${el.id}`} style={ProductDetails}>{el.title}</Link><br /><br />
                        </>
                    ))
                }
            </ul>
        </div>
    );
}
