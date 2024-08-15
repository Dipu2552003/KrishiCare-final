import React from "react";
import content from "../utils/content";

const About = () => {
  const { aboutus } = content;
  return (
    <section id="about" className="bg-gray-100 py-14">
      <div className="md:container px-5">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12"
          data-aos="fade-down"
        >
          About AgroVision
        </h2>
        <div className="space-y-10">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <img
              src="images/home.png"
              alt="Description of Image 1"
              className="w-full md:w-1/3 h-auto rounded-lg shadow-md"
              data-aos="fade-right"
            />
            <div className="text-gray-700 space-y-6">
              <h6
                className="text-lg font-semibold leading-relaxed"
                data-aos="fade-left"
              >
                KrishiCare is a transformative platform designed to help farmers
                make informed decisions and become more self-reliant. By
                integrating advanced technology and machine learning algorithms,
                KrishiCare provides a detailed view of farming based on soil
                analysis, weather patterns, local climate, seasonal changes, and
                crop prices. This comprehensive approach enables farmers to
                select the most suitable crops for their environment and make
                strategic decisions to maximize their earnings.
              </h6>
            </div>
          </div>
          {/* Section 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <img
              src="images/img1.jpg"
              alt="Description of Image 2"
              className="w-full md:w-1/3 h-auto rounded-lg shadow-md"
              data-aos="fade-left"
            />
            <div className="text-gray-700 space-y-6">
              <h6
                className="text-lg font-semibold leading-relaxed"
                data-aos="fade-right"
              >
                In addition to recommending the best crops to plant, KrishiCare
                offers forecasts for crop prices, helping farmers plan their
                planting and harvesting schedules effectively. The platform also
                includes tools for monitoring crop health and progress, allowing
                farmers to make necessary adjustments throughout the growing
                season. By equipping farmers with these insights, KrishiCare
                ensures they are well-informed and capable of managing their
                farming operations independently. KrishiCare goes beyond crop
                management by offering a complete solution that supports farmers
                from cultivation to sale. Farmers can sell their produce through
                the platform, while inspectors use advanced deep learning
                technology to assess crop quality and detect diseases through
                image analysis. Once the crops pass inspection, traders can
                purchase them directly. This streamlined process enables farmers
                to control their operations and income, ensuring a more
                efficient and profitable farming experience.
              </h6>
            </div>
          </div>
          {/* Section 3 */}

          {/* Section 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center md:items-start gap-8">
            <div className="text-gray-700 space-y-6">
              <h6
                className="text-lg font-semibold leading-relaxed"
                data-aos="fade-right"
              >
                With an easy-to-use interface, KrishiCare is designed for all
                users—farmers, inspectors, and traders. Farmers can manage their
                crops and sales, inspectors can perform quality checks, and
                traders can source high-quality produce. KrishiCare provides a
                comprehensive, user-friendly platform that supports every aspect
                of the farming process, making it a valuable resource for
                achieving greater independence and success in agriculture.
              </h6>
            </div>
            <img
              src="images/img3.png"
              alt="Description of Image 4"
              className="w-full md:w-1/3 h-auto rounded-lg shadow-md"
              data-aos="fade-left"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
