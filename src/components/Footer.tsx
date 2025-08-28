// import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="md:col-span-1">
          <h2 className="text-2xl font-semibold">We’re a brands</h2>
          <h2 className="text-2xl font-light">best friend</h2>
          <a
            href="#"
            className="mt-6 inline-block text-sm font-medium border-b-2 border-red-500 hover:text-red-500 transition"
          >
            Let’s talk
          </a>
        </div>

        {/* Explore Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Explore</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Services Links */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Brand
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Marketing
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-semibold uppercase mb-4">Questions?</h3>
          <div className="text-sm space-y-3">
            <div>
              <p className="font-semibold">Call Us</p>
              <p>0121 345 678</p>
            </div>
            <div>
              <p className="font-semibold">Email Us</p>
              <p>info@digitalspaniel.co.uk</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl mx-auto mt-12 border-t pt-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
        <p>
          Copyright © Digital Spaniel {new Date().getFullYear()}. All rights
          reserved.
        </p>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a href="#">
            <FaFacebookF className="hover:text-gray-700" />
          </a>
          <a href="#">
            <FaTwitter className="hover:text-gray-700" />
          </a>
          <a href="#">
            <FaInstagram className="hover:text-gray-700" />
          </a>
          <a href="#">
            <FaLinkedinIn className="hover:text-gray-700" />
          </a>
        </div>
      </div>
    </footer>
  );
}
