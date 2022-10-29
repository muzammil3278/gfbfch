export default {
    name: 'animal',
    type: 'document',
      title: 'Animal',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Title'
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      },
      {
        name: 'option1',
        type: 'string',
        title: 'Option1'
      },
      {
        name: 'option2',
        type: 'string',
        title: 'Option2'
      }
    ]
  }