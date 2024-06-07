export interface Location {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  hours: string[];
}

export const locations: Location[] = [
  {
    id: 0,
    name: 'Parque Centro (Saltillo)',
    image: '/images/sucursales/parque-centro.jpg',
    address: 'Edificio MAIA, Blvd. Parque Centro #1425 local CM-A Parque Centro, 25240. Saltillo, Coahuila.',
    phone: '81 2474 8801',
    hours: ['Lunes a Sabado / 9:00 - 20:00 hrs.', 'Domingo / 10:00 - 19:00 hrs.']
  },
  {
    id: 1,
    name: 'Herradura (Monterrey)',
    image: '/images/sucursales/parque-centro.jpg',
    address: 'Carretera Nacional 1000 A, Esq. Portal del Huajuco Col. La Herradura Carretera Nacional 67140 Monterrey, Nuevo León.',
    phone: '81 2474 8801',
    hours: ['Lunes a Sábado / 8:00 - 22:00 hrs.', 'Domingo / 10:00 - 19:00 hrs.', 'Rappi / 10:00 - 22:00 hrs.']
  }
]
