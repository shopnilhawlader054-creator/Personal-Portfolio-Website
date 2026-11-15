import React, { useState } from 'react';

function ContactForm() {
  
  const[errors, setErrors]= useState({})
  const[isSubmitting, setIsSubmitting]=useState(false)
  const[successMessage, setSuccessMessage]=useState('')

  const handleSubmit =async function(e){
     e.preventDefault()
     const formData = new FormData(e.target)
     const newerors = {}
     if(!formData.get('name')?.trim()){
      newerors.name = 'Please fill out this name field.'
     }
     if(!formData.get('email')?.trim()){
      newerors.email = 'Please fill out this email field.'
     }
     if(!formData.get('subject')?.trim()){
       const subject = formData.get('subject')?.trim() || "New Message from Portfolio";
       formData.set('subject',subject)
     }
     if (!formData.get('message')?.trim()){
      newerors.message = 'Please fill out this message field.'
     }
     if(Object.keys(newerors).length >0){
      setErrors(newerors)
      return
     }
     setErrors({})
     setIsSubmitting(true)
     setSuccessMessage('')
     try{
      const response = await fetch("https://api.web3forms.com/submit",{
        method:"POST",
        body: formData
      })
      const data = await response.json()
      if(data.success){
        setSuccessMessage('Message sent successfully!')
        e.target.reset();
      }
      else{
        setSuccessMessage(data.message || "Something went wrong.")
      }
     }
     catch(error){
      setSuccessMessage("Network error! Please try again.")

     }
     finally{
      setIsSubmitting(false)
     }

  }

  return (
 
    <>
      {/* কন্টাক্ট ফর্ম কার্ড */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
        <form 
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5"
        >
          {/* আপনার অ্যাক্সেস কী */}
          <input type="hidden" name="access_key" value="ce478a9b-4d08-4b0f-9a51-13d2aae76ee8" />
          
          {/* Name & Email (পাশাপাশি দেখানোর জন্য Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Shopnil Hawlader"
                className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                  errors.name ? 'border-red-500/50' : 'border-white/10 focus:border-white/30'
                }`}
              />
              {errors.name && (
                <p className="text-red-400 text-[11px] font-mono mt-1.5">{errors.name}</p>
              )}
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="shopnil@example.com"
                className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all ${
                  errors.email ? 'border-red-500/50' : 'border-white/10 focus:border-white/30'
                }`}
              />
              {errors.email && (
                <p className="text-red-400 text-[11px] font-mono mt-1.5">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              placeholder="Project Inquiry / Remote Role"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell me about your project requirements or what you'd like to discuss..."
              className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white placeholder-neutral-500 text-sm focus:outline-none transition-all resize-none ${
                errors.message ? 'border-red-500/50' : 'border-white/10 focus:border-white/30'
              }`}
            ></textarea>
            {errors.message && (
              <p className="text-red-400 text-[11px] font-mono mt-1.5">{errors.message}</p>
            )}
          </div>

          {/* Success or Global Message */}
         {successMessage && (
       <div className={`p-3 pr-8 rounded-xl text-xs font-mono relative ${
         successMessage.includes("success") 
        ? 'bg-green-500/10 border border-green-500/30 text-green-400' 
         : 'bg-red-500/10 border border-red-500/30 text-red-400'
            }`}>
       {successMessage}

        {/* ডানে ক্রস বাটন */}
         <button 
      onClick={() => setSuccessMessage("")}
      className="absolute top-2.5 right-3 text-sm opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
        >
        ✕
      </button>
      </div>
)}

          {/* Submit Button */}
          <button
            type="submit"
            disabled = {isSubmitting}
            className="w-full py-3.5 px-6 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer flex items-center justify-center gap-2 group disabled:opacity-50"
          >
            <span>{isSubmitting ? 'Sending...'  :  'Send Message'}</span>
            {!isSubmitting && <span className="group-hover:translate-x-1 transition-transform">→</span>}
          </button>

        </form>
      </div>
    </>
  );
}

export default ContactForm;