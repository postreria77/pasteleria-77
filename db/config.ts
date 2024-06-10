import { defineDb, defineTable, column } from "astro:db";

const Pasteles = defineTable({
  columns: {
    name: column.text(),
    description: column.text(),
    image: column.text({ default: ""}),
    tradicional: column.boolean(),
    anytime: column.boolean(),
    rebanadaAnytime: column.boolean(),
  }
})

const Categories = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
  }
})

const Productos = defineTable({
  columns: {
    name: column.text(),
    description: column.text(),
    price: column.number(),
    image: column.text(),
    categoryId: column.number({ references: () => Categories.columns.id }),
  }
})

export default defineDb({
  tables: { Pasteles, Productos, Categories },
});
