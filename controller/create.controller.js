import { productsServices } from "../service/product-service.js";

const form = document.querySelector(".form__add__product");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const archivos = document.querySelector("[data-file]").files;

  if (!archivos || !archivos.length) {
    imagenPrevisualizacion.src = "";
    return;
  }

  const file = archivos[0];
  const reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onload = (e) => {
    const title = document.querySelector("[data-title]").value;
    const category = document.querySelector("[data-category]").value;
    const image = e.target.result;
    const price = document.querySelector("[data-price]").value;
    const description = document.querySelector("[data-description]").value;

    productsServices
      .createProduct(title, image, category, price, description)
      .then((response) => {
        window.location.href = "admin.html";
        form.reset();
      })
      .catch((err) => console.log(err));
  };
});
