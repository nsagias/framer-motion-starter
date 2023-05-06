import AnimatedDiv from './components/AnimatedDiv/AnimatedDiv';
import AnimatedCard from './components/AnimatedCards/AnimatedCard';
import { fruitList } from './components/AnimatedCards/constants';



function App() {
  return (
    <div className="">
      { fruitList && fruitList.map((fruit: any) => (
        <AnimatedCard emoji={fruit.emoji} hueA={fruit.hueA} hueB={fruit.hueB} key={fruit.emoji} />
      ))}
  
    </div>   
  );
}

export default App;
