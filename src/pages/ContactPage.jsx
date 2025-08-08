import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import SmilingCustomer from '../assets/images/contact/smiling.jpeg';

// Social media icons
import Facebook from "../assets/images/home/fb.png";
import Instagram from "../assets/images/home/intsa.png";
import Twitter from "../assets/images/home/twitter.png";
import Linkdin from "../assets/images/home/link.png";
import Basket from "../assets/images/home/basket.png";

const ContactPage = () => {
  return (
    <>
      {/* Top Address Bar */}
      <div className="bg-charocal px-4 sm:px-8 py-2 flex flex-col sm:flex-row justify-between items-center">
        <p className="font-inter text-primary text-[12px] sm:text-[14px] text-center sm:text-left mb-2 sm:mb-0">
          Company Address: ABC Road, City, State, Country, Zip Code
        </p>
        <div className="flex gap-2 items-center">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={Facebook} className="w-5 h-5 sm:w-auto sm:h-auto object-contain cursor-pointer" alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} className="w-5 h-5 sm:w-auto sm:h-auto object-contain cursor-pointer" alt="Instagram" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={Twitter} className="w-5 h-5 sm:w-auto sm:h-auto object-contain cursor-pointer" alt="Twitter" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={Linkdin} className="w-5 h-5 sm:w-auto sm:h-auto object-contain cursor-pointer" alt="LinkedIn" />
          </a>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-primary py-4 px-4 md:px-8">
        <div className="container mx-auto flex flex-wrap justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-[36px] sm:text-[48px] font-bold text-primary font-rasa">
            Latrice
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-primary hover:text-gray-300 font-outfit">
              Home
            </Link>
            <Link to="/client-signup" className="text-primary hover:text-gray-300 font-outfit">
              Client Account
            </Link>
            <Link to="/business-owner" className="text-primary hover:text-gray-300 font-outfit">
              Professional Account
            </Link>
            <Link to="/favorites" className="text-primary hover:text-gray-300 font-outfit">
              Favorites
            </Link>
            <Link to="/contact" className="text-primary hover:text-gray-300 font-outfit">
              Contact Us
            </Link>
          </div>

          {/* Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <button className="text-[13px] bg-secondary text-black px-4 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040] flex items-center justify-center">
              <img src={Basket} className="h-[20px] w-[22px] object-contain" alt="Basket" />
            </button>
            <Link to="/signin" className="text-[13px] bg-secondary text-black px-4 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040]">
              LOG IN
            </Link>
            <Link to="/account-type" className="text-[13px] bg-secondary text-black px-4 py-2 rounded-[30px] shadow-[0px_4px_4px_0px_#00000040_inset]">
              CREATE ACCOUNT
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary p-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative">
        <div className="w-full h-[300px] md:h-[550px]  overflow-hidden">
          <img 
            src={SmilingCustomer}
            alt="Contact Us" 
            className="w-full h-full object-cover "
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x400?text=Contact+Us';
            }}
          />
          <div className="absolute inset-0  bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-rasa mb-2">Contact</h1>
            <p className="text-white text-lg md:text-xl max-w-2xl font-inter">
              Get in Touch With Us – We're Here to Help with Your Beauty and Style Needs.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <div className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Left Column - Contact Information */}
            <div className="w-full md:w-1/2 lg:w-2/5">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F3C41] font-rasa mb-4">Get In Touch</h2>
              <p className="text-gray-700 mb-8 font-inter">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0F3C41] font-rasa mb-4">City Hall</h3>
                <div className="space-y-3 font-inter">
                  <p className="flex items-start">
                    <span className="mr-2">📍</span>
                    <span><strong>Address:</strong> Lorem Ipsum is simply dummy</span>
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2">📞</span>
                    <span><strong>Call:</strong> 1-811-7878-08</span>
                  </p>
                  <p className="flex items-start">
                    <span className="mr-2">✉️</span>
                    <span><strong>Mail:</strong> abc@example.com</span>
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-[#0F3C41] font-rasa mb-4">Opening Hours</h3>
                <p className="font-inter">Mon – Fri: 8:00 am – 4:00 pm</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-3">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-black flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#3b5998] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#c4302b] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#0077b5] flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="w-full md:w-1/2 lg:w-3/5 bg-white p-6 md:p-8 rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-bold text-[#0F3C41] font-rasa mb-6">Leave your message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3C41]"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Country"
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3C41]"
                      required
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3C41]"
                    required
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Write your message..."
                    rows="6"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0F3C41]"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="px-6 py-3 bg-[#0F3C41] text-white font-medium rounded-md hover:bg-[#0a2c2f] transition-colors"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Google Maps Section */}
      <div className="w-full h-[400px] md:h-[500px] mt-8">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27814.96231793528!2d-97.75549744235288!3d30.267248936950185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b5a014ac8dcf%3A0xcf1f9f9b7494b8f0!2sDowntown%20Austin%2C%20Austin%2C%20TX%2C%20USA!5e0!3m2!1sen!2sin!4v1650123456789!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default ContactPage;
