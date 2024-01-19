import { createSignal } from "solid-js";
import "./Locations.css";
import locationsData from "./LocationsData.json";
import rappiLocationsData from "./RappiLocationsData.json";

export default function Locations() {
  const [selectedLocation, setSelectedLocation] = createSignal(
    Object.keys(locationsData)[0]
  );

  console.log(locationsData[selectedLocation()]);
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
                  {locationsData[key].name}
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
      <div class="location-holder">
        {() => <p>{locationsData[selectedLocation()].name}</p>}
      </div>
    </div>
  );
}
