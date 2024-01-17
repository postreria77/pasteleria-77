import "./ProductsSlider.css";
import { createSignal } from "solid-js";
import productsData from "./ProductsSliderData.json";
//Swiper register
import { register } from "swiper/element/bundle";

register();

function ProductsSlider() {
  const [activeTab, setActiveTab] = createSignal(Object.keys(productsData)[0]);
  const handleTabChange = (e) => {
    setActiveTab(e.target.value);
  };

  return (
    <section>
      <div class="container">
        {/* Mapping the buttons to simulate tab functionality */}
        <div class="tab-buttons-holder">
          {Object.keys(productsData).map((key) => (
            <button
              class={`tab-button ${
                activeTab() === key ? "active-tab-button" : ""
              }`}
              value={key}
              onClick={handleTabChange}>
              {key}
            </button>
          ))}
        </div>
        {/* Slider mapped to get the data from the json file */}
        <swiper-container
          slides-per-view={4}
          space-between={16}
          navigation={true}>
          {productsData[activeTab()].map((product) => {
            return (
              <swiper-slide class="product-card">
                <img
                  src={product.img.src}
                  alt={product.img.alt}
                  class="slide-image"
                />
                <div class="slide-comp">
                  <h5>{product.name}</h5>
                  <p>
                    {product.anytime
                      ? "* Disponible en tamaño tradicional y The Anytime Cake"
                      : "* Disponible en tamaño tradicional"}
                  </p>
                </div>
              </swiper-slide>
            );
          })}
        </swiper-container>
      </div>
    </section>
  );
}

export default ProductsSlider;
