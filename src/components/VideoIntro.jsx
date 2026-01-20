import React from 'react';
import { Play, Youtube } from 'lucide-react';

const VideoIntro = () => {
  return (
    <section id="intro-video" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full mb-4">
              <Youtube className="w-6 h-6 mr-2" />
              <span className="font-bold text-lg">INSTITUTE TOUR</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Experience <span className="text-red-400">Right Click Institute</span>
            </h2>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Take a virtual tour of our campus, meet our faculty, and see our teaching methodology
            </p>
          </div>

          {/* Video Container */}
          <div className="bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="relative aspect-video">
              {/* Video Placeholder - Replace with actual YouTube embed */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-red-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-red-700 transition-colors cursor-pointer transform hover:scale-110 duration-300">
                    <Play className="w-10 h-10 ml-1" fill="white" />
                  </div>
                  <p className="text-2xl font-bold mb-2">Institute Introduction Video</p>
                  <p className="text-gray-300">Click to watch on YouTube</p>
                </div>
              </div>
              
              {/* YouTube Embed - Uncomment and add your video ID */}
              {/*
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                title="Right Click Institute Introduction"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              */}
            </div>
            
            <div className="p-6 bg-gray-800">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-1">Modern</div>
                  <div className="text-gray-300">Classrooms</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">Experienced</div>
                  <div className="text-gray-300">Faculty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">Interactive</div>
                  <div className="text-gray-300">Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Channel Link */}
          <div className="text-center mt-8">
            <a 
              href="https://youtube.com/@rightclickinstitute" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-red-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-red-700 transition-colors"
            >
              <Youtube className="w-5 h-5 mr-2" />
             <a href='https://youtube.com/@vishavsir?si=MquO3Z8zc9gba7Cv'> Subscribe to Our YouTube Channel</a>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoIntro;