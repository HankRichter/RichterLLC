import React, { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "inquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  return (
    <motion.div
      className="container mx-auto max-w-xl py-16 px-4"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      {success && (
        <p className="text-green-600 text-center mb-4">
          Your message has been sent!
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full border rounded p-3"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full border rounded p-3"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows="5"
          className="w-full border rounded p-3"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-500 transition"
        >
          Send Inquiry
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
