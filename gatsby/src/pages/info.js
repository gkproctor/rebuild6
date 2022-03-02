import React from 'react';
import SEO from '../components/SEO';

export default function InfoPage() {
  return (
    <>
      <SEO title="Info" />
      <div className="center">
        <p>
          <strong>Van Maps </strong>was created to help van drivers find the
          train/crew. Not all pick-up, drop-off or crew change locations are
          easy to find. Hopefully this will ease the frustration of all.
        </p>
        <p>
          These directions will only get you to the city street turn out. Once
          there you will need to find your way to the train using the access
          road. Your navigation app will not work on dirt roads, see the
          directions in the 3rd column to get you to the train. Your safety is
          your responsibility.
        </p>
        <p>
          Be careful when crossing tracks. Using this file with a navigation app
          will use your cell data, see below for instructions if cell data is an
          issue.
        </p>
        <p>
          Select which navigation app you use, if you don't know then select the
          navigation app for the type of phone you have. Next, select the
          location that you would like to go to and allow it to open in the
          navigation app of your choice.
        </p>
        <p>
          Van Maps uses your phone's navigation app, only the gps coordinates
          come from this mobile web app. If cell data is an issue then click on
          the location link to open it. Do NOT click start. In Google Nav click
          "steps", in Apple Maps click to the left of "GO", and you will see
          step by step directions that you can follow which will minimize
          cellular data usage.
        </p>
      </div>
    </>
  );
}
