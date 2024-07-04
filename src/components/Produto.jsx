import { useState } from "react";

export function Produto({ produto, onAddToCart }) {
	const [quantidade, setQuantidade] = useState(1);

	return (
		<div className="product">
			<img src={produto.image} alt={produto.name} />
			<h3>{produto.name}</h3>
			<p>${produto.price}</p>
			<div className="cart-buttons">
				<select
					onChange={(e) => setQuantidade(parseInt(e.target.value))}
					value={quantidade}
				>
					{[...Array(10).keys()].map((x) => (
						<option key={x + 1} value={x + 1}>
							{x + 1}
						</option>
					))}
				</select>
				<button onClick={() => onAddToCart(produto, quantidade)}>
					Adicionar ao carrinho
				</button>
			</div>
		</div>
	);
}
