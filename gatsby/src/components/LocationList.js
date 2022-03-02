import React from 'react';
import { Link } from 'gatsby';
// import Img from 'gatsby-image';

function SingleLocation({ location }) {
  return (
    <div>
      <Link to={`/location/${location.slug.current}`}>
        <h2>
          <span className="mark">{location.name}</span>
        </h2>
        {/* <Img fluid={location.image.asset.fluid} alt={location.name} /> */}
      </Link>
    </div>
  );
}

export default function LocationList({ locations }) {
  return (
    <div>
      {locations.map((location) => (
        <SingleLocation key={location.id} location={location} />
      ))}
    </div>
  );
}
