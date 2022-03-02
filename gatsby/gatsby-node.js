import path from 'path';

async function turnLocationsIntoPages({ graphql, actions }) {
  // 1. Get a template for this page
  const locationTemplate = path.resolve('./src/templates/Location.js');
  // 2. Query all locations
  const { data } = await graphql(`
    query {
      locations: allSanityLocation {
        nodes {
          id
          name
          slug {
            current
          }
          radioChannel
          additionalInfo
          googleMapsUrl
          appleMapsUrl
        }
      }
    }
  `);
  // 3. Loop over each location and create a page for that location.
  data.locations.nodes.forEach((location) => {
    actions.createPage({
      // what is the URL for this new page ??
      path: `location/${location.slug.current}`,
      component: locationTemplate,
      context: {
        slug: location.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  // create pages dynamically
  // 1. Locations
  await turnLocationsIntoPages(params);
}
