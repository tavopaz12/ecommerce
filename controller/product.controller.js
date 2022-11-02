import { productsServices } from "../service/product-service.js";

const newProduct = (id, title, image, category, price, description) => {
  const product = document.createElement("tr");

  const contentProduct = `
    <td><img src=${image} alt="SIN IMAGEN" class="imagenPrevisualizacion"></td>
    <td>${id}</td>
    <td>${category}</td>
    <td>${title}</td>
    <td>$${price}</td>
    <td>${description}</td>
    <td>
      <div class="container__products__table__actions">
        <button class="table__button">Editar</button>
        <i class="fa fa-trash" aria-hidden="true" id="${id}"></i>
      </div>
    </td>
  `;

  product.innerHTML = contentProduct;

  const icon = product.querySelector("i");

  icon.addEventListener("click", () => {
    const id = icon.id;
    productsServices
      .deleteProduct(id)
      .then((respuesta) => {
        console.log(respuesta);
        window.location.href = "admin.html";
      })
      .catch((err) => alert("Ocurrió un error"));
  });

  return product;
};

const table = document.querySelector(".container__products__table__body");

productsServices
  .listProducts()
  .then((data) => {
    data.forEach(({ id, title, image, category, price, description }) => {
      const nuevaLinea = newProduct(
        id,
        title,
        image,
        category,
        price,
        description
      );
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));

console.log(productsServices.listProducts);
