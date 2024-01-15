import "./ProductsSlider.css";
import { createSignal } from "solid-js";

function ProductsSlider() {
  const [activeTab, setActiveTab] = createSignal("pasteles");
  const handleTabChange = (e) => {
    setActiveTab(e.target.value);
  };

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
          <li>Cheesecake Tortuga</li>
          <li>Red Velvet</li>
          <li>Ferrero</li>
        </ul>
      </div>
    </section>
  );
}

export default ProductsSlider;
