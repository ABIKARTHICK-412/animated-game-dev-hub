
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from "@react-three/drei";
import { Link } from "react-router-dom";
import { ArrowRight, Download, Github } from "lucide-react";

const AnimatedSphere = () => {
  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <Sphere visible args={[1, 100, 200]} scale={2}>
        <MeshDistortMaterial
          color="#8B5CF6"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
};

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Gradient Blurs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text Content */}
        <motion.div variants={itemVariants} className="text-center lg:text-left">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">Hi, I'm </span>
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Abikarthick
            </span>
          </motion.h1>
          
          <motion.div
            variants={itemVariants}
            className="text-2xl md:text-4xl font-semibold mb-8 text-gray-300"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 2 }}
              className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            >
              Game Developer
            </motion.span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-400 mb-8 max-w-2xl"
          >
            Passionate about creating immersive gaming experiences with cutting-edge technology. 
            Specializing in Unity, C#, and interactive 3D environments.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-shadow"
              >
                <span>View Portfolio</span>
                <ArrowRight size={20} />
              </motion.button>
            </Link>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 border border-purple-500 text-purple-400 px-8 py-3 rounded-lg font-semibold hover:bg-purple-500/10 transition-colors"
            >
              <Download size={20} />
              <span>Resume</span>
            </motion.button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-start space-x-6 mt-8"
          >
            <motion.a
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              className="text-gray-400 hover:text-purple-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Right Side - 3D Element */}
        <motion.div
          variants={itemVariants}
          className="h-96 lg:h-[500px] relative"
        >
          <Canvas camera={{ position: [0, 0, 5] }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={1} />
            <AnimatedSphere />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-purple-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-purple-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
