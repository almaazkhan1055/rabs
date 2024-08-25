import React, { useEffect } from "react";
import VisionCard from "./visionCard";
import Arrow from "./arrow";
import vision from "./assets/vision.svg";
import strategic from "./assets/strategic.svg";
import creative from "./assets/creative.svg";
import paperplane from "./assets/paperplane.svg";
import launch from "./assets/launch.svg";
import gsap from "gsap";
import { ScrollTrigger, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);
const OurVision = () => {
  const understand_vision = document.querySelector("#understand_vision");
  const launch_improvement = document.querySelector("#strategic_planning");
  const developement = document.querySelector("#creative");
  const creative_url = document.querySelector("#strategic");
  const strategic_planning = document.querySelector("#launch");

  useEffect(() => {
    setTimeout(() => {
      ScrollTrigger.refresh();
      gsap.to(".paperplane", {
        scrollTrigger: {
          trigger: ".plane",
          start: "top top",
          end: "bottom bottom",
          scrub: 0,
        },
        motionPath: {
          path: "#path",
          align: "#path",
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
        },
        transformOrigin: "50% 50%",
        duration: 10,
      });
      const colorTriggers = [
        { element: understand_vision, color: "#1c113f" },
        { element: launch_improvement, color: "#1F6E8C" },
        { element: developement, color: "#5C469C" },
        { element: creative_url, color: "#19376D" },
        { element: strategic_planning, color: "#301E67" },
      ];

      colorTriggers.forEach(({ element, color }) => {
        gsap.to(".ourapproach", {
          backgroundColor: color,
          scrollTrigger: {
            trigger: element,
            start: "top center",
            end: "center center",
            scrub: true,
          },
        });
      });
    }, 3000);
  }, []);
  return (
    <section className="ourapproach" id="ourapproach">
      <div className=" text-white py-16 mt-10 plane">
        <div
          style={{ width: "100%", position: "absolute" }}
          className="d-sm-none d-md-block d-lg-block"
        >
          <svg
            className="svg sm:w-[85%] w-[42.5%] h-[50%] sm:h-[100%]"
            style={{
              opacity: 1,
              position: "relative",
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "optimizeQuality",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            xmlSpace="preserve"
            version="1.1"
            viewBox="0 0 26667 60000"
          >
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer" />
              <path
                className="d-sm-none d-md-block d-lg-block fil0 str0"
                id="path"
                d="M24719 1930c0,0 -23062,641 -22368,8699 584,6798 21907,1087 22076,7091 365,13011 -21345,2046 -22392,8721 -1702,10863 21953,3705 21514,10966 -524,8676 -20398,4588 -20687,9187 -731,11623 7456,11842 20541,11330"
              />
            </g>
          </svg>
        </div>
        <img
          src={paperplane}
          className="paperplane absolute md:w-[100px] w-[50px] "
        />
        <h2 className="sm:text-5xl text-4xl font-semibold text-center">
          Our Client-Centric Approach to <br />
          <span className="text-[#FFD060]">WEB DEVELOPEMENT </span>
          Success
        </h2>
        <VisionCard
          img={vision}
          heading={"1. Understanding Your Vision"}
          id={"understand_vision"}
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
          id={"strategic_planning"}
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
          id={"creative"}
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
          id={"strategic"}
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
          id={"launch"}
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
    </section>
  );
};

export default OurVision;
