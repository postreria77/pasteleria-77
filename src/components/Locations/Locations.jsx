import { createSignal } from "solid-js";
import "./Locations.css";
import locationsData from "./LocationsData.json";
import rappiLocationsData from "./RappiLocationsData.json";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = createSignal(
    Object.keys(locationsData)[0]
  );

  return (
    <div class="locations-wrapper">
      {/* Locations lists to handle tab changes */}
      <div class="locations-list-holder">
        <p class="subheading">Sucusales Físicas</p>
        <ul class="locations-list">
          {Object.keys(locationsData).map((key) => {
            return (
              <li>
                <button
                  class={`location-select ${
                    selectedLocation() === key ? "selected" : ""
                  }`}
                  onClick={() => setSelectedLocation(key)}>
                  {locationsData[key].nombre}
                </button>
              </li>
            );
          })}
        </ul>
        <p class="subheading">Monterrey solo por Rappi en:</p>
        <ul class="locations-list secondary-locations">
          {rappiLocationsData.map((location) => {
            return <li>{location}</li>;
          })}
        </ul>
      </div>

      {() => (
        <div class="location-holder">
          <div class="location-info-wrapper">
            <div class="location-info-holder">
              <h5>Dirección</h5>
              <p class="location-info">
                {locationsData[selectedLocation()].dirección}
              </p>
            </div>
            <div class="location-info-holder">
              <h5>Teléfono</h5>
              <p class="location-info">
                {locationsData[selectedLocation()].teléfono}
              </p>
            </div>
            <div class="location-info-holder">
              <h5>Horario</h5>
              {() =>
                locationsData[selectedLocation()].horarios.map((horario) => {
                  return <p class="location-info">{horario}</p>;
                })
              }
            </div>
            <iframe
              src={locationsData[selectedLocation()].mapa}
              width="100%"
              height="240"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="location-img-holder">
            <img
              src={locationsData[selectedLocation()].img.src}
              alt={locationsData[selectedLocation()].img.alt}
              class="location-img"
            />
          </div>
        </div>
      )}
    </div>
  );
}
