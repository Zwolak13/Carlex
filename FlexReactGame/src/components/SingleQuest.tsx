import Arrow from "./Arrow";
import QUESTS from '../data/questsData'
import { useEffect, useState } from "react";

export default function SingleQuest({
  questLevel,
  setQuestLevel,
  setAnswer,
  answer
}: {
  questLevel: number;
  setQuestLevel: React.Dispatch<React.SetStateAction<number>>;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
}){

  const [passedData, setPassedData] = useState<Record<number, boolean>>(() => {
  return JSON.parse(localStorage.getItem('questPassed') || '{}');
});

   const localStorageKey = 'questAnswers';

  useEffect(() => {
    const storedAnswers = localStorage.getItem(localStorageKey);
    if (storedAnswers) {
      const parsed = JSON.parse(storedAnswers);
      if (parsed[questLevel]) {
        setAnswer(parsed[questLevel]);
      } else {
        setAnswer('');
      }
    } else {
      setAnswer('');
    }
  }, [questLevel, setAnswer]);


     useEffect(() => {
    if (answer === '') return; 
    const storedAnswers = localStorage.getItem(localStorageKey);
    const parsed = storedAnswers ? JSON.parse(storedAnswers) : {};
    parsed[questLevel] = answer;
    localStorage.setItem(localStorageKey, JSON.stringify(parsed));

  const correctAnswers: string[] = QUESTS[questLevel].correct || [];
  const isPassed = correctAnswers
    .map(ans => ans.replace(/\s+/g, '').toLowerCase())
    .includes(answer.trim().replace(/\s+/g, '').toLowerCase());

 
  if (isPassed) {
    const storedPassed = localStorage.getItem('questPassed');
    const parsedPassed: Record<number, boolean> = storedPassed ? JSON.parse(storedPassed) : {};
    parsedPassed[questLevel] = true;
    localStorage.setItem('questPassed', JSON.stringify(parsedPassed));
    setPassedData(parsedPassed);
  }
  }, [answer, questLevel]);


    function handleAnswerChange(e: React.ChangeEvent<HTMLInputElement>){
        setAnswer(e.target.value);
    }

    console.log(answer);

    const quest = QUESTS[questLevel];

    const spans = [];
    for (let i = 0; i < 12; i++) {
    spans.push(<span key={i}>{i}</span>);
    }

    function handleIncrease(){
        if(questLevel<QUESTS.length-1 && passedData[questLevel]){
            setQuestLevel((prev: number) => prev+1);
        }
    }
    
    function handleDecrease(){
        if(questLevel>0){
            setQuestLevel((prev: number) => prev-1);
        }
    }

    

    return (
        <div className="w-full flex flex-col items-center">
            <div>
              <div id="questChanger" className="h-10 bg-[#4A5568] m-5 mb-0 flex items-center justify-between px-4">
                <span className="font-bold">Level: {questLevel+1}</span>
                <div className="flex items-center gap-4 ">
                    <Arrow color="#E2E8F0" className="w-5 h-5 rotate-180" onClick={handleDecrease}/>
                    <span className="w-15 flex justify-center font-bold">{questLevel+1} of {QUESTS.length}</span>
                    <Arrow color="#E2E8F0" className="w-5 h-5" onClick={handleIncrease}/>
                </div>
            </div>
            <div id="questInfo" className="flex flex-col justify-between h-90 sm:h-60 bg-[#1A202C] m-5 mt-0 px-4 pb-4 pt-2">
                <div>
                  <h1 className="text-xl text-white pb-2">{quest.title}</h1>
                  <span className="text-gray-300">{quest.description}</span>
                </div>

                <p className="text-sm text-gray-500 italic">
                  * Some levels include additional styles (e.g. margins, paddings) to align elements correctly with the board.<br/>
                  * You can also use Tailwind classes
                </p>
              </div>

            <div id="questInputy" className="h-78 bg-amber-50 m-5 flex">
                <div className="h-full w-10 bg-[#4A5568] flex flex-col items-center p-3">
                        {spans}
                </div>
                <div className="bg-[#1A202C] h-full w-full p-3 flex flex-col justify-between ">
                    <div className="flex flex-col text-[#E2E8F0]">
                        <span>#road {"{"}</span>
                      {quest.values.map((val, index) => (
                          <span className="ml-4" key={index}>{val}</span>
                      ))}
                      <input className="w-1/2 ml-4" type="text" value={answer} onChange={event => handleAnswerChange(event)}/>
                      <span> {"}"}</span>
                    </div>
                    {questLevel != QUESTS.length-1 && <button type="button" onClick={handleIncrease} className={`trantransition duration-300 ${passedData[questLevel] ? 'h-[15%] w-20 bg-[#4A5568] self-end text-[120%] text-orange-500 font-bold' : 'h-[15%] w-20 opacity-50  bg-[#4A5568] self-end text-[120%] text-red-200 font-bold'}`}>Next</button>}
                </div>
                
            </div>
            </div>

            <div className="text-center py-3">
              <p className="text-sm text-gray-500 italic ">
                  © {new Date().getFullYear()} Carlex Game – Inspired by <a href="https://flexboxfroggy.com"  className="underline hover:text-yellow-400">Flexbox Froggy</a>.
                </p>
                <p className="text-sm text-gray-500 italic">
                  Powered by <a href="https://github.com/Zwolak13" target="_blank"  className="underline hover:text-yellow-400">@Zwolak13</a>.
                </p>
            </div>
        </div>
    )
}