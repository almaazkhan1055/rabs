import React from "react";
import whatsapp from "./assets/whatsapp.png";
import call from "./assets/call.png";

const Contact = () => {
  return (
    <>
      <div className="sticky-container">
        <div className="cta sticky-element">
          <a
            href="https://wa.me/+919833636916?text=I'm%20interested%20Lets%20Connect."
            target="_blank"
            rel="noopener noreferrer"
            className="blink"
          >
            <img src={whatsapp} alt="WhatsApp" className="contact" />
          </a>
          <a href="tel:+919833636916" className="blink">
            <img src={call} alt="Call" className="contact mt-4 " />
          </a>
        </div>
      </div>
      <button className="text-xl md:text-xl lg:text-2xl font-bold mb-4 p-2 px-6 bg-gradient-to-r from-[rgb(2,50,134)] via-[rgb(18,99,177)] text-center to-[rgb(0,147,221)] fixed bottom-0 right-5 z-10">
        i&apos;m interested
      </button>
    </>
  );
};

export default Contact;
