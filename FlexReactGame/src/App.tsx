
import { useState } from 'react';
import './App.css'
import Gameboard from './components/Gameboard'
import Quests from './components/Quests'

function App() {
  const [level, setLevel] = useState<number>(0);
  const [answerValues, setAnswerValues] = useState<string>('');

  console.log(level);

  return (
    <main className='flex flex-col h-[100vh] w-[100vw] overflow-auto xl:flex-row xl:overflow-hidden'>
      <Quests questLevel={level} setQuestLevel={setLevel} setAnswer={setAnswerValues} answer={answerValues} className='h-full flex-grow basis-2/5 bg-[#2D3748] flex justify-center '/>
      <Gameboard questLevel={level} answer={answerValues} className='h-full flex-grow basis-3/5 bg-[#2D3748] p0'/>
    </main>
  )
}

export default App
