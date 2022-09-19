import { logDOM } from "@testing-library/react";
import React, {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";
import './PresenceProduct.css'


const PresenceProduct = () => {

	const [series, setSeries] = useState([])
	const [options, setOptions] = useState({})

	useEffect(()=> {
		obtenerDatos()
	} , [])
	const obtenerDatos = async () => {
		const data = await fetch(' https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/');
		const products = await data.json();
		console.log(products);
		const labels = products.map(item => item.name)
		const series = products.map(item => item.presenceShare);
		
		const	options= {
			chart: {
				type: 'pie',
				color:['#D6215B', '#7530B2','#006FFF', '#FF7A00', '#23B794'],
			},
			labels: labels,
		}
	
		setOptions(options)
		setSeries(series)
	}	

	return (  <ReactApexChart className='grafficPresence' options={options} series={series} type="pie" width={430}/> )
	
};


//  https://atlantia-dev-test.herokuapp.com/api/presence-share-chart/


export default PresenceProduct;