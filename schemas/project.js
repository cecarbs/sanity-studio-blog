export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "summary",
      title: "Summary",
      type: "string",
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
    {
      name: "gif",
      title: "GIF",
      type: "image",
      options: {
        hotspots: true,
      },
      fields: [
        {
          name: "description",
          type: "string",
          title: "Description",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },

    {
      name: "body",
      title: "Body",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title",
      publishedAt: "publishedAt",
      slug: "slug",
      media: "mainImage",
    },
  },
};
