import { useLocation, useNavigate } from "react-router-dom";

export function Obrigado() {
	const navigate = useNavigate();
	const location = useLocation();

	const items = location.state.cartItems;

	const totalPrice = items.reduce(
		(total, item) => total + item.price * item.quantidade,
		0
	);

	return (
		<div className="thank-you-page">
			<ul>
				{items.map((item) => (
					<li key={item.id}>
						{item.name} - {item.quantidade}x ${item.price}
					</li>
				))}
			</ul>
			<p>Total: ${totalPrice.toFixed(2)}</p>
			<button onClick={() => navigate("/")}>Voltar ao catálogo</button>
		</div>
	);
}
