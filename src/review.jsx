import React, { useState, useEffect } from "react";
import Arrow from "./arrow";

const Review = () => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await fetch(
          "https://almaazkhan1055.github.io/rabsdata/rabs_data.json"
        );
        const data = await response.json();
        setReviewData(data.reviewData || []);
      } catch (error) {
        console.error("Error fetching review data:", error);
      }
    };

    fetchReviewData();
  }, []);

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
            {reviewData.length > 0 ? (
              reviewData.map((review, index) => (
                <div
                  key={index}
                  className={`testimonial-box ${
                    index % 2 === 0 ? "left" : "right"
                  }`}
                >
                  <img src={review} alt={`testimonial ${index + 1}`} />
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      </div>
      <Arrow />
    </div>
  );
};

export default Review;
