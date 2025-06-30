
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Play, ExternalLink } from "lucide-react";

const DemoReels = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const demoReels = [
    {
      id: 1,
      title: "Game Development Reel 2024",
      description: "A comprehensive showcase of my latest game development projects, featuring 3D environments, character animations, and gameplay mechanics.",
      duration: "3:45",
      thumbnail: "🎬",
      category: "General",
      videoUrl: "#"
    },
    {
      id: 2,
      title: "Unity 3D Showcase",
      description: "Demonstration of advanced Unity techniques including shader programming, particle systems, and physics simulations.",
      duration: "2:30",
      thumbnail: "🎯",
      category: "Technical",
      videoUrl: "#"
    },
    {
      id: 3,
      title: "Character Animation Reel",
      description: "Collection of character animations created using Unity's Animator system and custom scripts for various game projects.",
      duration: "4:12",
      thumbnail: "🏃",
      category: "Animation",
      videoUrl: "#"
    },
    {
      id: 4,
      title: "Mobile Game Portfolio",
      description: "Showcase of mobile games optimized for touch controls and various screen sizes, featuring UI/UX design and gameplay flow.",
      duration: "3:20",
      thumbnail: "📱",
      category: "Mobile",
      videoUrl: "#"
    },
    {
      id: 5,
      title: "VR Experience Demo",
      description: "Virtual reality experiences showcasing immersive environments and intuitive VR interactions using Unity XR Toolkit.",
      duration: "5:00",
      thumbnail: "🥽",
      category: "VR/AR",
      videoUrl: "#"
    },
    {
      id: 6,
      title: "Game Jam Highlights",
      description: "Quick prototypes and complete games created during various game jams, showcasing rapid development and creative problem-solving.",
      duration: "6:15",
      thumbnail: "⚡",
      category: "Game Jam",
      videoUrl: "#"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Demo Reels
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch my games come to life through these curated video showcases
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {demoReels.map((reel, index) => (
            <motion.div
              key={reel.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                <div className="text-6xl mb-4">{reel.thumbnail}</div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  className="absolute inset-0 bg-black/50 flex items-center justify-center"
                >
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:border-white/50 transition-colors"
                  >
                    <Play size={24} className="ml-1" />
                  </motion.button>
                </motion.div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-sm px-2 py-1 rounded">
                  {reel.duration}
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-2 left-2 bg-purple-600/80 text-white text-xs px-2 py-1 rounded-full">
                  {reel.category}
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {reel.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {reel.description}
                </p>
                
                {/* Actions */}
                <div className="flex space-x-3">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 rounded-lg font-medium hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
                  >
                    <Play size={16} />
                    <span>Watch</span>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-center w-10 h-10 border border-purple-500 text-purple-400 rounded-lg hover:bg-purple-500/10 transition-colors"
                  >
                    <ExternalLink size={16} />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Reel Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 0.8 }}
          className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Demo Reel
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My comprehensive 2024 game development showcase featuring the best projects and techniques from this year.
            </p>
          </div>
          
          <div className="aspect-video bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="text-8xl">🎮</div>
            <motion.div
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30 hover:border-white/50 transition-colors"
              >
                <Play size={32} className="ml-1" />
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default DemoReels;
