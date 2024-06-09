import { db, Pasteles } from "astro:db";

export default async function() {
  await db.insert(Pasteles).values([
    {
      name: "Ferrero",
      description: "Pan de chocolate relleno de Nutella, betún de chocolate y ganache. Decorado con Ferrero Rocher.",
      tradicional: true,
      anytime: true,
      rebanadaAnytime: true,
    },
    {
      name: "Lord Mostachón",
      description: "Capas de pan de chocolate y mostachón de nuez, relleno de dulce de leche, almendras y arándanos. Cubierto con un betún cremoso de caramelo.",
      tradicional: true,
      anytime: true,
      rebanadaAnytime: false,
    }
  ])
}
