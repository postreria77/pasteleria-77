import { db, Pasteles, Categories, Productos } from "astro:db";

export default async function() {
  await db.insert(Pasteles).values([
    {
      name: "Ferrero",
      description: "Pan de chocolate relleno de Nutella, betún de chocolate y ganache. Decorado con Ferrero Rocher.",
      image: "https://pasteleria-77.vercel.app/webclip.png",
      tradicional: true,
      anytime: true,
      rebanadaAnytime: true,
    },
    {
      name: "Lord Mostachón",
      description: "Capas de pan de chocolate y mostachón de nuez, relleno de dulce de leche, almendras y arándanos. Cubierto con un betún cremoso de caramelo.",
      image: "https://pasteleria-77.vercel.app/webclip.png",
      tradicional: false,
      anytime: true,
      rebanadaAnytime: false,
    },
    {
      name: "Pecan Pie Cake",
      description: "Pan de vainilla con relleno de pie de nuez, betún de vainilla, capa de dulce de leche y nuez caramelizada.",
      image: "https://pasteleria-77.vercel.app/webclip.png",
      tradicional: true,
      anytime: true,
      rebanadaAnytime: false,
    }
  ])

  await db.insert(Categories).values([
    { id: 1, name: "Panqués" },
    { id: 2, name: "Postres" },
  ])

  await db.insert(Productos).values([
    {
      name: "Nuez",
      description: "Panqué con trozos de nuez y un toque de Gloria de Linares.",
      price: 350,
      image: "https://pasteleria-77.vercel.app/webclip.png",
      categoryId: 1,
    },
    {
      name: "Nutella",
      price: 350,
      description: "Panqué con un centro marmoleado de nutella y trozos de Ferrero rocher de topping.",
      image: "https://pasteleria-77.vercel.app/webclip.png",
      categoryId: 1,
    },
    {
      name: "Coffee Cake",
      price: 320,
      description: "Panqué con un centro marmoleado de canela, nuez, y un crumble de azúcar con nuez como topping.",
      image: "https://pasteleria-77.vercel.app/webclip.png",
      categoryId: 1,
    },
    {
      name: "Mini Bites",
      price: 165,
      description: "Charola con bites de brownies de nuez espolvoreados de azúcar pulverizada.",
      image: "https://pasteleria-77.vercel.app/webclip.png",
      categoryId: 2,
    }
  ])
}
