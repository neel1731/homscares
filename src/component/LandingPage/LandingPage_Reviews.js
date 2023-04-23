import React from "react";
import "./LandingPage.css";

const LandingPage_Reviews = () => {
  return (
    <div className="reviewsContainer">
      <h1>Real People, Real Tasks</h1>
      <div className="inner-review-container">
        <div className="reviews">
          <img src="Images/pratik.jpg" alt="" style={{ height: 150 }} />
          <div className="review-text">
            <p>
              Thank you so much Homa Cares for taking care of our children! We
              really appreciate your attention and care, and we feel lucky to
              have found such a reliable and trustworthy babysitter. We hope to
              have you babysit for us again in the future!
            </p>
            <h6>Pratik Mishra</h6>
            <p>Baroda, Gujarat</p>
          </div>
        </div>

        <div className="reviews">
          <img src="Images/jaydeep.jpg" alt="" style={{ height: 150 }} />
          <div className="review-text">
            <p>
              I recently hired a cook to prepare my daily meals as a bachelor, I
              living in a rented house, and it has been a game-changer for me.
              The convenience of having delicious and healthy meals prepared for
              me has saved me time and money compared to eating out or buying
              pre-made meals.
            </p>
            <h6>Jaydeep Vithlani</h6>
            <p>Ahmedabad, Gujarat</p>
          </div>
        </div>

        <div className="reviews">
          <img src="Images/shivam.jpeg" alt="" style={{ height: 150 }} />
          <div className="review-text">
            <p>
              I recently hired a caretaker service for my elderly parent and I
              am very pleased with the level of care they provide. The caretaker
              is kind, patient, and has a great rapport with my parent. They go
              above and beyond to ensure my parent is comfortable and their
              needs are met. I feel relieved knowing my parent is in good hands
              and would highly recommend this caretaker service to anyone in
              need of reliable and compassionate care
            </p>
            <h6>Shivam Patel</h6>
            <p>Surat, Gujarat</p>
          </div>
        </div>

        <div className="reviews">
          <img src="Images/nirav.jpeg" alt="" style={{ height: 150 }} />
          <div className="review-text">
            <p>
              I recently hired the Festival Special Cleaning service for my home
              and I am thrilled with the results. The team did an amazing job
              with multiple cleanings, ensuring that every nook and cranny was
              thoroughly cleaned. From the dusting of surfaces to the cleaning
              of bathrooms and kitchens, every room was left sparkling clean.I
              highly recommend this service to anyone looking for a thorough and
              efficient deep clean before the festive season.
            </p>
            <h6>Nirav Vyas</h6>
            <p>Ghandhinagar, Gujarat</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage_Reviews;
