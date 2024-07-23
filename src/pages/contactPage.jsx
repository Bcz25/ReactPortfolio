import { useState } from 'react';




function Contact(){
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: '',
    });
  
    // Function to update state on input change
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };
  
    // Function to handle form submission
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you would typically send the data to a server or email
      const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
      const newSubmission = { ...formData };
      existingSubmissions.push(newSubmission);
      localStorage.setItem('formSubmissions', JSON.stringify(existingSubmissions));
      alert('Thank you for your message!');
  
      // Clear the form
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    };
  
    return (
      <div>
        {/* Existing content */}
        <div className="bg-gray-900 text-gray-400 text-center rounded p-2 shadow-xl mb-12 mx-auto w-1/2">
        <h2 className="text-4xl font-bold">Contact Me</h2>
        </div>
        {/* Contact Form */}
        <div className="contact-form bg-gray-400 p-6 rounded shadow-xl my-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-900 text-sm font-bold mb-2">Name:</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-900 text-sm font-bold mb-2">Email:</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold bg-gray-200 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-900 text-sm font-bold mb-2">Message:</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 font-bold bg-gray-200 leading-tight focus:outline-none focus:shadow-outline"></textarea>
            </div>
            <button type="submit" className="text-gray-900 font-bold bg-teal-700 rounded shadow p-3 hover:bg-teal-900">Submit</button>
          </form>
        </div>
      </div>
    );
  }

  export default Contact;