import "./AnimatedModal.css";
import AnimatedBackdrop from "../AnimatedBackdrop";
import { motion } from "framer-motion";


export default function AnimatedModal({ handleClose, text }: any) {
  return (
    <div className="">
      <AnimatedBackdrop onClick={handleClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="modal orange-gradient"
        >

        </motion.div>
      </AnimatedBackdrop>
    </div>
  );
}