import React from 'react';
import { History, Target, Eye, MapPin } from 'lucide-react';
import { Helmet } from "react-helmet-async";

<Helmet>
  <link rel="canonical" href="https://rightclickinstitute.in/" />
</Helmet>

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Rajesh Sharma',
      role: 'Head Mathematics Coach',
      experience: '15+ years experience',
      qualification: 'Ph.D. in Mathematics',
    },
    {
      name: 'Priya Verma',
      role: 'Senior Coach (9th-12th)',
      experience: '12 years experience',
      qualification: 'M.Sc. Mathematics',
    },
    {
      name: 'Amit Singh',
      role: 'Coach (6th-8th)',
      experience: '8 years experience',
      qualification: 'B.Ed. + M.Sc. Mathematics',
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Right Click Institute</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Established with a vision to make mathematics accessible and enjoyable for every student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Institute Info */}
          <div>
            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <History className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Journey</h3>
                <p className="text-gray-600">
                  Founded in 2010, Right Click Institute has been transforming the way students 
                  perceive and learn mathematics in Jalandhar. From humble beginnings to becoming 
                  Central Town's trusted mathematics coaching center.
                </p>
              </div>
            </div>

            <div className="flex items-start mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Location & Hours</h3>
                <p className="text-gray-600">
                  <strong>Address:</strong> 151/4, near Matarani Chowk, Central Town, Jalandhar, Punjab 144001<br/>
                  <strong>Hours:</strong> Monday-Saturday: 9:00 AM - 8:30 PM<br/>
                  <strong>Areas served:</strong> Central Town and surrounding areas
                </p>
              </div>
            </div>
          </div>

          {/* Mission & Vision */}
          <div>
            <div className="flex items-start mb-6">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
                <p className="text-gray-600">
                  To build strong mathematical foundations and problem-solving skills that empower 
                  students to excel academically and develop logical thinking for life.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-purple-100 p-3 rounded-lg mr-4">
                <Eye className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
                <p className="text-gray-600">
                  To be the premier mathematics coaching institute in Punjab, recognized for 
                  nurturing mathematical talent and producing top-performing students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;