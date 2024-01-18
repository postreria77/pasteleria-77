import "./ProductsSlider.css";
import { onMount, createSignal, createEffect, onCleanup } from "solid-js";
import productsData from "./ProductsSliderData.json";
//Swiper register
import { register } from "swiper/element/bundle";

register();

function ProductsSlider() {
  const [activeTab, setActiveTab] = createSignal(Object.keys(productsData)[0]);
  const handleTabChange = (e) => {
    setActiveTab(e.target.value);
  };

  // Inside your ProductsSlider function...
  let swiperInstance;
  const [swiper, setSwiper] = createSignal(swiperInstance);
  let [isBeginning, setIsBeginning] = createSignal(true);
  let [isEnd, setIsEnd] = createSignal(false);

  onMount(async () => {
    await customElements.whenDefined("swiper-container");
    const swiperContainer = document.querySelector("swiper-container");
    setSwiper(swiperContainer.swiper);

    const swiperUpdate = () => {
      setIsBeginning(swiperContainer.swiper.isBeginning);
      setIsEnd(swiperContainer.swiper.isEnd);
    };

    swiperContainer.swiper.on("slideChange", swiperUpdate);
    onCleanup(() => swiperContainer.swiper.off("slideChange", swiperUpdate));
  });

  createEffect(() => {
    if (swiper()) {
      setIsBeginning(swiper().isBeginning);
      setIsEnd(swiper().isEnd);
    }
  });

  const handleNextSlide = () => {
    if (!isEnd()) {
      swiper().slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (!isBeginning()) {
      swiper().slidePrev();
    }
  };

  return (
    <>
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
        long-swipes={true}
        keyboard={true}
        mousewheel-force-to-axis={true}
        speed={500}>
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

      {/* Buttons to navigate slider */}
      <div class="slide-navigation">
        <button onClick={handlePrevSlide} disabled={isBeginning()}>
          <img src="./arrow-left.svg" alt="Previous slide icon" />
        </button>
        <button onClick={handleNextSlide} disabled={isEnd()}>
          <img src="./arrow-left.svg" alt="Next slide icon" />
        </button>
      </div>
    </>
  );
}

export default ProductsSlider;
