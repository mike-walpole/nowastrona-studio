import { defineType, defineField } from 'sanity'

const tierSchema = defineType({
  name: 'pricingTier',
  title: 'Pricing Tier',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Tier Name' }),
    defineField({ name: 'oldprice', type: 'number', title: 'Old Price' }),
    defineField({ name: 'price', type: 'number', title: 'Price' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'features', type: 'array', of: [{ type: 'string' }], title: 'Features' }),
  ],
})

const addonSchema = defineType({
  name: 'addon',
  title: 'Add-on',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Add-on Name' }),
    defineField({ name: 'price', type: 'number', title: 'Price' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
  ],
})

const hostingOptionSchema = defineType({
  name: 'hostingOption',
  title: 'Hosting Option',
  type: 'object',
  fields: [
    defineField({ name: 'name', type: 'string', title: 'Option Name' }),
    defineField({ name: 'price', type: 'number', title: 'Price' }),
    defineField({ name: 'description', type: 'text', title: 'Description' }),
    defineField({ name: 'features', type: 'array', of: [{ type: 'string' }], title: 'Features' }),

  ],
})

export const pricingSchema = defineType({
  name: 'pricing',
  title: 'Pricing',
  type: 'document',
  fields: [
    defineField({
        name: 'service',
        title: 'Service',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
    defineField({
      name: 'tiers',
      title: 'Pricing Tiers',
      type: 'array',
      of: [tierSchema],
      validation: (Rule) => Rule.required().length(3),
    }),
    defineField({
      name: 'addons',
      title: 'Add-ons',
      type: 'array',
      of: [addonSchema],
      validation: (Rule) => Rule.required(),
     
    }),
    defineField({
      name: 'hostingOptions',
      title: 'Hosting Options',
      type: 'array',
      of: [hostingOptionSchema],
      validation: (Rule) => Rule.required().length(2),
    }),
  ],
})

export default pricingSchema
