import { useState, useEffect } from 'react'
export function ShowApi() {
    // const [data, setData] = useState()
	const [jokes, setJokes] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getData = async () => {
			try {
				const response = await fetch('https://v2.jokeapi.dev/joke/Any?amount=10');
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data = await response.json();
				setJokes(data.jokes);
			} catch (error) {
				setError(error.message);
			} finally {
				setLoading(false);
			}
		};

		getData();
	}, []);

	console.log(jokes)
    return (
        <div>
			{jokes.map((data, index)=>(
				<div key={index}>{
					data.category
				}
			</div>))}
        </div>
    )
}