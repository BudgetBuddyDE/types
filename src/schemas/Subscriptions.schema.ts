import {z} from 'zod';
import {pgTable, integer, doublePrecision, boolean} from 'drizzle-orm/pg-core';
import {BaseColumns, DescriptionColumn, OwnerColumn, Tables} from './general';
import {Categories} from './Categories.schema';
import {PaymentMethods} from './PaymentMethods.schema';
import {createInsertSchema, createSelectSchema} from 'drizzle-zod';

export const Subscriptions = pgTable(Tables.SUBSCRIPTIONS, {
  ...BaseColumns,
  ...OwnerColumn, // FIXME: there should be a foreign key to the user table
  category: integer('category_id')
    .references(() => Categories.id)
    .notNull(),
  paymentMethod: integer('payment_method_id')
    .references(() => PaymentMethods.id)
    .notNull(),
  paused: boolean('paused').default(false).notNull(),
  exexcuteAt: integer('execute_at').notNull(),
  transferAmount: doublePrecision('transfer_amount').notNull(),
  ...DescriptionColumn,
});

export const ZSubscription = createSelectSchema(Subscriptions);
export type TSubscription = z.infer<typeof ZSubscription>;

export const ZInsertSubscription = createInsertSchema(Subscriptions, {
  category: s => s.category,
  paymentMethod: s => s.paymentMethod,
  paused: s => s.paused,
  exexcuteAt: s =>
    s.exexcuteAt
      .positive('Needs to be an positive number')
      .min(1, "Can't be smaller than 1")
      .max(31, "Can't be greater than 31"),
  transferAmount: s => s.transferAmount,
  description: s => s.description.optional(),
});
export type TInsertSubscription = z.infer<typeof ZInsertSubscription>;
