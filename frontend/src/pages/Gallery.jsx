import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Users, BookOpen, Award } from 'lucide-react';

const Gallery = () => {
  const categories = [
    {
      title: 'Classroom Sessions',
      icon: Users,
      images: [
        'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]
    },
    {
      title: 'Teaching Moments',
      icon: BookOpen,
      images: [
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]
    },
    {
      title: 'Achievements',
      icon: Award,
      images: [
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      ]
    }
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">Our</span>{' '}
            <span className="text-red-600">Gallery</span>
          </h1>
          <p className="text-xl text-gray-600">Glimpses of our learning environment</p>
        </motion.div>

        {categories.map((category, idx) => (
          <div key={idx} className="mb-16">
            <div className="flex items-center mb-8">
              <category.icon className="w-8 h-8 text-blue-600 mr-3" />
              <h2 className="text-2xl font-bold">{category.title}</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {category.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="overflow-hidden rounded-xl shadow-lg cursor-pointer"
                >
                  <img 
                    src={image} 
                    alt={`${category.title} ${index + 1}`}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;