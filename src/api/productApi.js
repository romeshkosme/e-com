import axios from "axios";

export async function getProducts() {
	return new Promise(async (resolve, reject) => {
		try {
			const response = await axios("https://dummyjson.com/products");
			if (
				response &&
				response.data &&
				response.data.products &&
				response.data.products.length > 0
			) {
				resolve(response.data.products);
			} else {
				reject(false);
			}
		} catch (error) {
			console.log(error);
			reject(false);
		}
	});
}
