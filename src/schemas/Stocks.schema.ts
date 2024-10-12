import {z} from 'zod';
import {pgTable, varchar, timestamp, integer, doublePrecision} from 'drizzle-orm/pg-core';
import {BaseColumns, CreatedAtColumn, DescriptionColumn, OwnerColumn, Tables, UpdatedAtColumn} from './general';
import {createInsertSchema, createSelectSchema} from 'drizzle-zod';

export const StockExchanges = pgTable(Tables.STOCK_EXCHANGES, {
  symbol: varchar('symbol', {length: 5}).notNull(),
  name: varchar('name', {length: 30}).notNull(),
  ...DescriptionColumn,
  ...CreatedAtColumn,
  ...UpdatedAtColumn,
});

export const ZStockExchange = createSelectSchema(StockExchanges);
export type TStockExchange = z.infer<typeof ZStockExchange>;

export const ZInsertStockExchange = createInsertSchema(StockExchanges, {
  symbol: s => s.symbol,
  name: s => s.name,
  description: s => s.description.optional(),
});
export type TInsertStockExchange = z.infer<typeof ZInsertStockExchange>;

/**
 *
 */

export const StockPositions = pgTable(Tables.STOCK_POSITIONS, {
  ...BaseColumns,
  ...OwnerColumn, // FIXME: there should be a foreign key to the user table
  exchange: varchar('exchange', {length: 5})
    .references(() => StockExchanges.symbol)
    .notNull(),
  boughtAt: timestamp('bought_at').notNull(),
  isin: varchar('isin', {length: 12}).notNull(),
  buyInPrice: doublePrecision('buy_in_price').notNull(),
  currency: varchar('currency', {length: 3}).notNull(),
  quantity: integer('quantity').notNull(),
  ...DescriptionColumn,
});

export const ZStockPosition = createSelectSchema(StockPositions);
export type TStockPosition = z.infer<typeof ZStockPosition>;

export const ZInsertStockPosition = createInsertSchema(StockPositions, {
  exchange: s => s.exchange,
  boughtAt: s => s.boughtAt,
  isin: s => s.isin,
  buyInPrice: s => s.buyInPrice,
  currency: s => s.currency,
  quantity: s => s.quantity,
  description: s => s.description.optional(),
});
export type TInsertStockPosition = z.infer<typeof ZInsertStockPosition>;

/**
 *
 */

export const StockWatchlists = pgTable(Tables.STOCK_WATCHLISTS, {
  ...BaseColumns,
  ...OwnerColumn, // FIXME: there should be a foreign key to the user table
  exchange: varchar('exchange', {length: 5})
    .references(() => StockExchanges.symbol)
    .notNull(),
  isin: varchar('isin', {length: 12}).notNull(),
  ...DescriptionColumn,
});

export const ZStockWatchlist = createSelectSchema(StockWatchlists);
export type TStockWatchlist = z.infer<typeof ZStockWatchlist>;

export const ZInsertStockWatchlist = createInsertSchema(StockWatchlists, {
  exchange: s => s.exchange,
  isin: s => s.isin,
  description: s => s.description.optional(),
});
export type TInsertStockWatchlist = z.infer<typeof ZInsertStockWatchlist>;
