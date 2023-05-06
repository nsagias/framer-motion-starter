import { useState } from 'react';
import "./AnimatedDiv.css";
import { motion } from "framer-motion";


export default function AnimatedDiv() {
  const [rotateDiv, setRotateDiv] = useState<boolean>(false);
  const [moveDiv, setMoveDiv] = useState<boolean>(false);
  return (
    <div className="framer-container">
      {/* Position Square Div On Load */}
      <motion.div 
        animate={{ y: -100, scale: 1 }} 
        initial={{ scale: 0}}
      ></motion.div>

      {/* Move Div Horizontally On Clic */}
      <motion.div 
        animate={{ x: moveDiv ? 200 : -200 }} 
     
        transition={{ type: "tween", duration: 1}}
        onClick={() => setMoveDiv(!moveDiv)}
      ></motion.div>

      <motion.div style={{marginTop: 10}}
        animate={{ x: moveDiv ? 200 : -200 }} 
        transition={{ type: "spring", bounce: 0.7}}
        onClick={() => setMoveDiv(!moveDiv)}
      ></motion.div>

      {/*  Rotate Div On Click */}
      <motion.div 
        animate={{ y: 100, scale: 1, rotate: rotateDiv ? 45 : 0 }} 
        initial={{ scale: 0, rotate: 45 }}
        onClick={() => setRotateDiv(!rotateDiv)}
      ></motion.div>

     {/* Overlapping Effect */}
      <motion.div style={{marginTop: 10}}
        animate={{ x: moveDiv ? 200 : -200 }} 
        transition={{ type: "spring", bounce: 0.7}}
        onClick={() => setMoveDiv(!moveDiv)}
      ></motion.div>

      {/* Animation sequence */}
      <motion.div style={{marginTop: 10}}
        animate={{ rotate: [0, 200, 200, 0]}}
        transition={{ duration: 1, repeat: 2}}
      ></motion.div>

      {/* While Hover */}
      <motion.div style={{marginTop: 10}}
       whileHover={{ scale: 1.2}}
      ></motion.div>

      {/* Press and hold adjust scale */}
      <motion.div style={{marginTop: 10}}
       whileTap={{ scale: 0.8}}
      ></motion.div>
    </div>
  );
}