import { Link } from "react-router-dom";

export function NavBar() {
	return (
		<nav>
			<Link to="/">Catálogo</Link>
			<Link to="/carrinho">Carrinho</Link>
		</nav>
	);
}
