import React from "react";
import VisionCard from "./visionCard";
import Arrow from "./arrow";
import vision from "./assets/vision.svg";
import strategic from "./assets/strategic.svg";
import creative from "./assets/creative.svg";
import launch from "./assets/launch.svg";

const OurVision = () => {
  return (
    <div className="bg-purple-900 text-white py-16 mt-10">
      <h2 className="text-4xl font-semibold text-center">
        Our Client-Centric Approach to <br />
        <span className="text-[#FFD060]">WEB DEVELOPEMENT </span>
        Success
      </h2>
      <VisionCard
        img={vision}
        heading={"1. Understanding Your Vision"}
        span1={
          "We begin by engaging with you to comprehend your vision and goals for the website. Through detailed discussions, we gather insights into your business, target audience, and specific requirements. This initial step lays the foundation for a project that aligns seamlessly with your objectives."
        }
        span2={
          "This collaborative exploration ensures that the end result is a finely tuned digital embodiment of your unique vision, providing an immersive and resonant experience for your audience."
        }
        span3={
          "It's like building a lively online home that shouts 'you' in every click!"
        }
      />
      <VisionCard
        img={strategic}
        heading={"2. Strategic Planning"}
        span1={
          "Now that we've nailed down your goals, it's strategy party time! Our expert team huddles up to sketch out a detailed plan. We define the project's scope, mark key milestones, and set timelines in stone. This thoughtful strategy not only ensures a structured development process but also lays the groundwork for a victorious outcome. It's like creating a treasure map to success for your project!"
        }
        span2={
          "This dynamic approach ensures your website isn't just up to snuff but is a trendsetter, delivering an experience that sings to your audience."
        }
        span3={
          "From concept to completion, our focus remains on turning your vision into a vibrant, engaging reality."
        }
      />
      <VisionCard
        img={creative}
        width="100%"
        heading={"3. Creative Design and User Experience"}
        span1={
          "Our design phase focuses on creating visually appealing and user-friendly interfaces. We prioritize an intuitive user experience, incorporating modern design trends while ensuring compatibility across various devices. This step ensures that your website not only looks impressive but also engages visitors effectively."
        }
        span2={
          "We enhance user engagement with strategic interactive elements—animations, transitions, and micro-interactions. These not only boost visual appeal but also provide meaningful feedback, creating a dynamic and enjoyable website interaction."
        }
        span3={"We Unleash Vibrancy Through Dynamic Interactions!"}
      />
      <VisionCard
        img={strategic}
        heading={"4. Development with Precision"}
        span1={
          "Armed with a solid plan and captivating design, our development team dives into the coding process. We leverage the latest technologies and best practices to bring your website to life. Regular testing and quality assurance checks are integral to our development process, guaranteeing a robust and error-free final product."
        }
        span2={
          "We place a strong emphasis on security, implementing robust measures to safeguard your website and user data."
        }
        span3={
          "We deliver a flawless product, setting the stage for easy future upgrades and maintenance."
        }
      />
      <VisionCard
        img={launch}
        width="100%"
        heading={"5. Launch and Continuous Improvement"}
        span1={
          "The launch of your website is not the end of our commitment. We monitor its performance closely and gather user feedback to make necessary improvements. Our aim is to ensure that your website remains up-to-date, secure, and aligned with evolving industry standards."
        }
        span2={
          "We keep your website dynamic by updating information, adding features, and aligning content with industry trends to captivate your audience."
        }
        span3={
          "Unleashing Digital Dynamism: Fresh, Relevant, Forever Captivating!"
        }
      />
      <Arrow />
    </div>
  );
};

export default OurVision;
