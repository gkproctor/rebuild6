import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

export default function SingleLocationPage({ data: { location } }) {
  return (
    <>
      <SEO title={location.name} image={location.image?.asset?.fluid?.src} />
      <div className="center" key={location.id}>
        <h2>
          <span className="mark">{location.name}</span>
        </h2>
        <Img fluid={location.image?.asset?.fluid} />
        {/* <h3 className="mark">Additional Information - </h3> */}
        <p className="mark">{location.additionalInfo}</p>
        <p>Use Channel {location.radioChannel}</p>
        <p>Start Navigation Now !!</p>
        <p>
          <a href={location.googleMapsUrl}>
            <button type="button">Google Maps</button>
          </a>
        </p>
        {/* <p>
          <a href={location.appleMapsUrl}>
            <button type="button">Apple Maps</button>
          </a>
        </p> */}
      </div>
    </>
  );
}

// This needs to be dynamic based on the slug passed in via context in gatsby-node.js
export const query = graphql`
  query($slug: String!) {
    location: sanityLocation(slug: { current: { eq: $slug } }) {
      name
      id
      radioChannel
      additionalInfo
      googleMapsUrl
      appleMapsUrl
      image {
        asset {
          fluid(maxWidth: 400) {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`;
