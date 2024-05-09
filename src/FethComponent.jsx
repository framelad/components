import {useEffect, useState} from "react";

export function FethComponent() {
    const [products, setProducts] = useState([]);
    const [name, setName] = useState < string > ('John')

    async function getProd  () {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            const data = await response.json();
            console.log(data);
            setProducts(data);
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        getProd();
    },[]) // esce dal loop infinito []

    function changeName() {
        setName('mario')
        console.log(name)
    }


    return (
        <div>
            <h2>Fetch result:</h2>
            <button onClick={changeName()}>Get products</button>
        </div>
    )
}