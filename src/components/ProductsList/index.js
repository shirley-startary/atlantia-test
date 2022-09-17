import React, { seState, useEffect, useState} from "react";
import Product from "../Product";
import "./ProductsList.css"

const ProductsList = () => {
	
	const [products, setProducts] = useState([]);

	useEffect(()=> {
		obtenerDatos()
	},[])
    
	const obtenerDatos = async () => {
		const data = await fetch('https://atlantia-dev-test.herokuapp.com/api/beer-products/');
		const products = await data.json();
		setProducts(products)
	}

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
					{products.map(product => (
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
// https://atlantia-dev-test.herokuapp.com/api/beer-products/