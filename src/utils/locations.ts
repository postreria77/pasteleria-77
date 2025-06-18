export interface Location {
  id: number;
  name: string;
  image: string;
  address: string;
  phone: string;
  hours: string[];
  map?: string;
}

export const locations: Location[] = [
  {
    id: 0,
    name: "Parque Centro (Saltillo)",
    image: "/images/sucursales/parque-centro.jpg",
    address:
      "Edificio MAIA, Blvd. Parque Centro #1425 local CM-A Parque Centro, 25240. Saltillo, Coahuila.",
    phone: "81 2474 8801",
    hours: [
      "Lunes a Sabado / 9:00 - 20:00 hrs.",
      "Domingo / 10:00 - 19:00 hrs.",
    ],
    map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.530233733835!2d-100.98430002460982!3d25.45396442754668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86886dd7d8d78425%3A0xa5388b89198fd0b6!2sLa%20Pasteler%C3%ADa%20de%20La%20Postreria%20%7C%20Parque%20Centro!5e0!3m2!1ses-419!2smx!4v1717878948786!5m2!1ses-419!2smx",
  },
  {
    id: 1,
    name: "Herradura (Monterrey)",
    image: "/images/sucursales/herradura.jpg",
    address:
      "Carretera Nacional 1000 A, Esq. Portal del Huajuco Col. La Herradura Carretera Nacional 67140 Monterrey, Nuevo León.",
    phone: "81 2474 8801",
    hours: [
      "Lunes a Sábado / 9:00 - 21:00 hrs.",
      "Domingo / 10:00 - 19:00 hrs.",
      "Rappi / 10:00 - 22:00 hrs.",
    ],
    map: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14397.517126447476!2d-100.2336834!3d25.5590453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662c75725046235%3A0xc811528b5c94d2fb!2sLa%20Pasteleria%20de%20la%20Postreria%20%7C%20Herradura!5e0!3m2!1ses-419!2smx!4v1717878425484!5m2!1ses-419!2smx",
  },
];
