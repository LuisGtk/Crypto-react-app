import { useEffect, useState } from "react";
import "./Fiat.css"
export default function Fiat() {

    const [fiat, setFiat] = useState([]);

    useEffect(() => {
        const getFiat = async () => {
            const apiURL = "https://api.coinstats.app/public/v1/fiats"
            try {
                const res = await fetch(apiURL);
                const fiat = await res.json();
                // console.log(fiat)
                const objectData = Object.values(fiat);
                setFiat(objectData);
                console.log(objectData);
            } catch (err) {
                console.error(err)
            }
        };
        getFiat();
    }, [])

    return fiat.length > 0 ? (
        <section className="container">
            {fiat.length &&
                fiat.map((fiat) => {
                    return (
                        <div className='container'>
                            <img src={fiat.imageUrl} alt='country_flag'></img>
                            <h2 className="cur">Currency:{fiat.name}</h2>
                            <p className="rate">Rate:{fiat.rate}</p>
                        </div>
                    )
                })}
        </section>
    ) : (
        <h1>loading...</h1>
    );
}

