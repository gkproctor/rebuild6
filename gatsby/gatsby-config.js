import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Van Maps`,
    siteUrl: `https://vanmaps.net`,
    description: `Navigation for van drivers going to train locations`,
    twitter: `@ProctorUntamed`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      // this is the name of the plug-in you are adding
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'hu0ksp6y',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
