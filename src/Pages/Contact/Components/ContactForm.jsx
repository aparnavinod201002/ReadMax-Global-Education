import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
const validate = () => {
  const newErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
    newErrors.email = "Enter a valid email address";
  }

  if (!formData.phone.trim()) {
    newErrors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    newErrors.phone = "Phone number must be 10 digits";
  }

  if (!formData.subject.trim()) {
    newErrors.subject = "Subject is required";
  }

  if (!formData.message.trim()) {
    newErrors.message = "Message is required";
  }

  setErrors(newErrors);
  return Object.keys(newErrors).length === 0;
};


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
      if (!validate()) return;


    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message");
    }
  };

  return (
    <>
   
    <div className="bg-white rounded-3xl p-10 shadow-sm">
  <h2 className="text-2xl font-bold mb-8 text-[#8E745F]">Send a Message</h2>

  <form className="space-y-6 text-[#8E745F]" onSubmit={sendEmail}>
    
    <div>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Your Name"
        className="w-full border rounded-xl px-4 py-3"
      />
      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
    </div>

    <div>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Your Email"
        className="w-full border rounded-xl px-4 py-3"
      />
      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
    </div>

    <div>
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        placeholder="Phone Number"
        className="w-full border rounded-xl px-4 py-3"
      />
      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
    </div>

    <div>
      <input
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Subject"
        className="w-full border rounded-xl px-4 py-3"
      />
      {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
    </div>

    <div>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your Message"
        rows="4"
        className="w-full border rounded-xl px-4 py-3"
      />
      {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
    </div>

    <button
      type="submit"
      className="w-full px-6 py-3 bg-[#8E745F] hover:bg-[#A0522D] text-white font-semibold rounded-xl transition"
    >
      Submit
    </button>
  </form>
</div>

    </>
  );
}

export default ContactForm;
