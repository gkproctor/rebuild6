import { WiTrain as icon } from 'react-icons/wi';

export default {
  // Computer Name
  name: 'location',
  // visible title
  title: 'Locations',
  type: 'document',
  icon,
  fields: [
    {
      // I don't think that this field is necessary
      name: 'id',
      title: 'ID',
      type: 'string',
      description:
        'ID for this location entry (should be auto generated somehow)',
    },
    {
      name: 'name',
      title: 'Location Name',
      type: 'string',
      description: 'Name of this location',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'radioChannel',
      title: 'Radio Channel',
      type: 'string',
      description: 'Radio channel to be on at this location',
    },
    {
      name: 'additionalInfo',
      title: 'Additional Info',
      type: 'string',
      description: 'Directions after you arrive',
    },
    {
      title: 'Google Maps URL Link',
      name: 'googleMapsUrl',
      type: 'url',
      options: {
        title: 'Link',
        name: 'href',
        type: 'url',
        validation: (Rule) =>
          Rule.uri({
            scheme: ['http', 'https'],
          }),
      },
    },
    {
      title: 'Apple Maps URL Link',
      name: 'appleMapsUrl',
      type: 'url',
      options: {
        title: 'Link',
        name: 'href',
        type: 'url',
        validation: (Rule) =>
          Rule.uri({
            scheme: ['http', 'https'],
          }),
      },
    },
    {
      title: 'Location Coordinates',
      name: 'coordinates',
      type: 'geopoint',
    },
    // This is the original way to include a single image for each location
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
  // This displays the image next to the Location name in Sanity studio
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
    prepare: ({ title, media }) => ({
      title,
      media,
    }),
  },
};
