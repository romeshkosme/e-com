export const addToCart = (productId, cart) => {
	// find if item already added
	const found = cart.find((item) => item.id === productId);
	// if added increase quantity by one
	if (found) {
		const response = cart.map((elem) => {
			if (elem.id === productId) {
				elem.quantity = elem.quantity + 1;
			}
			return elem;
		});
		return response;
	} else {
		// if not create new object
		return [
			...cart,
			{
				id: productId,
				quantity: 1,
			},
		];
	}
};
export const removeFromCart = (productId, cart) => {
	// find if item already added
	const found = cart.find((item) => item.id === productId);
	// if added increase quantity by one
	if (found) {
		const response = cart.map((elem) => {
			if (elem.id === productId) {
				elem.quantity = elem.quantity - 1;
			}
			return elem;
		});
		return response;
	}
};
