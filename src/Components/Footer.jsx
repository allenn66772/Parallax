import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
     <footer className="w-full bg-[#0e0e0e] px-6 md:px-16 pt-16 pb-8">

      {/* Top - Stay in the loop */}
      <div className="mb-14">
        <h3 className="text-white font-semibold text-lg mb-1">Stay in the loop</h3>
        <p className="text-white/40 text-sm">Get updates on new features and industry insights</p>
      </div>

      {/* Links Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 mb-16">

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Company</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">About us</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Our team</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Careers</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Blog</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Services</a></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Solutions</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Development</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Marketing</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Consulting</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Support</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Resources</a></li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Legal</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Privacy</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Terms</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Cookies</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Compliance</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Contact</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Connect</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Get in touch</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Email us</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Call now</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Visit office</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Follow us</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h4 className="text-white font-semibold text-sm mb-5 tracking-wide">Social</h4>
          <ul className="flex flex-col gap-3">
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">LinkedIn profile</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Twitter account</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Facebook page</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">Instagram feed</a></li>
            <li><a href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">GitHub repository</a></li>
          </ul>
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mb-6" />

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left - Copyright + Links */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center">
          <p className="text-white/30 text-xs">© 2025 PremiumTech Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors duration-200 underline underline-offset-2">Privacy policy</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors duration-200 underline underline-offset-2">Terms of service</a>
            <a href="#" className="text-white/40 text-xs hover:text-white transition-colors duration-200 underline underline-offset-2">Cookies settings</a>
          </div>
        </div>

        {/* Right - Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
            <FaFacebookF className="text-base" />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
            <FaInstagram className="text-base" />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
            <FaXTwitter className="text-base" />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
            <FaLinkedinIn className="text-base" />
          </a>
          <a href="#" className="text-white/40 hover:text-white transition-colors duration-200">
            <FaYoutube className="text-base" />
          </a>
        </div>

      </div>

    </footer>
    
    </>
  )
}

export default Footer