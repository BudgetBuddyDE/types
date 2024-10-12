import {z} from 'zod';
import {createSelectSchema, createInsertSchema} from 'drizzle-zod';
import {pgTable, varchar, boolean} from 'drizzle-orm/pg-core';
import {Tables, BaseColumns, OwnerColumn, DescriptionColumn, CreatedAtColumn, UpdatedAtColumn} from './general';

export const Newsletters = pgTable(Tables.NEWSLETTERS, {
  newsletter: varchar('newsletter', {length: 30}).primaryKey().notNull(),
  enabled: boolean('enabled').default(false).notNull(),
  name: varchar('name', {length: 30}).notNull(),
  ...DescriptionColumn,
  ...CreatedAtColumn,
  ...UpdatedAtColumn,
});

export const ZNewsletter = createSelectSchema(Newsletters);
export type TNewsletter = z.infer<typeof ZNewsletter>;

export const ZInsertNewsletter = createInsertSchema(Newsletters, {
  newsletter: s => s.newsletter,
  enabled: s => s.enabled,
  name: s => s.name,
  description: s => s.description.optional(),
});
export type TInsertNewsletter = z.infer<typeof ZInsertNewsletter>;

/**
 *
 */

export const NewsletterSubscriptions = pgTable(Tables.NEWSLETTER_SUBSCRIPTIONS, {
  ...BaseColumns,
  ...OwnerColumn, // FIXME: there should be a foreign key to the user table
  newsletter: varchar('newsletter', {length: 30})
    .references(() => Newsletters.newsletter)
    .notNull(),
});

export const ZNewsletterSubscription = createSelectSchema(NewsletterSubscriptions);
export type TNewsletterSubscription = z.infer<typeof ZNewsletterSubscription>;

export const ZInsertNewsletterSubscription = createInsertSchema(NewsletterSubscriptions, {
  owner: s => s.owner,
  newsletter: s => s.newsletter,
});
export type TInsertNewsletterSubscription = z.infer<typeof ZInsertNewsletterSubscription>;
