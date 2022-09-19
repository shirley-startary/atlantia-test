import React from "react";
import ReactApexChart from "react-apexcharts";
import useFetch from "../../hooks/useFetch";
import './PresenceProduct.css'

const PresenceProduct = () => {
	const URL_BASE = 'https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/'
	const { data, loading, error } =  useFetch(URL_BASE);
	
	const labels = data.map(item => item.name)
	const series = data.map(item => item.presenceShare);

	const	options= {
		chart: {
			type: 'pie',
		},
		colors:['#D6215B', '#7530B2','#006FFF', '#FF7A00', '#23B794'],
		labels: labels,
	}

	if (loading) return <h1>Loading...</h1>

	if (error) console.log(error)

	return (

		<div>
			<h2>Presence Share by Product</h2>
			<ReactApexChart className='grafficPresence' options={options} series={series} type="pie" width={430}/> 
		</div>
			)
	
};

export default PresenceProduct;