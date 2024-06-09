import { defineDb, defineTable, column } from "astro:db";

const Pasteles = defineTable({
  columns: {
    name: column.text(),
    description: column.text(),
    tradicional: column.boolean(),
    anytime: column.boolean(),
    rebanadaAnytime: column.boolean(),
  }
})

export default defineDb({
  tables: {Pasteles},
});
