const listProducts = () =>
  fetch("http://localhost:3000/products").then((respuesta) => respuesta.json());

const createProduct = (title, image, category, price, description) => {
  return fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, image, category, price, description, id: uuid.v4() }),
  });
};

const deleteProduct = (id) => {
  return fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
};

export const productsServices = {
  listProducts,
  createProduct,
  deleteProduct
};
