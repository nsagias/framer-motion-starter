import { motion } from "framer-motion";
import "./AnimatedBackdrop.css"

export default function AnimatedBackdrop({ children, onClick}: any) {
  return (
    <motion.div
      className="backdrop"
      onClick={onClick}
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
    >
      {children}
    </motion.div>
  );
}