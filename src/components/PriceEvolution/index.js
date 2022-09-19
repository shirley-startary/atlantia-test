import React from "react";
import ReactApexChart from "react-apexcharts";
import useFetch from "../../hooks/useFetch";
import Spinner from "../Spinner";
import './PriceEvolution.css'

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

const PriceEvolution = () => {
  const URL_BASE = 'https://atlantia-dev-test.herokuapp.com/api/price-evolution-chart/'

  const { data, loading, error } = useFetch(URL_BASE);
    
  const dataReorder = Object.values(reorderData(data));
  const series = dataReorder.map( item => {return {name: item.name, data: item.price}})

  const categories = dataReorder[2]?.dateExtraction.map(item => {
    const event = new Date(item);
    return event.toLocaleDateString('en-EN', {  month: 'short', day: 'numeric' })
  })

  const options = {
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

  if(loading ) return <Spinner/>
	
  if(error) console.log(error)

  return (
    <div className=''>
      <h2>Price Evolution</h2>
      <ReactApexChart className='graffic' options={options} series={series} type="line" width={750} height={330}/>
    </div>
  )
}

export default PriceEvolution;

