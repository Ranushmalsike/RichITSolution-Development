import React, { useEffect, useState } from "react";
import axios from "axios";

const Portfolio: React.FC = () => {
//   const [cloudHostingPrice, setCloudHostingPrice] = useState<string>("Fetching...");

  // Fetch Cloud Hosting Price from API
//   useEffect(() => {
//     axios
//       .get("https://api.example.com/cloud-hosting-price") // Replace with your real API URL
//       .then((response) => {
//         setCloudHostingPrice(response.data.price); // Assuming API returns { price: "$XX - $XXX" }
//       })
//       .catch((error) => {
//         console.error("Error fetching Cloud Hosting price:", error);
//         setCloudHostingPrice("Error loading price");
//       });
//   }, []);

  const portfolioSections = [
    {
      title: "Basic Hosting",
      items: [
        { name: "WHM", price: "$10 - $50/year", description: "Custom websites, e-commerce, and business solutions." },
        { name: "Cloud Hosting", price: "Contact our", description: "Secure AWS cloud hosting with scalability." },
      ],
    },
    {
      title: "Advanced Hosting",
      items: [
        { name: "WHM", price: "$45 - $100/year", description: "Reliable hosting services with 24/7 support." },
        { name: "Cloud Hosting", price: "Contact our", description: "High-performance cloud hosting for businesses." },
      ],
    },
    {
      title: "Enterprise Hosting",
      items: [
        { name: "WHM", price: "$50 - $200/year", description: "Expert guidance for your IT infrastructure and software needs." },
        { name: "Cloud Hosting", price: "Contact our", description: "Enterprise-level AWS cloud hosting solutions." },
      ],
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Price</h2>

      {/* Loop through portfolio sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {portfolioSections.map((section, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-lg bg-white">
            <h3 className="text-2xl font-semibold mb-4 text-center">{section.title}</h3>
            <div className="space-y-4">
              {section.items.map((item, i) => (
                <div key={i} className="p-4 border rounded-lg bg-gray-50">
                  <h4 className="text-lg font-bold">{item.name}</h4>
                  <p className="text-green-600 font-semibold">{item.price}</p>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
