function Locations({ location }) {
  const { address, phone, hours, image, map } = location
  return (
    <div className="grid sm:grid-cols-2 gap-8 location">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">
          <h5 className="text-base sm:text-xl font-medium leading-none">Dirección:</h5>
          <p className="text-xs sm:text-base">{address}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-base sm:text-xl font-medium leading-none">Teléfono:</h5>
          <p className="text-xs sm:text-base">{phone}</p>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="text-base sm:text-xl font-medium leading-none">Horarios:</h5>
          {hours.map((hour) => (
            <p className="text-xs sm:text-base">{hour}</p>
          ))}
        </div>
      </div>
      <div className="relative bg-brand min-h-96 sm:row-start-1 sm:row-span-2 sm:col-start-2 overflow-hidden">
        <img src={image} alt="Imagen de la sucursal" className="absolute inset-0 object-cover size-full border border-dark" />
      </div>
      <iframe src={map} className='min-h-80 w-full border border-dark' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
}

export default Locations;
