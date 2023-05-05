import { useState } from 'react';
import './App.css';
import { motion } from "framer-motion";

function App() {
  const [rotateDiv, setRotateDiv] = useState(false);
  return (
    <div className="framer-container">
      <motion.div animate={{ y: -100, scale: 1 }} initial={{ scale: 0}}></motion.div>
      <motion.div animate={{ y: 100, scale: 1 }} initial={{ scale: 0}}></motion.div>
    </div>
  );
}

export default App;
