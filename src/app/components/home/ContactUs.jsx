import React from "react";

const ContactUs = () => {
    
  return (
    <div className="bg-[#0D042E] min-h-[1000px] flex items-center justify-center py-[20px] md:py-[50px]" id="contact">
      <div className="px-[20px] lg:px-[65px] max-w-[1440px] mx-auto">
        <div className="flex flex-col justify-center items-center gap-[20px] mb-6">
            <h2 className="text-white text-3xl md:text-[52px] text-center ">Contact Us</h2>
            <span className="h-1 bg-[#E37100] w-[52px] rounded-ful"></span>
        </div>
        <p className="text-[#F5F5F5] text-base md:text-2xl text-center mb-12">We'd love to answer your questions!</p>

        <form
          action="https://formsubmit.co/info@zeocoins.com"
        //   action="https://formsubmit.co/mrzeeshan185@gmail.com"

          method="POST"
          className=" sm:p-8 rounded-lg shadow-lg"
        >
          <div className="flex gap-[32px] md:gap-4 mb-[32px] flex-col md:flex-row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              className="w-full px-4 py-2 rounded-md bg-white text-[#191C1D]/38"
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              className="w-full px-4 py-2 rounded-md bg-white text-[#191C1D]/38"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full md:w-[calc(50%-8px)] px-4 py-2 rounded-md bg-white text-[#191C1D]/38 mb-[32px]"
          />
          <input
            type="text"
            name="subject"
            placeholder="Enter subject"
            required
            className="w-full px-4 py-2 rounded-md bg-white text-[#191C1D]/38 mb-[32px]"
          />
          <textarea
            name="description"
            placeholder="Enter description"
            required
            className="w-full px-4 py-2 rounded-md bg-white text-[#191C1D]/38 mb-[32px]"
            rows="4"
          ></textarea>

          {/* Google reCAPTCHA Integration */}
          <div className="g-recaptcha mb-6" data-sitekey="6LdgX8YrAAAAAL3fyWk5t50G5_AUpnLhvJcUQH5v" ></div>

          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou.html" />
          <button type="submit" className="w-full md:w-[166px] h-[40px] bg-[#F8FAFA] text-[#191C1D]/38  mt-6 rounded-md">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
