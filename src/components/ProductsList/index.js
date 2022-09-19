import React from "react";
import useFetch from "../../hooks/useFetch";
import Product from "../Product";
import Spinner from "../Spinner";
import "./ProductsList.css"

const ProductsList = () => {

	const {data, loading, error} = useFetch('https://atlantia-dev-test.herokuapp.com/api/beer-products/')

	if(loading ) {return ( <div className="pos-center"><Spinner/></div>)}
	if(error) console.log(error)
	return (
		<div className="container">
			<h2>Comparative Analysis</h2>
			<table className="container-table">
				<thead>
					<tr className="titulo">
						<th></th>
						<th>Nombre</th>
						<th>SKU</th>
						<th>%Presencia</th>
						<th>Av. Price</th>
						<th>Av. Position</th>
					</tr>
				</thead>
				<tbody>
					{data.map(product => (
						<Product 		
							id={product.id} 
							sku={product.sku} 
							name={product.name}
							persistence={product.persistence}
							averagePrice={product.averagePrice}
							productImage={product.productImage} 
							averagePosition={product.averagePosition}/>
					))}
				</tbody>
			</table>
			
		</div>
		
	)
}

export default ProductsList;
