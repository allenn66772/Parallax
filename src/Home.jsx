import React from 'react'
import Header from './Components/Header'
import banner02 from './assets/banner02.avif'
import banner03 from './assets/banner03.jpg'
import banner04 from './assets/banner04.jpg'
import card01 from './assets/card01.png'
import card02 from './assets/card02.jpg'
import card03 from './assets/card03.jpg'
import { BsBriefcase } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { HiOutlineUserGroup } from "react-icons/hi";
import { SiWebflow } from "react-icons/si";
import { FaRegUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Footer from './Components/Footer'

function Home() {
  return (
    <>
    {/* Header */}
    <Header/>
    {/* Main Contents */}
    {/* Div 1 */}
  <div className="lg:w-full lg:h-[577px] w-full h-[454px]   bg-[#07050D] flex justify-center items-center px-4">

  <div className="w-full lg:w-[1280px] lg:h-[353px] flex justify-center">

    <div className="w-full lg:w-[768px] lg:h-[353px] flex flex-col justify-center items-center">

      {/* Heading */}
      <p className="text-white 
                    text-[38px] sm:text-[48px] md:text-[60px] 
                    lg:text-[82px] 
                    text-center 
                    leading-[45px] sm:leading-[55px] md:leading-[65px] 
                    lg:leading-[90px]">
        Software that moves
        <span className="block">business forward</span>
      </p>

      {/* Paragraph */}
      <p className="text-white text-sm sm:text-base lg:text-lg 
                    text-center mt-4 max-w-[90%] lg:max-w-full">
        We build digital solutions that matter. From custom software to strategic marketing, PremiumTech Solutions delivers the work that drives real results.
      </p>

      {/* Button */}
      <div className="mt-8 lg:mt-[40px] flex justify-center">
        <button className="w-[130px] sm:w-[150px] h-[48px] sm:h-[56px] 
                           text-white text-[16px] sm:text-[20px] font-medium 
                           rounded-full 
                           bg-gradient-to-b from-[#1e5a8a] to-[#0b3a66]
                           shadow-[inset_0_2px_4px_rgba(255,255,255,0.25),_0_6px_12px_rgba(0,0,0,0.4)]
                           flex items-center justify-center 
                           transition-all duration-300
                           hover:scale-105 
                           hover:shadow-[inset_0_2px_6px_rgba(255,255,255,0.35),_0_8px_18px_rgba(0,0,0,0.5)]">
          Explore
        </button>
      </div>

    </div>
  </div>
</div>
     {/* image 1 Div */}
     <div className="lg:w-full lg:h-[710px] w-full h-[211px]"><img className="lg:w-full lg:h-[710px] w-full h-[211px]" src={banner02}  alt="" /></div>

     {/* capabilites */}
      <div className="lg:w-full  w-full h-auto bg-[#07050D] flex justify-center items-center">
        <div className="w-83.75 h-352.5 lg:w-7xl lg:h-[852.68px]  flex-col flex justify-center">
          <div className="lg:w-3xl lg:h-40 w-83.75 h-41.75 lg:ms-64 flex-col justify-center">
            <div className="w-83.75 h-10.75 lg:w-3xl lg:h-18  flex justify-center items-center">
              <h1 className='text-white text-4xl lg:text-6xl font-semibold'>What we do best </h1>
            </div>
            <div className="w-83.75 h-26  lg:w-3xl lg:h-16 mt-6">
              <p className='text-white text-center text-sm lg:text-lg'>Three core disciplines shape everything we create. Each one built on years of <br /> experience and a commitment to excellence.</p>
            </div>
          </div>
          <div className="w-83.75 h-266.25 lg:w-7xl lg:h-[443.68px]  lg:flex justify-center lg:mt-20 mt-12">
            {/* Card 1 */}
            <div className="lg:w-[394.67px] lg:h-[443.68px] w-[335px] h-[323px] transition-all duration-500 ease-out hover:-translate-y-2
                             hover:shadow-[0_20px_50px_rgba(37,99,235,0.35)] rounded-2xl">
          <div className="w-[335px] h-[198px] lg:w-[394.67px] lg:h-[233.68px] rounded-t-2xl overflow-hidden">
           <img src={card02} alt="" className="w-full h-full object-cover"/></div>
                <div className="lg:w-[394.67px] lg:h-[178px] w-[335px] h-[101px] mt-[24px] lg:mt-[32px]">
                  <div className="w-[335px] h-[29px] lg:w-[394.67px] lg:h-[96px]"><h1 className='lg:text-5xl text-3xl text-white text-center font-semibold'>Software Development</h1></div>
                  <div className="w-[335px] h-[101px] mt-[20px] lg:w-[394.67px] lg:h-[58px] lg:mt-[22px] ">
                    <p className='text-center  text-sm text-white'>Custom applications engineered for scale, security, and performance.</p>
                  </div>
                </div>
            </div>
            {/* card 2 */}
            <div className="lg:w-[394.67px] lg:h-[395.68px] w-[335px] h-[323px] lg:ms-[48px] lg:mt-0  mt-[48px] transition-all duration-500 ease-out hover:-translate-y-2
                             hover:shadow-[0_20px_50px_rgba(37,99,235,0.35)] rounded-2xl">
              <div className="lg:w-[394.67px] lg:h-[233.68px] w-[335px] h-[198px] rounded-t-2xl overflow-hidden"><img src={card01} className='w-full h-full object-cover'  alt="" /></div>
              <div className="lg:w-[394.67px] lg:h-[130px] w-[335px] h-[101px] lg:mt-[32px] mt-[24px]">
                <div className="w-[335px] h-[29px] lg:w-[394.67px] lg:h-[48px]"><h1 className='lg:text-5xl text-3xl text-white text-center font-semibold'>Digital Marketing</h1></div>
                <div className="w-[335px] h-[52px] lg:w-[394.67px] lg:h-[58px] lg:mt-[22px] mt-[20px]">
                  <p className='text-center  text-sm text-white'>Strategic campaigns that reach the right audience and drive measurable growth.</p>
                </div>
              </div>
            </div>
            {/* card 3 */}
            <div className="lg:w-[394.67px] lg:h-[395.68px] w-[335px] h-[323px] lg:ms-[48px] lg:mt-0  mt-[48px] transition-all duration-500 ease-out hover:-translate-y-2
                             hover:shadow-[0_20px_50px_rgba(37,99,235,0.35)] rounded-2xl">
              <div className="w-[335px] h-[198px] lg:w-[394.67px] lg:h-[233.68px] rounded-t-2xl overflow-hidden"><img src={card03} className='w-full h-full  object-cover' alt="" /></div>
              <div className="w-[335px] h-[10px] mt-[24px] lg:w-[394.67px] lg:h-[130px] lg:mt-[32px]">
                <div className="w-[335px] h-[29px] lg:w-[394.67px] lg:h-[48px]"><h1 className='lg:text-5xl text-3xl text-white text-center font-semibold'>UI/UX design</h1></div>
                <div className="w-[335px] h-[52px] mt-[20px] lg:w-[394.67px] lg:h-[58px] lg:mt-[22px]">
                  <p className='text-center  text-sm text-white'>Interfaces designed with users in mind, balancing beauty with function.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* image div */}
      <div className="w-full lg:h-150 h-auto">
        <img src={banner03} className='w-full lg:h-150 h-auto object-cover' alt="" />
      </div>

      {/* div 4  */}
<div className="w-full lg:h-100 h-100 bg-[#07050D] flex justify-center items-center px-4">
  <div className="w-full max-w-5xl flex justify-center items-center py-20++">
    <div className="w-full md:w-[70%] text-center">
      <h1 className="text-4xl lg:text-7xl text-white font-bold leading-tight">
        Premium quality and innovation
      </h1>
      <p className="text-white text-lg lg:text-2xl mt-5 lg:mt-10 leading-relaxed opacity-70">
        We don't cut corners. Every project receives the attention it
        deserves, combining technical excellence with creative thinking
        to solve problems that matter.
      </p>
    </div>
  </div>
</div>
      {/*  */}
       <section className="bg-[#07050D] min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-8xl w-full text-center">

       

        {/* Heading */}
        <h2
          className="text-white font-bold text-5xl md:text-6xl mb-6 leading-tight"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          Why work with us
        </h2>

        {/* Subtext */}
        <p className="text-white/50 text-base md:text-lg max-w-xl mx-auto mb-20 leading-relaxed">
          We've spent years building a reputation on solid work and honest relationships.
          Here's what sets us apart.
        </p>

        {/* Cards Grid - NO MAPPING */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">

          {/* Card 1 */}
          <div className="flex flex-col items-center text-center px-10 py-8">
            <div className="mb-6">
              <BsBriefcase className="text-white text-3xl" />
            </div>
            <h3
              className="text-white font-bold text-2xl mb-4 leading-snug"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Deep technical<br />expertise
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              Our team brings proven experience across industries and technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-center px-10 py-8">
            <div className="mb-6">
              <MdOutlineDesignServices className="text-white text-3xl" />
            </div>
            <h3
              className="text-white font-bold text-2xl mb-4 leading-snug"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Solutions built for<br />you
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              No templates, no shortcuts—just work tailored to your specific needs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-center px-10 py-8">
            <div className="mb-6">
              <HiOutlineUserGroup className="text-white text-3xl" />
            </div>
            <h3
              className="text-white font-bold text-2xl mb-4 leading-snug"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              Clear communication<br />always
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              You'll know what's happening every step of the way, no surprises.
            </p>
          </div>

        </div>

       

      </div>
    </section>
    {/*  */}
      <section className="w-full min-h-screen bg-[#07050D] flex flex-col justify-center items-center px-6 py-24">

      {/* Header */}
      <div className="text-center mb-16">
        <h2
          className="text-white font-bold text-5xl md:text-6xl mb-4"
          style={{ fontFamily: "'Georgia', serif" }}
        >
          What clients say
        </h2>
        <p className="text-white/40 text-base tracking-wide">
          Real results from real projects
        </p>
      </div>

      {/* Cards - NO MAPPING */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10 max-w-8xl w-full">

        {/* Card 1 */}
        <div className="flex flex-col items-start text-left px-10 py-8 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <SiWebflow className="text-2xl" />
            <span className="text-white font-semibold text-base tracking-wide">Webflow</span>
          </div>

          {/* Quote */}
          <p
            className="text-white font-bold text-xl leading-snug"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            They transformed our entire digital presence in six months.
          </p>

          {/* Avatar + Name */}
          <div className="flex flex-col items-center w-full mt-auto pt-4 gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <FaRegUserCircle className="text-white/50 text-2xl" />
            </div>
            <p className="text-white text-sm font-semibold">Sarah Mitchell</p>
            <p className="text-white/40 text-xs">CEO, Nexus Corp</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-start text-left px-10 py-8 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <SiWebflow className="text-2xl" />
            <span className="text-white font-semibold text-base tracking-wide">Webflow</span>
          </div>

          {/* Quote */}
          <p
            className="text-white font-bold text-xl leading-snug"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            The software they built handles our operations flawlessly.
          </p>

          {/* Avatar + Name */}
          <div className="flex flex-col items-center w-full mt-auto pt-4 gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <FaRegUserCircle className="text-white/50 text-2xl" />
            </div>
            <p className="text-white text-sm font-semibold">James Chen</p>
            <p className="text-white/40 text-xs">Operations Director, Apex Industries</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-start text-left px-10 py-8 gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-white">
            <SiWebflow className="text-2xl" />
            <span className="text-white font-semibold text-base tracking-wide">Webflow</span>
          </div>

          {/* Quote */}
          <p
            className="text-white font-bold text-xl leading-snug"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Their marketing strategy doubled our customer acquisition rate.
          </p>

          {/* Avatar + Name */}
          <div className="flex flex-col items-center w-full mt-auto pt-4 gap-2">
            <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
              <FaRegUserCircle className="text-white/50 text-2xl" />
            </div>
            <p className="text-white text-sm font-semibold">Elena Rodriguez</p>
            <p className="text-white/40 text-xs">Marketing Lead, Velocity Ventures</p>
          </div>
        </div>

      </div>
    </section>
    {/*  */}
     <section className="w-full bg-[#07050D] px-8 md:px-16 py-16">

      {/* Top Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8 mb-16">

        {/* Left */}
        <div className="md:w-[45%]">
          <p className="text-white/50 text-sm tracking-widest uppercase mb-3">
            Track record
          </p>
          <h2
            className="text-white font-bold text-4xl md:text-5xl leading-tight"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            Numbers that speak<br />for themselves
          </h2>
        </div>

        {/* Right */}
        <div className="md:w-[45%] flex flex-col gap-4">
          <p className="text-white/60 text-base leading-relaxed">
            Over a decade of building software that works. Hundreds of
            projects delivered. Clients who come back because we deliver
            what we promise.
          </p>
          {/* <button className="text-white/40 hover:text-white transition-colors duration-200 self-start">
            <MdArrowForwardIos className="text-lg" />
          </button> */}
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mb-12" />

      {/* Stats Row - NO MAPPING */}
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">

        {/* Stat 1 */}
        <div className="px-0 md:pr-12 py-6">
          <p
            className="text-white font-bold text-6xl md:text-7xl leading-none mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            500+
          </p>
          <p className="text-white font-semibold text-base tracking-wide uppercase">
            Projects completed
          </p>
        </div>

        {/* Stat 2 */}
        <div className="px-0 md:px-12 py-6">
          <p
            className="text-white font-bold text-6xl md:text-7xl leading-none mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            95%
          </p>
          <p className="text-white font-semibold text-base tracking-wide uppercase">
            Client retention rate
          </p>
        </div>

        {/* Stat 3 */}
        <div className="px-0 md:pl-12 py-6">
          <p
            className="text-white font-bold text-6xl md:text-7xl leading-none mb-3"
            style={{ fontFamily: "'Georgia', serif" }}
          >
            12
          </p>
          <p className="text-white font-semibold text-base tracking-wide uppercase">
            Years in business
          </p>
        </div>

      </div>

    </section>
    {/*  */}
        <section className="w-full min-h-[400px] bg-[#07050D] flex flex-col justify-center items-center text-center px-6 py-24">

      {/* Heading */}
      <h2
        className="text-white font-bold text-5xl md:text-6xl leading-tight mb-6 max-w-2xl"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        Ready to build something great
      </h2>

      {/* Subtext */}
      <p className="text-white/50 text-base md:text-lg mb-10">
        Let's talk about what your business needs and how we can help.
      </p>

      {/* Button - centered with mx-auto */}
      <div className="flex justify-center w-full">
        <button className="bg-[#1e3a5f] hover:bg-[#254d7a] text-white text-sm font-medium px-8 py-3 rounded-full transition-colors duration-200">
          Start
        </button>
      </div>

    </section>
    {/* image div */}
      <div className="w-full lg:h-150">
        <img src={banner04} className='w-full h-full object-cover'  alt="" />
      </div>
      {/* footer */}
      <Footer/>
  
    </>
  )
}

export default Home