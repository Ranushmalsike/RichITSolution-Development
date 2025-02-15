import React from "react";

const WebDevelopment: React.FC = () => {
  return (
    <div className="border rounded-lg p-6 shadow-lg bg-white">
      <h3 className="text-2xl font-semibold mb-4 text-center">Web Development</h3>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg bg-gray-50">
          <h4 className="text-lg font-bold">Custom Web Solutions</h4>
          <p className="text-gray-600">
            Your vision, our expertise. Whether you need a stunning portfolio, an advanced web app, or a seamless online store, we’ve got you covered!
          </p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <h4 className="text-lg font-bold">Why Choose Us?</h4>
          <p className="text-gray-600">
            Our expert team has delivered countless successful projects. We focus on user experience, security, and top-tier performance.
          </p>
        </div>
        <div className="p-4 border rounded-lg bg-gray-50">
          <h4 className="text-lg font-bold">Client-Centric Focus</h4>
          <p className="text-gray-600">
            Your success is our priority. We collaborate closely to ensure our solutions align with your goals, vision, and brand identity.
          </p>
        </div>
      </div>

      <div className="text-center mt-6">
        <h3 className="text-xl font-bold">Need a Website? Contact Us!</h3>
        <p className="text-lg mt-2">
          Let’s build something amazing together. Reach out to us for a <strong>free consultation</strong>!
        </p>
        <a
          href="/contactus"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default WebDevelopment;
