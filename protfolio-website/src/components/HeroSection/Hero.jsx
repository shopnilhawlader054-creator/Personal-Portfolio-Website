import React from 'react'
import RightCard from './RightCard'
import LeftCard from './LeftCard'

function Hero() {
  return (
//        <section className="bg-[#121212] text-white min-h-screen flex flex-col md:flex-row items-center justify-between px-8 py-12">
      
//       {/* বামপাশে আপনার টেক্সট সেকশন */}
//       <div className="max-w-xl">
     
//       </div>

//    {/* ডানপাশে Iframe দিয়ে থ্রিডি ক্যারেক্টার */}
// <div className="relative w-full md:w-[500px] h-[450px] flex items-center justify-center">

//  <RightCard/>
// </div>
   

//     </section>
<>


  <div id='home' className='relative w-full max-w-5xl flex flex-col md:flex-row justify-between gap-12 py-12 mt-20'>
    {/* left side card */}
    <LeftCard/>
    
    
  <RightCard/>

</div>

</>
  )
}

export default Hero