import React, { useEffect, useRef, useState } from 'react'
import card01 from '../assets/homeimages/card01.png'
import card02 from '../assets/homeimages/card02.jpg'
import card03 from '../assets/homeimages/card03.jpg'
import Footer from '../Components/Footer'
import AboutHeader from '../Components/AboutHeader'

const FULL_TEXT = "What we do best";

function About() {
   const [displayed, setDisplayed] = useState("");
   const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      let i = 0;
      const interval = setInterval(() => {
        setDisplayed(FULL_TEXT.slice(0, ++i));
        if (i === FULL_TEXT.length) clearInterval(interval);
      }, 80);
    }, { threshold: 0.4 });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);



  return (
    <>
      {/* Header */}
          <AboutHeader/>

    {/* capabilites */}
          <div className="lg:w-full  w-full h-auto bg-[#07050D] flex justify-center items-center">
            <div className="w-83.75 h-352.5 lg:w-7xl lg:h-[852.68px]  flex-col flex justify-center">
              <div className="lg:w-3xl lg:h-40 w-83.75 h-41.75 lg:ms-64 flex-col justify-center">
                <div className="w-83.75 h-10.75 lg:w-3xl lg:h-18  flex justify-center items-center">
 <h1 ref={ref} className="text-white text-4xl lg:text-6xl font-semibold">
      {displayed}
      {displayed.length < FULL_TEXT.length && (
        <span style={{ borderRight: "3px solid white", marginLeft: 2 }}>&nbsp;</span>
      )}
    </h1>                </div>
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


    {/* footer */}
        <Footer/>
    </>
  )
}

export default About