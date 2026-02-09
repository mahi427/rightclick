import React from "react";
import { History, Target, Eye, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white">

      {/* ✅ SEO Canonical Tag */}
      <Helmet>
        <title>About Right Click Institute | Best Maths Coaching in Jalandhar</title>
        <meta
          name="description"
          content="Right Click Institute is the leading mathematics coaching center in Central Town, Jalandhar. Learn about our mission, vision, and expert faculty."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://rightclickinstitute.in/about"
        />
      </Helmet>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            About Right Click Institute
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Established with a vision to make mathematics accessible and enjoyable for every student.
          </p>
        </div>

        {/* Your Content */}
        ...
      </div>
    </section>
  );
};

export default About;
