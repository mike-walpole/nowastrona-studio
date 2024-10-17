import { defineType, defineField } from 'sanity'

const faqSchema = defineType({
    name: 'faq',
    title: 'FAQ',
    type: 'document',
    fields: [
      defineField({
        name: 'question',
        title: 'Question',
        type: 'string',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'answer',
        title: 'Answer',
        type: 'text',
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: 'order',
        title: 'Order',
        type: 'number',
        description: 'Use this field to specify the order of the FAQ items',
      }),
    ],
  })

export default faqSchema
