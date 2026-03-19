import { useState } from 'react';
import { Play, Youtube, X } from 'lucide-react';

const VideoIntro = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Institute Tour",
      description: "Take a virtual tour of our campus and see our teaching methodology",
      videoSrc: "/videos/1.mp4",
    },
    {
      id: 2,
      title: "Student Success Stories",
      description: "Hear from our toppers about their journey",
      videoSrc: "/videos/2.mp4",
    }
  ];

  return (
    <section id="intro-video" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-red-600 to-red-700 px-6 py-3 rounded-full mb-4">
              <Youtube className="w-6 h-6 mr-2" />
              <span className="font-bold text-lg">INSTITUTE VIDEOS</span>
            </div>

            <h2 className="text-4xl font-bold mb-4">
              Experience <span className="text-red-400">Right Click Institute</span>
            </h2>

            <p className="text-gray-300 text-xl max-w-3xl mx-auto">
              Take a virtual tour of our campus and hear from our successful students
            </p>
          </div>

          {/* Two Video Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {videos.map((video) => (
              <div
                key={video.id}
                className="bg-black rounded-2xl overflow-hidden shadow-2xl cursor-pointer group"
                onClick={() => setActiveVideo(video)}
              >
                <div className="relative aspect-video">
                  {/* Video Thumbnail / Preview */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-red-900 flex items-center justify-center">
                    {video.thumbnail ? (
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="w-full h-full object-cover opacity-50"
                      />
                    ) : (
                      <div className="text-center">
                        <div className="w-16 h-16 bg-red-600/80 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-red-600 transition-all duration-300 group-hover:scale-110">
                          <Play className="w-8 h-8 ml-1" fill="white" />
                        </div>
                      </div>
                    )}
                    
                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 ml-1" fill="white" />
                      </div>
                    </div>
                  </div>

                  {/* Video Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <h3 className="text-xl font-bold">{video.title}</h3>
                    <p className="text-sm text-gray-300">{video.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Features Grid - Keeping this as it's good */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden">
            <div className="p-6">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-300 mb-1">
                    Modern
                  </div>
                  <div className="text-gray-300">Classrooms</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-green-300 mb-1">
                    Experienced
                  </div>
                  <div className="text-gray-300">Faculty</div>
                </div>

                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-300 mb-1">
                    Interactive
                  </div>
                  <div className="text-gray-300">Learning</div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">12</div>
              <div className="text-sm text-gray-300">100/100 Scores</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">30+</div>
              <div className="text-sm text-gray-300">Above 75%</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-blue-400">5000+</div>
              <div className="text-sm text-gray-300">Students Trained</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-red-400">2007</div>
              <div className="text-sm text-gray-300">Established</div>
            </div>
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {activeVideo && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-12 right-0 text-white hover:text-red-400 transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Video Player */}
            <div className="relative aspect-video">
              <video
                className="w-full h-full"
                controls
                autoPlay
                playsInline
              >
                <source src={activeVideo.videoSrc} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Video Info */}
            <div className="p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-1">{activeVideo.title}</h3>
              <p className="text-gray-400">{activeVideo.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoIntro;