import type { Location } from '../../utils/locations';


function Locations({ location }: { location: Location }) {
  const { name, address, phone, hours, image } = location
  return (
    <div className="grid grid-cols-2 gap-8 location">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-medium leading-none">Dirección:</h5>
          <p>{address}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-medium leading-none">Teléfono:</h5>
          <p>{phone}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-xl font-medium leading-none">Horarios:</h5>
          {hours.map((hour) => (
            <p>{hour}</p>
          ))}
        </div>
      </div>
      <div className="relative bg-brand min-h-96 row-start-1 row-span-2 col-start-2 overflow-hidden">
        <img src={image} alt="Imagen de la sucursal" className="absolute inset-0 object-cover size-full" />
      </div>
      <div className="bg-brand min-h-80"></div>
    </div>
  );
}

export default Locations;
