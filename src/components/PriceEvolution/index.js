import React, {useState, useEffect} from "react";
import ReactApexChart from "react-apexcharts";
import './PriceEvolution.css'

const PriceEvolution = () => {

  const [series, setSeries] = useState([])
  const [options, setOptions] = useState({})

  useEffect(()=>{
    obtenerDatos()
  },[])

  const  reorderData = (data) => {
    const dataReorder = data.map(( item) => {
      const newObj = {
        sku:item.sku,
        name:item.name,
        price:[item.price],
        dateExtraction:[item.dateExtraction]
      }
      return newObj
    })
    .reduce((acc, item) => {
      if(!acc[item.sku]) {
        acc[item.sku]= item
      }	
      acc[item.sku]['price'].push(item.price[0])
      acc[item.sku]['dateExtraction'].push(item.dateExtraction[0])
      return acc
    }, {})

    return dataReorder
  }

  const obtenerDatos = async () => {
		const data = await fetch('https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/');
		const products = await data.json();
    const dataReorder = Object.values(reorderData(products));
    const series = dataReorder.map((item)=> {
      return {name: item.name, data: item.price}
    })

    const categories = dataReorder[2].dateExtraction.map(item => {
      const event = new Date(item);
      const options = {  month: 'short', day: 'numeric' };
      return event.toLocaleDateString('en-EN', options)
    })

     const  options = {
        chart: {
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors:['#7530B2', '#D6215B', '#FFB448'],
        grid: {
          row: {
            colors: ['#F8F8F8', 'transparent'], 
            opacity: 0.5
          },
        },
        xaxis: {
          categories: categories,
        }
      }
  
    setOptions(options)
		setSeries(series)
	}

  return (
    <ReactApexChart className='graffic' options={options} series={series} type="line" width={750} height={330}/>
  )
}

export default PriceEvolution;

