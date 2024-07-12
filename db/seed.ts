import { db, Pasteles, Categories, Productos, Bebidas } from "astro:db";

export default async function () {
  await db.insert(Pasteles).values([
    {
      name: "Ferrero",
      description:
        "Pan de chocolate relleno de Nutella, betún de chocolate y ganache. Decorado con Ferrero Rocher.",
      image: "/images/menu/ferrero.webp",
      tradicional: true,
      anytime: true,
      rebanadaAnytime: true,
      nuevo: true,
    },
    {
      name: "Lord Mostachón",
      description:
        "Capas de pan de chocolate y mostachón de nuez, relleno de dulce de leche, almendras y arándanos. Cubierto con un betún cremoso de caramelo.",
      image: "/images/menu/lord-mostachon.webp",
      tradicional: false,
      anytime: true,
      rebanadaAnytime: false,
      nuevo: false
    },
    {
      name: "Pecan Pie Cake",
      description:
        "Pan de vainilla con relleno de pie de nuez, betún de vainilla, capa de dulce de leche y nuez caramelizada.",
      image: "/images/menu/pecan-pie.webp",
      tradicional: true,
      anytime: true,
      rebanadaAnytime: false,
      nuevo: false
    },
  ]);

  await db.insert(Categories).values([
    { id: 1, name: "Panqués" },
    { id: 2, name: "Postres" },
    { id: 3, name: "Bebidas" },
  ]);

  await db.insert(Productos).values([
    {
      name: "Nuez",
      description: "Panqué con trozos de nuez y un toque de Gloria de Linares.",
      price: 350,
      image: "/images/menu/panque-nuez.webp",
      categoryId: 1,
    },
    {
      name: "Nutella",
      price: 350,
      description:
        "Panqué con un centro marmoleado de nutella y trozos de Ferrero rocher de topping.",
      image: "/images/menu/panque-nutella.webp",
      categoryId: 1,
    },
    {
      name: "Coffee Cake",
      price: 320,
      description:
        "Panqué con un centro marmoleado de canela, nuez, y un crumble de azúcar con nuez como topping.",
      image: "/images/menu/panque-glorias.webp",
      categoryId: 1,
    },
    {
      name: "Mini Bites",
      price: 165,
      description:
        "Charola con bites de brownies de nuez espolvoreados de azúcar pulverizada.",
      image: "/images/menu/mini-brownies.webp",
      categoryId: 2,
    },
  ]);

  await db.insert(Bebidas).values([
    {
      name: "Americano",
      price: 49,
    },
    {
      name: "Latte",
      price: 59,
    },
    {
      name: "Latte Abuelita",
      price: 65,
    },
    {
      name: "Latte Nutella",
      price: 65,
    },
    {
      name: "Latte Chai",
      price: 85,
    },
  ]);
}
