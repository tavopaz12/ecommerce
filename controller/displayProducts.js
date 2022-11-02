import { productsServices } from "../service/product-service.js";

const newProduct = (title, image, price, description) => {
  const product = document.createElement("div");

  const contentProduct = `
    <div class="card__article">
      <div class="card__article__image">
        <img src=${image} alt="SIN IMAGEN" />
      </div>
      <p class="card__article__title">${title}</p>
      <p class="card__article__marca">${description}</p>
      <div class="card__article__portapie">
        <p class="card__article__portapie__price">$ ${price}</p>
        <button class="card__article__portapie__btn">ADD TO CARD</button>
      </div>
    </div>
  `;

  product.innerHTML = contentProduct;

  return product;
};

const section = document.querySelector(".cards__section");

productsServices
  .listProducts()
  .then((data) => {
    data.forEach(({ title, image, price, description }) => {
      const nuevaLinea = newProduct(
        title,
        image,
        price,
        description
      );
      section.appendChild(nuevaLinea);
    });
  })
  .catch((error) => console.log(error));

console.log(productsServices.listProducts);
