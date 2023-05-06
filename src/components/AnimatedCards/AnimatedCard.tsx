import { motion } from "framer-motion";
import { AnimatedCardProps } from "../../types/AnimatedCard";
import { cardVariants } from "./constants";
import "./AnimatedCard.css"



export default function AnimatedCard({ emoji, hueA, hueB }: AnimatedCardProps) {

  const hue = (h: number) => `hsl(${h}, 100%, 50%)`;
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      className="card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" style={{ background }} />
      <motion.div className="card" variants={cardVariants}>
        {emoji}
      </motion.div>
    </motion.div>
  );
}