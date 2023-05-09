import "./AnimatedModal.css";
import AnimatedBackdrop from "../AnimatedBackdrop";
import { motion } from "framer-motion";
import { dropIn } from "./constants";


export default function AnimatedModal({ handleClose, text }: any) {
  return (
    <div className="">
      <AnimatedBackdrop onClick={handleClose}>
        <motion.div
          drag
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p>{text}</p>
          <button className="button" onClick={handleClose}>Close</button>
        </motion.div>
      </AnimatedBackdrop>
    </div>
  );
}