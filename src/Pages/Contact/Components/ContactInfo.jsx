import React from "react";
import { FaInstagram } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold">Connect With Us</h2>

      <div className="space-y-4">
        <p><strong>Phone:</strong> +91 7907414712</p>
        <p><strong>Email:</strong> readmaxglobaleducation@gmail.com</p>
        <p><strong>Office Hours:</strong></p>
        <p className="text-sm text-textSecondary">
          Monday – Saturday: 9:30 AM – 6:00 PM<br />
          Sunday: Closed
        </p>
      </div>

      {/* Social */}
      <div>
        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
       <div className="flex gap-4">
       <a
  href="https://www.instagram.com/readmax_career_assistant" // replace with your real Instagram handle
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center bg-[#8B4513] text-white rounded-full hover:bg-[#A0522D] transition"
>
  <FaInstagram />
</a>


                 </div>
      </div>
    </div>
  );
}

export default ContactInfo;
