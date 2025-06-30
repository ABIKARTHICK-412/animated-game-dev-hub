
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Github, ExternalLink, Play } from "lucide-react";

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const projects = [
    {
      id: 1,
      title: "Quantum Runner",
      genre: "3D Platformer",
      description: "A sci-fi platformer with quantum mechanics where players manipulate time and space to solve puzzles and navigate through dimensions.",
      technologies: ["Unity", "C#", "Blender", "Photoshop"],
      tags: ["Solo", "3D", "Mobile"],
      image: "🎮",
      status: "Released",
      links: {
        github: "#",
        demo: "#",
        play: "#"
      }
    },
    {
      id: 2,
      title: "Mystic Forest",
      genre: "2D Adventure",
      description: "An enchanting 2D adventure game featuring beautiful hand-drawn art, magical creatures, and an immersive storyline.",
      technologies: ["Unity", "C#", "Aseprite", "FMOD"],
      tags: ["Team", "2D", "PC"],
      image: "🧙",
      status: "In Development",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 3,
      title: "Neon Racer",
      genre: "Racing",
      description: "High-speed cyberpunk racing game with customizable vehicles and dynamic neon-lit tracks.",
      technologies: ["Unity", "C#", "Shader Graph", "ProBuilder"],
      tags: ["Game Jam", "3D", "Multiplayer"],
      image: "🏎️",
      status: "Released",
      links: {
        github: "#",
        demo: "#",
        play: "#"
      }
    },
    {
      id: 4,
      title: "Puzzle Nexus",
      genre: "Puzzle",
      description: "Mind-bending puzzle game that challenges players with interconnected mechanical puzzles across multiple dimensions.",
      technologies: ["Unity", "C#", "DOTween", "TextMeshPro"],
      tags: ["Solo", "Mobile", "VR"],
      image: "🧩",
      status: "Beta",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      id: 5,
      title: "Space Colony",
      genre: "Strategy",
      description: "Build and manage your own space colony in this resource management and strategy game with beautiful 3D graphics.",
      technologies: ["Unity", "C#", "Cinemachine", "Unity Analytics"],
      tags: ["Team", "3D", "PC"],
      image: "🚀",
      status: "Concept",
      links: {
        github: "#"
      }
    },
    {
      id: 6,
      title: "Dungeon Crawler",
      genre: "RPG",
      description: "Classic dungeon crawler with modern mechanics, featuring procedural generation and deep character customization.",
      technologies: ["Unity", "C#", "Addressables", "Unity Cloud Build"],
      tags: ["Solo", "2D", "Mobile"],
      image: "⚔️",
      status: "Released",
      links: {
        github: "#",
        demo: "#",
        play: "#"
      }
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

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Released": return "from-green-500 to-emerald-500";
      case "In Development": return "from-blue-500 to-cyan-500";
      case "Beta": return "from-yellow-500 to-orange-500";
      case "Concept": return "from-purple-500 to-pink-500";
      default: return "from-gray-500 to-slate-500";
    }
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
              My Projects
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of games and interactive experiences I've created
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
            >
              {/* Project Icon */}
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              
              {/* Status Badge */}
              <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(project.status)} text-white mb-4`}>
                {project.status}
              </div>
              
              {/* Project Info */}
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-purple-400 text-sm font-medium mb-3">{project.genre}</p>
              <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-2 py-1 bg-purple-600/20 text-purple-300 text-xs rounded-full border border-purple-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Technologies */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Links */}
              <div className="flex space-x-3">
                {project.links.github && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.links.github}
                    className="flex items-center justify-center w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                  </motion.a>
                )}
                {project.links.demo && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.links.demo}
                    className="flex items-center justify-center w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} />
                  </motion.a>
                )}
                {project.links.play && (
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.links.play}
                    className="flex items-center justify-center w-10 h-10 bg-green-600 hover:bg-green-500 rounded-lg transition-colors"
                  >
                    <Play size={18} />
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
