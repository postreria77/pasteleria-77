import "./ProductsSlider.css";
import { createSignal } from "solid-js";
import productsData from "./ProductsSliderData.json";

function ProductsSlider() {
  const [activeTab, setActiveTab] = createSignal("pasteles");
  const handleTabChange = (e: any) => {
    setActiveTab(e.target.value);
  };

  interface Product {
    name: string;
    img: {
      src: string;
      alt: string;
    };
    anytime: boolean;
  }

  interface ProductsData {
    pasteles: Product[];
    decoraciones: Product[];
  }

  const products: ProductsData = productsData;

  return (
    <section>
      <div class="container">
        <div class="tab-buttons-holder">
          <button
            class={`tab-button ${
              activeTab() === "pasteles" ? "active-tab-button" : undefined
            }`}
            value="pasteles"
            onClick={handleTabChange}>
            Pasteles y Panqués
          </button>
          <button
            class={`tab-button ${
              activeTab() === "decoraciones" ? "active-tab-button" : undefined
            }`}
            value="decoraciones"
            onClick={handleTabChange}>
            Ideas de Decoración
          </button>
        </div>
        <ul>
          {activeTab() === "pasteles"
            ? products.pasteles.map((product) => {
                return (
                  <li>
                    <img src={product.img.src} alt={product.img.alt} />
                    <h5>{product.name}</h5>
                    <p>
                      {product.anytime
                        ? "* Disponible en tamaño tradicional y The Anytime Cake"
                        : "* Disponible en tamaño tradicional"}
                    </p>
                  </li>
                );
              })
            : products.decoraciones.map((product) => {
                return (
                  <li>
                    <img src={product.img.src} alt={product.img.alt} />
                    <h5>{product.name}</h5>
                  </li>
                );
              })}
        </ul>
      </div>
    </section>
  );
}

export default ProductsSlider;
