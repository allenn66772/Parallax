import React from 'react'
import Header from './Components/Header'
import banner02 from './assets/banner02.avif'
import card01 from './assets/card01.png'
import card02 from './assets/card02.jpg'
import card03 from './assets/card03.jpg'

function Home() {
  return (
    <>
    {/* Header */}
    <Header/>
    {/* Main Contents */}
    {/* Div 1 */}
  <div className="lg:w-full lg:h-[577px] w-[375px] h-[454px]   bg-[#07050D] flex justify-center items-center px-4">

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
     <div className="lg:w-full lg:h-[710px] w-[375px] h-[211px]"><img className="lg:w-full lg:h-[710px] w-[375px] h-[211px]" src={banner02}  alt="" /></div>

     {/* capabilites */}
      <div className="lg:w-full lg:h-[1076.68px] w-[375px] h-[1538px] bg-[#07050D] flex justify-center items-center">
        <div className="w-[335px] h-[1410px] lg:w-[1280px] lg:h-[852.68px]  flex-col flex justify-center">
          <div className="lg:w-[768px] lg:h-[160px] w-[335px] h-[167px] lg:ms-[256px] flex-col justify-center">
            <div className="w-[335px] h-[43px] lg:w-[768px] lg:h-[72px]  flex justify-center items-center">
              <h1 className='text-white text-4xl lg:text-6xl font-semibold'>What we do best </h1>
            </div>
            <div className="w-[335px] h-[104px]  lg:w-[768px] lg:h-[64px] mt-[24px]">
              <p className='text-white text-center text-sm lg:text-lg'>Three core disciplines shape everything we create. Each one built on years of <br /> experience and a commitment to excellence.</p>
            </div>
          </div>
          <div className="w-[335px] h-[1065px] lg:w-[1280px] lg:h-[443.68px]  lg:flex justify-center lg:mt-[80px] mt-[48px]">
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
  
    </>
  )
}

export default Home