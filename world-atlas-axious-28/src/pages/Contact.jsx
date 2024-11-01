import React from 'react'
// The onSubmit={handleFormSubmit} handles the form submission in React.
// event.preventDefault() prevents the default action (like reloading the page).
// new FormData(event.target) gathers all form data, 
// and Object.fromEntries(formData.entries()) converts it into an object, making it easier to work with in JavaScript.

const handleFormSubmit = (event) => {
  event.preventDefault(); // Prevents the default form submission behavior
  const formData = new FormData(event.target);
  const formInputData = Object.fromEntries(formData.entries());
  console.log(formInputData); // Logs the form data as an object
};

function Contact() {
  return (
    <section className="section-contact">
    <h2 className="container-title">Contact Us</h2>

    <div className="contact-wrapper container">
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="enter your name"
          name="username"
          required
          autoComplete="off"
        />

        <input
          type="email"
          className="form-control"
          placeholder="Enter you email"
          name="email"
          required
          autoComplete="off"
        />

        <textarea
          className="form-control"
          rows="10"
          placeholder="Enter your message"
          name="message"
          required
          autoComplete="off"
        ></textarea>

        <button type="submit" value="send">
          Send
        </button>
      </form>
    </div>
  </section>
  )
}

export default Contact