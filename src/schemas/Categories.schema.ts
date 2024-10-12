import {z} from 'zod';
import {createSelectSchema, createInsertSchema} from 'drizzle-zod';
import {pgTable, varchar, unique} from 'drizzle-orm/pg-core';
import {Tables, BaseColumns, OwnerColumn, DescriptionColumn} from './general';

export const Categories = pgTable(
  Tables.CATEGORIES,
  {
    ...BaseColumns,
    ...OwnerColumn, // FIXME: there should be a foreign key to the user table
    name: varchar('name', {length: 120}).notNull(),
    ...DescriptionColumn,
  },
  t => ({
    uniqueName: unique().on(t.owner, t.name), // each user can have only one category with the same name
  }),
);

export const ZCategory = createSelectSchema(Categories);
export type TCategory = z.infer<typeof ZCategory>;

export const ZInsertCategory = createInsertSchema(Categories, {
  name: s => s.name,
  description: s => s.description.optional(),
});
export type TInsertCategory = z.infer<typeof ZInsertCategory>;
