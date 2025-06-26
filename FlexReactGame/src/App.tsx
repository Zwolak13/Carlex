
import { useState } from 'react';
import './App.css'
import Gameboard from './components/Gameboard'
import Quests from './components/Quests'
import Logo from './components/Logo';


function App() {
  const [level, setLevel] = useState<number>(0);
  const [answerValues, setAnswerValues] = useState<string>('');

  console.log(level);

  return (
    <main className="flex flex-col-reverse h-[100vh] w-[100vw] overflow-auto xl:flex-row  xl:overflow-hidde">
      <Quests questLevel={level} setQuestLevel={setLevel} setAnswer={setAnswerValues} answer={answerValues} className='h-full flex-grow basis-2/5 bg-[#2D3748] flex flex-col pt-5 xl:pt-40 justify-between'/>
      <Gameboard questLevel={level} answer={answerValues} className='h-full flex-grow basis-3/5 bg-[#2D3748] flex justify-center items-center'/>
            <Logo className='block xl:absolute top-[3%]  py-5 xl:py-0 bg-[#2D3748] w-[100%] xl:w-[40%]'/>
    </main>
  )
}

export default App
