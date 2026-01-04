import React from 'react';
import  { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for contacting REFLECT!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg bg-zinc-900 rounded-2xl p-8 shadow-lg">
        
        <h2 className="text-3xl font-bold text-center mb-2">
          Contact Us
        </h2>
        <p className="text-center text-gray-400 mb-6">
          We'd love to hear from you
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          
          <div>
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your name"
              className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Your email"
              className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-white"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder="Your message"
              className="w-full px-4 py-2 rounded bg-black border border-gray-700 focus:outline-none focus:border-white resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-xs text-gray-500 mt-6">
          © REFLECT — Fashion That Reflects You
        </p>
      </div>
    </div>
  );
};


export default Contact;