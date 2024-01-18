import "locations.css";
import { createSignal } from "solid-js";

export default function Locations() {
  return (
    <div class="locations-wrapper">
      <div class="locations-list-holder">
        <ul>
          <li>Parque Centro (Saltillo)</li>
          <li>Monterrey (Próximamente)</li>
        </ul>
        <ul></ul>
      </div>
    </div>
  );
}
