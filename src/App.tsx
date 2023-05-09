import { useState } from 'react';
import AnimatedButton from './components/AnimatedButton/AnimatedButton';
import AnimatedModel from './components/AnimatedModal/AnimatedModal';
import { AnimatePresence } from "framer-motion";

export default function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const close: () => void = () => setModalOpen(false);
  const open: () => void = () => setModalOpen(true);
  return (
    <>
      <AnimatedButton 
        onModalOpen={modalOpen}
        onOpen={open}
        onClose={close}
      />
      <AnimatePresence
        initial={false}
        // exitBeforeEnter
        mode={"wait"}
      >
        {modalOpen && ( <AnimatedModel modalOpen={modalOpen} handleClose={close}/> ) }
      </AnimatePresence>
    </>
  );
}
