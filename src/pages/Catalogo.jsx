import { useState, useEffect } from "react";
import productsData from "../data/products_mock.json";
import { Produto } from "../components/Produto";
export function Catalogo({ onAddToCart }) {
	return (
		<div>
			<h1>Catálogo de produtos</h1>
			<div className="product-container">
				{productsData.map((produto) => (
					<Produto
						key={produto.id}
						produto={produto}
						onAddToCart={onAddToCart}
					/>
				))}
			</div>
		</div>
	);
}
