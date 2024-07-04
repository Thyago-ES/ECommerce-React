import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useEffect, useState } from "react";

import { NavBar } from "./components/NavBar";
import { Catalogo } from "./pages/Catalogo";
import { Carrinho } from "./pages/Carrinho";
import { Obrigado } from "./pages/Obrigado";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
	const [cartItems, setCartItems] = useState(() => {
		const cartItemsStorage = localStorage.getItem("cartItems");
		const initialItems = JSON.parse(cartItemsStorage);
		return initialItems || [];
	});

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(cartItems));
	}, [cartItems]);

	const handleAddCart = (produto, quantidade) => {
		setCartItems((prevItems) => {
			const itemExists = prevItems.find((item) => item.id === produto.id);

			if (itemExists) {
				toast.info(
					`Quantidade do item ${produto.name} atualizada no carrinho!`
				);
				return prevItems.map((item) =>
					item.id === produto.id
						? { ...item, quantidade: item.quantidade + quantidade }
						: item
				);
			} else {
				toast.success(`${produto.name} adicionado com sucesso!`);
				return [...prevItems, { ...produto, quantidade }];
			}
		});
	};

	const handleUpdateCart = (produto, quantidade) => {
		toast.info(`Quantidade do item ${produto.name} atualizada no carrinho!`);
		setCartItems((prevItems) =>
			prevItems.map((item) =>
				item.id === produto.id ? { ...item, quantidade: +quantidade } : item
			)
		);
	};

	const handleRemoveFromCart = (produto) => {
		toast.error(`O item ${produto.name} foi removido com sucesso!`);

		setCartItems((prevItems) =>
			prevItems.filter((item) => item.id !== produto.id)
		);
	};

	return (
		<BrowserRouter>
			<NavBar />

			<div className="container">
				<Routes>
					<Route path="/" element={<Catalogo onAddToCart={handleAddCart} />} />
					<Route
						path="/carrinho"
						element={
							<Carrinho
								cartItems={cartItems}
								onUpdateCart={handleUpdateCart}
								onRemoveFromCart={handleRemoveFromCart}
								setCartItems={setCartItems}
							/>
						}
					/>
					<Route path="/obrigado" element={<Obrigado />} />
				</Routes>
			</div>

			<ToastContainer
				position="top-center"
				autoClose={3000}
				hideProgressBar={false}
				closeOnClick
				pauseOnFocusLoss
				pauseOnHover
			/>
		</BrowserRouter>
	);
}

export default App;
