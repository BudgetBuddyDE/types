import {serial, timestamp, text} from 'drizzle-orm/pg-core';

export enum Tables {
  CATEGORIES = 'categories',
  PAYMENT_METHODS = 'payment_methods',
  TRANSACTIONS = 'transactions',
  SUBSCRIPTIONS = 'subscriptions',
  NEWSLETTERS = 'newsletters',
  NEWSLETTER_SUBSCRIPTIONS = 'newsletter_subscriptions',
  STOCK_EXCHANGES = 'stock_exchanges',
  STOCK_POSITIONS = 'stock_positions',
  STOCK_WATCHLISTS = 'stock_watchlists',
}

export const UpdatedAtColumn = {
  updatedAt: timestamp('updated_at')
    .defaultNow()
    .$onUpdate(() => new Date())
    .notNull(),
};

export const CreatedAtColumn = {createdAt: timestamp('created_at').defaultNow()};

export const BaseColumns = {
  id: serial('id').primaryKey(),
  ...CreatedAtColumn,
  ...UpdatedAtColumn,
};

export const OwnerColumn = {owner: text('owner').notNull()};

export const DescriptionColumn = {description: text('description')};
