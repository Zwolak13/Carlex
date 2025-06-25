import Arrow from "./Arrow";
import QUESTS from '../data/questsData'
import { useEffect } from "react";

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
        if(questLevel<QUESTS.length-1){
            setQuestLevel((prev: number) => prev+1);
        }
    }
    
    function handleDecrease(){
        if(questLevel>0){
            setQuestLevel((prev: number) => prev-1);
        }
    }

    

    return (
        <div className="w-full ">
            <div id="questChanger" className="h-10 bg-[#4A5568] m-5 mb-0 flex items-center justify-between px-4">
                <span className="font-bold">Level: {questLevel+1}</span>
                <div className="flex items-center gap-4 ">
                    <Arrow color="#E2E8F0" className="w-5 h-5 rotate-180" onClick={handleDecrease}/>
                    <span className="w-15 flex justify-center font-bold">{questLevel+1} of {QUESTS.length}</span>
                    <Arrow color="#E2E8F0" className="w-5 h-5" onClick={handleIncrease}/>
                </div>
            </div>
            <div id="questInfo" className="h-50 bg-[#1A202C] m-5 mt-0 p-4">
                <h1>{quest.title}</h1>
                <span>{quest.description}</span>
            </div>
            <div id="questInputy" className="h-80 bg-amber-50 m-5 flex">
                <div className="h-full w-10 bg-[#4A5568] flex flex-col items-center p-3">
                        {spans}
                </div>
                <div className="bg-[#1A202C] h-full w-full p-3 flex flex-col text-[#E2E8F0]">
                    <span>#road {"{"}</span>
                    {quest.values.map((val, index) => (
                        <span className="ml-4" key={index}>{val}</span>
                    ))}
                    <input className="w-1/2 ml-4" type="text" value={answer} onChange={event => handleAnswerChange(event)}/>
                    <span> {"}"}</span>
                </div>
            </div>
        </div>
    )
}