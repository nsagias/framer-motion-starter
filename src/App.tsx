import { useState } from 'react';
import './App.css';
import { motion } from "framer-motion";

function App() {
  const [rotateDiv, setRotateDiv] = useState<boolean>(false);
  const [moveDiv, setMoveDiv] = useState<boolean>(false);
  return (
    <div className="framer-container">
      {/* Position Square Div On Load */}
      <motion.div 
        animate={{ y: -100, scale: 1 }} 
        initial={{ scale: 0}}
      ></motion.div>

      {/* Move Div Horizontally On Click*/}
      <motion.div 
        animate={{ y: -50, scale: 1, x: moveDiv ? 200 : -200 }} 
        initial={{ scale: 0}}
        onClick={() => setMoveDiv(!moveDiv)}
      ></motion.div>

      {/*  Rotate Div On Click */}
      <motion.div 
        animate={{ y: 100, scale: 1, rotate: rotateDiv ? 45 : 0 }} 
        initial={{ scale: 0, rotate: 45 }}
        onClick={() => setRotateDiv(!rotateDiv)}
      ></motion.div>
    </div>
  );
}

export default App;
