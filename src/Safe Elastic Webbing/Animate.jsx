import { useState } from "react";
import { motion } from "framer-motion";

const SofaHoverEffect = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      className="relative cursor-pointer w-full mx-auto" 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background Image (Default Sofa) */}
      <motion.img 
        src="/Sofa wall.png" 
        alt="Sofa" 
        className="absolute object-cover" 
        initial={{ opacity: 1 }}
        animate={{ opacity: hovered ? 0 : 1 }}
        transition={{ duration: 0.8 }}
      />
      {/* Hover Image (Sofa Set) */}
      <motion.img 
        src="/Sofaset.png" 
        alt="Sofa Hover" 
        className="absolute object-cover" 
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      />
    </div>
  );
};

export default SofaHoverEffect;
