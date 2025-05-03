import React from 'react'

function Contact() {
  return (
    <div className="Contact-form">
      <div className="form-container">
        <h2>Get in Touch</h2>
        <p>We'd love to hear from you! Fill out the form below and we'll get back to you as soon as possible.</p>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="right-img">
<img src="/contac.png" alt="Contact us" />
      </div>
    </div>
  )
}

export default Contact