
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skillCategories = [
    {
      title: "Programming",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "C#", level: 90, icon: "💻" },
        { name: "JavaScript", level: 85, icon: "🌐" },
        { name: "Python", level: 75, icon: "🐍" },
        { name: "C++", level: 70, icon: "⚡" }
      ]
    },
    {
      title: "Game Engines",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Unity", level: 95, icon: "🎯" },
        { name: "Unreal Engine", level: 70, icon: "🎮" },
        { name: "Godot", level: 65, icon: "🚀" },
        { name: "GameMaker", level: 60, icon: "🎨" }
      ]
    },
    {
      title: "Tools & Software",
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "Blender", level: 80, icon: "🎭" },
        { name: "Photoshop", level: 85, icon: "🖼️" },
        { name: "Git", level: 90, icon: "📝" },
        { name: "Visual Studio", level: 95, icon: "💼" }
      ]
    },
    {
      title: "Art & Design",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "3D Modeling", level: 75, icon: "🎲" },
        { name: "UI/UX Design", level: 80, icon: "🎨" },
        { name: "Animation", level: 70, icon: "🎬" },
        { name: "Texturing", level: 75, icon: "🖌️" }
      ]
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
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A comprehensive toolkit for creating amazing gaming experiences
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-purple-500/20 hover:border-purple-500/40 transition-colors"
            >
              <h2 className={`text-2xl font-bold mb-6 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                {category.title}
              </h2>
              
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                    className="relative"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="text-white font-medium">{skill.name}</span>
                      </div>
                      <span className="text-purple-400 font-medium">{skill.level}%</span>
                    </div>
                    
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ 
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.3, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ delay: 1 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-8 text-white">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Game Design", "Level Design", "Multiplayer Networking", "Performance Optimization",
              "Mobile Development", "VR/AR", "Shader Programming", "Audio Integration",
              "Analytics", "Monetization", "Publishing", "Project Management"
            ].map((skill, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full text-purple-300 border border-purple-500/30 hover:border-purple-500/50 transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
