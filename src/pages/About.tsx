
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const timelineItems = [
    {
      year: "2020",
      title: "Started Game Development Journey",
      description: "Discovered Unity and fell in love with creating interactive experiences"
    },
    {
      year: "2021",
      title: "First Game Published",
      description: "Released my first mobile game on Google Play Store"
    },
    {
      year: "2022",
      title: "Unity Certified Developer",
      description: "Earned Unity Certified User certification in Programming"
    },
    {
      year: "2023",
      title: "Game Jam Winner",
      description: "Won first place in local game jam with innovative puzzle mechanics"
    },
    {
      year: "2024",
      title: "Full-Stack Game Developer",
      description: "Expanded skills to include backend development and multiplayer systems"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate game developer with a love for creating immersive experiences 
            and pushing the boundaries of interactive entertainment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20">
              <h2 className="text-2xl font-bold text-purple-400 mb-4">My Story</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                My journey into game development started with a simple curiosity about 
                how my favorite games were made. What began as a hobby quickly transformed 
                into a passionate career path.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in Unity development, C# programming, and creating engaging 
                gameplay mechanics. I love the challenge of turning creative concepts 
                into playable experiences that bring joy to players.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
            >
              <span>Download Resume</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-80 h-80 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full flex items-center justify-center border border-purple-500/30">
              <div className="w-64 h-64 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
                <div className="text-6xl">🎮</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            My Journey
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 transform md:-translate-x-1/2" />
            
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ delay: 1 + index * 0.2 }}
                className={`relative flex items-center mb-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transform md:-translate-x-1/2 z-10" />
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                    <div className="text-purple-400 font-bold text-lg mb-2">{item.year}</div>
                    <h3 className="text-white font-semibold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
