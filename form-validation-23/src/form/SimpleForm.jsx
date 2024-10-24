// Import necessary hooks from React
import React, { useState, useEffect } from 'react';

// Define the SimpleForm component
function SimpleForm() {
  // State to hold form values (username, email, password)
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  // State to hold form error messages
  const [formErrors, setFormErrors] = useState({});
  
  // State to track if the form has been submitted
  const [isSubmit, setIsSubmit] = useState(false);
  
  // State to track if form fields have been touched (interacted with)
  const [touched, setTouched] = useState({
    username: false,
    email: false,
    password: false,
  });

  // Validate form whenever the formValues change
  useEffect(() => {
    const errors = validate(formValues); // Validate current form values
    setFormErrors(errors); // Update state with validation errors
  }, [formValues]); // Dependency array; runs whenever formValues change

 

  // Function to validate form values
  const validate = (values) => {
    const errors = {}; // Initialize an empty object for error messages
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; // Regex for validating email format

    // Validate username
    if (!values.username) {
      errors.username = 'Username is required!'; // Set error message if username is empty
    }
    // Validate email
    if (!values.email) {
      errors.email = 'Email is required!'; // Set error message if email is empty
    } else if (!emailRegex.test(values.email)) {
      errors.email = 'This is not a valid email format!'; // Set error message if email format is invalid
    }
    // Validate password
    if (!values.password) {
      errors.password = 'Password is required!'; // Set error message if password is empty
    } else if (values.password.length < 6) {
      errors.password = 'Password must be more than 6 characters!'; // Set error message if password is too short
    }

    return errors; // Return the errors object
  };
  
   // Handle changes in input fields
   const handleChange = (e) => {
    const { name, value } = e.target; // Destructure the name and value from the event target
    setFormValues({ ...formValues, [name]: value }); // Update the form values state
    setTouched({ ...touched, [name]: true }); // Mark the current field as touched
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const errors = validate(formValues); // Validate current form values
    setFormErrors(errors); // Update state with validation errors

    // Check if there are no errors before proceeding with submission
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true); // Set submission state to true
      // You can handle form submission logic here (e.g., API calls)
    } else {
      setIsSubmit(false); // If errors exist, ensure submission state is false
    }
  };

  // Helper function to check if the form is valid (no errors)
  const isFormValid = (errors) => {
    return Object.keys(errors).length === 0; // Returns true if there are no error keys
  };

  return (
    <div>
      <h2>React Form Validation</h2>
      {/* Show success message upon successful submission */}
      {isSubmit && <div className="success-message">Form submitted successfully!</div>}
      <form onSubmit={handleSubmit}> {/* Handle form submission */}
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            name="username" // Name attribute corresponds to state keys
            value={formValues.username} // Controlled input value
            onChange={handleChange} // Handle input changes
          />
          {/* Show error message only when the field has been touched and there's an error */}
          {touched.username && formErrors.username && (
            <p className="error-message">{formErrors.username}</p>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleChange}
          />
          {/* Show error message only when the field has been touched and there's an error */}
          {touched.email && formErrors.email && (
            <p className="error-message">{formErrors.email}</p>
          )}
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleChange}
          />
          {/* Show error message only when the field has been touched and there's an error */}
          {touched.password && formErrors.password && (
            <p className="error-message">{formErrors.password}</p>
          )}
        </div>

        {/* Submit button is disabled if the form is invalid */}
        <button type="submit" disabled={!isFormValid(formErrors)} className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
}

// Export the SimpleForm component for use in other parts of the application
export default SimpleForm;
