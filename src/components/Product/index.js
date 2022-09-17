import React from "react";
import './Product.css'

const Product = (props) => {
	const {id, sku, name, persistence, averagePrice, productImage, averagePosition} = props;
	return (
		<tr key={id} className={id % 2 == 0  ? "gray container-card": "container-card"}>
			<td className="image-wrapper">
				<img src={productImage} alt="image product"/>
			</td>
			<td>{name}</td>
			<td>{sku}</td>
			<td className={persistence*100 < 0 ? "red": "green"}>{persistence*100 < 0 ? persistence*100 * (-1) : persistence * 100 }%</td>
			<td>${averagePrice}.00</td>
			<td>{averagePosition}</td>
		</tr>
	)
}

export default Product;