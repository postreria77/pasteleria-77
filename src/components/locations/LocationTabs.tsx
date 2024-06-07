import { locations, type Location } from "../../utils/locations";
import Locations from "./Locations";
import { useState } from "react";

function LocationTabs() {

  const [activeLocation, setActiveLocation] = useState(locations[1]);

  const handleTabs = (e: any) => {
    setActiveLocation(locations.find((location: Location) => location.name === e.target.value));
  }

  return (
    <div className="flex flex-col gap-16">
      <menu className="flex gap-8 items-center">
        {locations.map((location) => (
          <li key={location.id}>
            <button value={location.name} onClick={handleTabs} className={`${location === activeLocation ? 'bg-opacity-100 hover:bg-opacity-100' : ''} px-6 py-4 bg-opacity-0 bg-brand border border-dark leading-none text-xl hover:bg-opacity-35 transition duration-300 ease-out hover:translate-y-[-2px]`}>
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
