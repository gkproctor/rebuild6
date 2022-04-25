import React, { useState } from 'react';
import { navigate } from 'gatsby-link';
import SEO from '../components/SEO';

function encode(data) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

export default function ContactPage() {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <>
      <SEO title="Contact" />
      <div className="left">
        <p>
          Send me a message if you have any suggestions or if you find a
          problem. If you want a location added that is between Prado and the
          Ports then please fill out this form to let me know. I'll check it out
          and get back to you.
        </p>
      </div>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="clownsOnly"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label htmlFor="clowns">
            You're a sucker!!:{' '}
            <input name="clownsOnly" onChange={handleChange} />
          </label>
        </p>
        <p>
          <label htmlFor="name">
            Your name:
            <br />
            <input type="text" name="name" onChange={handleChange} required />
          </label>
        </p>
        <p>
          <label htmlFor="email">
            Your email:
            <br />
            <input type="email" name="email" onChange={handleChange} required />
          </label>
        </p>
        <p>
          <label htmlFor="message">
            Message:
            <br />
            <textarea name="message" onChange={handleChange} required />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </>
  );
}
