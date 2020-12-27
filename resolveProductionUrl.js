const projectUrl = process.env.SANITY_STUDIO_PROJECT_URL;

const previewSecret = process.env.SANITY_STUDIO_PREVIEW_SECRET;

// export default function resolveProductionUrl(document) {
//   if (document.categories[0]._ref === "177f6778-d10c-4710-9c36-6add31b699db")
//     return `${projectUrl}/programming/${document.slug.current}`;
//   if (document.categories[0]._ref === "f2b3f9a2-e935-4c2a-bbb2-b3b04ca5608f")
//     return `${projectUrl}/blog/personal-development/${document.slug.current}`;
//   if (document.categories[0]._ref === "2a79d180-09a6-41f2-a4fa-97453806ab6e")
//     return `${projectUrl}/blog/nutrition-&-fitness/${document.slug.current}`;
// }

// set &category equal to return value of document.categories[0]

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`;
}

//DEFINE ENV VARIABLE FOR YOU SECRET
/*
`${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
*/

//
