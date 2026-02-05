import React from 'react';
import { Download, FileText, Book, Calculator, Brain, Clock } from 'lucide-react';
import { Helmet } from "react-helmet-async";

<Helmet>
  <link rel="canonical" href="https://rightclickinstitute.in/" />
</Helmet>

const Resources = () => {
  const tips = [
    {
      icon: Calculator,
      title: 'Master Mental Math',
      description: 'Practice Vedic mathematics techniques for faster calculations'
    },
    {
      icon: Brain,
      title: 'Conceptual Understanding',
      description: 'Focus on understanding concepts rather than rote learning'
    },
    {
      icon: Clock,
      title: 'Time Management',
      description: 'Allocate specific time slots for different mathematics topics'
    },
    {
      icon: FileText,
      title: 'Regular Practice',
      description: 'Solve at least 10 problems daily from different topics'
    }
  ];

  const studyMaterials = [
    { name: 'Algebra Basics Worksheet', grade: '6th-8th', format: 'PDF' },
    { name: 'Geometry Formulas Sheet', grade: '9th-10th', format: 'PDF' },
    { name: 'Calculus Practice Problems', grade: '11th-12th', format: 'PDF' },
    { name: 'Sample Papers Bundle', grade: 'All Grades', format: 'ZIP' },
  ];

  const blogPosts = [
    {
      title: 'How to Overcome Math Phobia',
      excerpt: 'Practical strategies to build confidence in mathematics...',
      date: 'Mar 15, 2024'
    },
    {
      title: 'Board Exam Preparation Tips',
      excerpt: 'Effective techniques for scoring high in mathematics board exams...',
      date: 'Mar 10, 2024'
    },
    {
      title: 'Importance of Daily Practice',
      excerpt: 'Why consistent practice is key to mastering mathematics...',
      date: 'Mar 5, 2024'
    }
  ];

  return (
    <section id="resources" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Learning Resources</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access free study materials, tips, and articles to enhance your mathematics learning
          </p>
        </div>

        {/* Tips and Tricks */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Brain className="w-6 h-6 mr-3 text-primary" />
            Mathematics Tips & Tricks
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow">
                <tip.icon className="w-10 h-10 text-primary mb-4" />
                <h4 className="text-lg font-semibold mb-2">{tip.title}</h4>
                <p className="text-gray-600">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Study Materials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Download className="w-6 h-6 mr-3 text-primary" />
            Download Study Materials
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {studyMaterials.map((material, index) => (
              <div key={index} className="border rounded-lg p-4 flex items-center justify-between hover:border-primary transition-colors">
                <div className="flex items-center">
                  <FileText className="w-8 h-8 text-gray-400 mr-4" />
                  <div>
                    <h4 className="font-semibold">{material.name}</h4>
                    <p className="text-sm text-gray-500">Grade: {material.grade}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">{material.format}</span>
                  <button className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-secondary transition-colors">
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Section */}
        <div>
          <h3 className="text-2xl font-bold mb-8 flex items-center">
            <Book className="w-6 h-6 mr-3 text-primary" />
            Mathematics Blog
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{post.date}</div>
                  <h4 className="text-xl font-semibold mb-3">{post.title}</h4>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <button className="text-primary font-medium hover:text-secondary">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;