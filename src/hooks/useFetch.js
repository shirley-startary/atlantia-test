import { useState, useEffect } from "react";

const useFetch = ( url ) => {
	const [data, setData ] = useState([]);
	const [loading, setLoading] = useState(true);
	const [ error , setError] = useState('');

	useEffect(()=> {
		setLoading(true);
		fetch(url)
		.then((response) => {
			const data = response.json()
			return data
		})
		.then((data)=> {
			
			setData(data)
		})
		.catch ((err)=> {
			setError(err)
		}).finally(()=> {
			setLoading(false)
		})
	},[url])
	
	// console.log(data)
	return {data, loading,  error}
};

export default useFetch;