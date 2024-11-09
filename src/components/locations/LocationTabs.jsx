import { locations } from "../../utils/locations";
import Locations from "./Locations";
import { useState } from "react";

function LocationTabs() {
  const [activeLocation, setActiveLocation] = useState(locations[1]);

  const handleTabs = (e) => {
    setActiveLocation(
      locations.find((location) => location.name === e.target.value),
    );
  };

  return (
    <div className="flex flex-col gap-16">
      <menu className="flex items-center gap-4 sm:gap-8">
        {locations.map((location) => (
          <li key={location.id}>
            <button
              value={location.name}
              onClick={handleTabs}
              className={`${location === activeLocation ? "bg-opacity-100 hover:bg-opacity-100" : ""} border border-dark bg-brand bg-opacity-0 px-4 py-2 text-xs leading-none transition duration-300 ease-out hover:translate-y-[-2px] hover:bg-opacity-35 sm:px-6 sm:py-4 sm:text-xl`}
            >
              {location.name}
            </button>
          </li>
        ))}
      </menu>
      <Locations location={activeLocation} />
    </div>
  );
}

export default LocationTabs;
