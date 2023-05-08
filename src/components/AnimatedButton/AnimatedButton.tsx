import { motion } from "framer-motion";

type AnimatedButtonProps = {
  onModalOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
};

export default function AnimatedButton({ onModalOpen, onOpen, onClose }: AnimatedButtonProps ) {
  return (
    <>
      <div>
        <motion.button 
          className="save-button"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          onClick={() => ( onModalOpen ? onClose() : onOpen() )}
        >
          Show Modal
        </motion.button>
      </div>
    </>
  );
}