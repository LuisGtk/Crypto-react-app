import './Home.css'
import { useState, useEffect } from 'react';
export default function Home() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const getNews = async () => {
            const apiURL = "https://api.coinstats.app/public/v1/news?skip=0&limit=10"
            try {
                const res = await fetch(apiURL);
                const news = await res.json();
                // console.log(news)
                const objectData = Object.values(news)[0];
                setNews(objectData);
                console.log(objectData);
            } catch (err) {
                console.error(err)
            }
        };
        getNews();

    }, [])

    return news.length > 0 ? (
        <section className="container">
            {news.length &&
                news.map((news) => {
                    return (
                        <div className='homeContainer'>
                            <div className='outline'>
                                <h1 className='title'>{news.title}</h1>
                                {/* <img src={news.imgURL}></img> */}
                                <p className='desc'>Description: {news.description} <a 
                                    href={news.link}>Read the full article here</a></p>
                                <p className='src'>Source: {news.source}</p>
                            </div>
                        </div>
                    )
                })}
        </section>
    ) : (
        <h1>loading...</h1>
    );
}
