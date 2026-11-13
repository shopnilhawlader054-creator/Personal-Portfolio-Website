import React from 'react';
import { useState } from 'react';

function ContectForm() {
  return (
    <>
      {/* কন্টাক্ট ফর্ম কার্ড */}
      <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl">
        <form 
          action="https://api.web3forms.com/submit" 
          method="POST" 
          className="space-y-5"
        >
          {/* আপনার অ্যাক্সেস কী */}
          <input type="hidden" name="access_key" value="ce478a9b-4d08-4b0f-9a51-13d2aae76ee8" />
          
          {/* চাইলে .env থেকেও দিতে পারেন: */}
          {/* <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS_KEY} /> */}

          {/* Name & Email (পাশাপাশি দেখানোর জন্য Grid) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Shopnil Hawlader"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-all"
              />
            </div>
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="shopnil@example.com"
                className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-all"
              />
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
              required
              placeholder="Tell me about your project requirements or what you'd like to discuss..."
              className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-white/30 transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)] cursor-pointer flex items-center justify-center gap-2 group"
          >
            <span>Send Message</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>

        </form>
      </div>
    </>
  );
}

export default ContectForm;