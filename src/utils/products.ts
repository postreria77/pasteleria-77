export interface Product {
  name: string;
  description: string;
  imagePath: string;
  type: "cake" | "cheesecake" | "bread";
  anytime?: boolean;
}

export const products: Product[] = [
  {
    name: "Red Velvet",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/red-velvet.webp",
    type: "cake",
    anytime: true,
  },
  {
    name: "Ferrero",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/ferrero.webp",
    type: "cake",
    anytime: true,
  },
  {
    name: "Carlotta Cake",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/carlotta.webp",
    type: "cake",
    anytime: true,
  },
  {
    name: "Matilda",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/matilda.webp",
    type: "cake",
    anytime: true,
  },
  {
    name: "Zanahoria",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/zanahoria.webp",
    type: "cake",
    anytime: true,
  },
  {
    name: "Lord Mostachón",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/lord-mostachon.webp",
    type: "cake",
    anytime: true,
  },

  {
    name: "Pecan Pie",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/pecan-pie.webp",
    type: "cake",
  },
  {
    name: "Almond Toffee",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/almond-toffee.webp",
    type: "cake",
  },
  {
    name: "Pistache",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/red-velvet.webp",
    type: "cake",
    anytime: true,
  },
  {
    name: "Lady Berry",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/lady-berry.webp",
    type: "cake",
  },
  {
    name: "Charol",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/charol.webp",
    type: "cake",
    anytime: true,
  },
  {
    name: "Cheesecake Brownie",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/cheesecake-brownie.webp",
    type: "cheesecake",
    anytime: true,
  },
  {
    name: "Cheesecake Plátano",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/cheesecake-platano.webp",
    type: "cheesecake",
    anytime: true,
  },
  {
    name: "Cheesecake Tortuga",
    description:
      "Pan de cocoa roja con chispas de chocolate semiamargo, ganache de chocolate y betún de vainilla a base de Philadelphia.",
    imagePath: "/src/assets/products/cheesecake-tortuga.webp",
    type: "cheesecake",
    anytime: true,
  },
  {
    name: "Panqué de Nuez",
    description: "Panque con trozos de nuez y un toque de Gloria de Linares. ",
    imagePath: "/src/assets/products/panque-nuez.webp",
    type: "bread",
    anytime: true,
  },
  {
    name: "Panqué de Nutella",
    description:
      "Panque con un centro marmoleado de nutella y trozos de Ferrero rocher de topping.",
    imagePath: "/src/assets/products/panque-nutella.webp",
    type: "bread",
    anytime: true,
  },
  {
    name: "Panqué de Coffee Cake",
    description:
      "Panque con un centro marmoleado de canela , nuez, y un crumble de azucar con nuez Como topping",
    imagePath: "/src/assets/products/panque-toffee.webp",
    type: "bread",
    anytime: true,
  },
];
