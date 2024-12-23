import React from "react";
import { FiSend } from "react-icons/fi";
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkmode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkmode }) => {

  // Define sendEmail function with proper types
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Log form data for debugging
    const formData = new FormData(e.target as HTMLFormElement);
    for (let [name, value] of formData.entries()) {
      console.log(`${name}: ${value}`);
    }

    // Send the form data using emailjs
    emailjs.sendForm('service_8keg0l7', 'template_llc44ng', e.target as HTMLFormElement, 'aQ0BgXMYpZR_0TZBm')
      .then(
        () => {
          alert("Message sent successfully!");
        },
        () => {
          alert("There was an error sending your message. Please try again.");
        }
      );
  }

  return (
    <div className={`${darkmode ? 'text-white' : ''} my-20 flex items-center justify-center flex-col font-semibold`} id="contact">
      <h1 className={`${darkmode ? "text-white" : ""} text-5xl font-semibold mb-10`}>Contact Me</h1>
      <p className="text-center mb-10">
        You can directly contact me here 
        <br />
        <span className={`${darkmode ? 'text-white' : ''} text-black font-medium`}>
          abhishekmaurya.webdev@gmail.com
        </span>
      </p>
      <div className="flex flex-col gap-2 w-full lg:w-1/2">
        <form onSubmit={sendEmail}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className={`${darkmode ? 'text-gray-400' : ''} p-4 w-full rounded-md mb-2`}
            placeholder="Your email"
            required
          />

          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className={`${darkmode ? 'text-gray-400' : ''} p-4 w-full rounded-md mb-2`}
            placeholder="Name"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
            className={`${darkmode ? 'text-gray-400' : ''} p-4 h-64 w-full rounded-md mb-2`}
            required
          />

          <button
            type="submit"
            className={`w-32 px-4 py-2 font-semibold bg-black text-white ${darkmode ? 'bg-blue-600' : ''} flex items-center justify-center gap-2 rounded-full transform transition-all hover:scale-105 duration-200`}
          >
            Send <span className="text-sm"><FiSend /></span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
