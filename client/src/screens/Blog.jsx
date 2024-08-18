import React from "react";

const Blog = () => {
  return (
    <div>
      <section
        id="home"
        className="overflow-hidden max-w-full py-10 bg-gray-100"
      >
        <div className="relative flex flex-col md:flex-row items-center justify-between max-w-screen-2xl container mx-auto px-4">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src="https://via.placeholder.com/400" // replace this with the actual image URL
              alt="Project brief"
              className="rounded-lg shadow-lg w-full"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h2 className="text-2xl font-semibold mb-4">Project brief</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We are a company that researches new ways to make lists by
              combining machine learning with a lovable mascot. Our main product
              is an app that you can use at home and implements years of
              scientific discovery. Our target audience is parents. We want to
              convey a sense of excitement, while at the same time being
              approachable.
            </p>
            <button className="bg-gray-800 text-white px-6 py-2 rounded-lg shadow hover:bg-gray-700">
              Share project
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
