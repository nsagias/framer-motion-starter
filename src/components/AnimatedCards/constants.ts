import { Variants } from "framer-motion";
import { FruitItem } from "../../types/AnimatedCard";

export const cardVariants: Variants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 50,
    rotate: -10,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};


export const fruitList: FruitItem[] = [
  { emoji: "🍅" ,hueA: 340,hueB: 10 },
  { emoji: "🍊" ,hueA: 20, hueB: 40 },
  { emoji: "🍋" ,hueA: 60, hueB: 90 },
  { emoji: "🍐" ,hueA: 80, hueB: 120 },
  { emoji: "🍏" ,hueA: 100, hueB: 140 },
  { emoji: "🫐" ,hueA: 205, hueB: 245 },
  { emoji: "🍆" ,hueA: 260, hueB: 290 },
  { emoji: "🍇" ,hueA: 290, hueB: 320 }
];