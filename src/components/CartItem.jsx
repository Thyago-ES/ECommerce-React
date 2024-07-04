import { useEffect } from "react";

export function CartItem({ item, onUpdateCart, onRemoveFromCart }) {
	return (
		<div className="cart-item">
			<h3>{item.name}</h3>
			<p>{item.price}</p>
			<div className="cart-buttons">
				<input
					type="text"
					value={item.quantidade ? item.quantidade : 0}
					onChange={(e) => onUpdateCart(item, parseInt(e.target.value))}
				/>
				<button onClick={() => onRemoveFromCart(item)}>Remover</button>
			</div>
		</div>
	);
}
33;
