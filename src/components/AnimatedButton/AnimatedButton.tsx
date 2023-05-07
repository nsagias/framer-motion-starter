import { motion } from "framer-motion";

export default function AnimatedButton() {
  return (
    <>
      <div>
        <motion.button 
          className="save-button"
          whileHover={{ scale: 1.1 }}
          onClick={() => null}
        >
          Animated Button Hover
        </motion.button>
      </div>

      <div>
        <motion.button 
          className="save-button"
          whileTap={{ scale: 0.9 }}
          onClick={() => null}
        >
          Animated Button Tap
        </motion.button>
      </div>

      <div>
        <motion.button 
          className="save-button"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => null}
        >
          Animated Button Hover and Tap
        </motion.button>
      </div>
    </>
  
  );
}