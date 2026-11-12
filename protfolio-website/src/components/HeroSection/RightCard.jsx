import React from 'react'

function RightCard() {
  return (
    <> 
     {/* RIGHT SIDE: 3D Character Container */}
          <div className='relative w-full md:w-[450px] h-[400px] flex items-center justify-center shrink-0'>
            
            {/* Background Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180px] h-[180px] rounded-full bg-white/15 blur-3xl pointer-events-none"></div>

            {/* 3D Character Iframe */}
            <iframe 
              src="https://my.spline.design/genkubgreetingrobot-jty89GRv1k8VDvTei7cbD1og/" 
              frameBorder="0" 
              width="100%"
              height="100%"
              title="3D Character"
              className="relative z-10 pointer-events-auto"
            ></iframe>

          </div>
      
       

       

    </>
  )
}

export default RightCard