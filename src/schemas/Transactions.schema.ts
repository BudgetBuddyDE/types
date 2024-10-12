import {z} from 'zod';
import {pgTable, varchar, timestamp, integer, doublePrecision} from 'drizzle-orm/pg-core';
import {BaseColumns, DescriptionColumn, OwnerColumn, Tables} from './general';
import {Categories} from './Categories.schema';
import {PaymentMethods} from './PaymentMethods.schema';
import {createInsertSchema, createSelectSchema} from 'drizzle-zod';

export const Transactions = pgTable(Tables.TRANSACTIONS, {
  ...BaseColumns,
  ...OwnerColumn, // FIXME: there should be a foreign key to the user table
  category: integer('category_id')
    .references(() => Categories.id)
    .notNull(),
  paymentMethod: integer('payment_method_id')
    .references(() => PaymentMethods.id)
    .notNull(),
  processedAt: timestamp('processed_at').notNull(),
  receiver: varchar('receiver', {length: 120}).notNull(),
  transferAmount: doublePrecision('transfer_amount').notNull(),
  ...DescriptionColumn,
});

export const ZTransaction = createSelectSchema(Transactions);
export type TTransaction = z.infer<typeof ZTransaction>;

export const ZInsertTransaction = createInsertSchema(Transactions, {
  category: s => s.category,
  paymentMethod: s => s.paymentMethod,
  processedAt: s => s.processedAt,
  receiver: s => s.receiver,
  transferAmount: s => s.transferAmount,
  description: s => s.description.optional(),
});
export type TInsertTransaction = z.infer<typeof ZInsertTransaction>;
