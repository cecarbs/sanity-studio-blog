export default {
  name: "category",
  title: "Category",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule) => {
        return Rule.required().min(82);
      },
    },
    {
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Image alt",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
