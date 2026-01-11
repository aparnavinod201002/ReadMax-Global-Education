import React from "react";
import { FaInstagram } from "react-icons/fa";

function ContactInfo() {
  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-white">Connect With Us</h2>

      <div className="space-y-4">
        <p className="text-white"><strong>Phone:</strong> +91 7907414712</p>
        <p className="text-white"><strong>Email:</strong> readmaxglobaleducation@gmail.com</p>
        <p className="text-white"><strong>Office Hours:</strong></p>
        <p className="text-sm text-white">
          Monday – Saturday: 9:30 AM – 6:00 PM<br />
          Sunday: Closed
        </p>
      </div>

      {/* Social */}
      <div>
        <h3 className="text-xl font-semibold mb-4 text-white">Follow Us</h3>
       <div className="flex gap-4">
       <a
  href="https://www.instagram.com/readmax_career_assistant" // replace with your real Instagram handle
  target="_blank"
  rel="noopener noreferrer"
  className="w-10 h-10 flex items-center justify-center bg-white text-[#8E745F] rounded-full hover:bg-[#A0522D] transition"
>
  <FaInstagram />
</a>


                 </div>
      </div>
    </div>
  );
}

export default ContactInfo;
