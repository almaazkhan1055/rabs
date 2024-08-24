import React from "react";
import { reviewData } from "./data/data";
import Arrow from "./arrow";

const Review = () => {
  return (
    <div className="bg-[#f6faff]">
      <div className="review-container ">
        <div className="review-background"></div>
        <div className="review-content text-center">
          <h4 className="text-3xl font-semibold mb-4">
            Praise for
            <span className="font-bold"> Precision</span> and
            <span className="font-bold"> Performance</span>
          </h4>
          <h5 className="mb-8 text-sm text-[#636567]">
            Here are some noteworthy recognitions and testimonials <br /> that
            underscore our commitment to excellence
          </h5>
          <div className="testimonial-grid">
            {reviewData.map((review, index) => (
              <div
                key={index}
                className={`testimonial-box ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <img src={review} alt={`testimonial ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Arrow />
    </div>
  );
};

export default Review;
