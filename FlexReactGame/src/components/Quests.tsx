
import SingleQuest from "./SingleQuest";

export default function Quests({
  questLevel,
  setQuestLevel,
  setAnswer,
  answer,
  ...props
}: {
  questLevel: number;
  setQuestLevel: React.Dispatch<React.SetStateAction<number>>;
  setAnswer: React.Dispatch<React.SetStateAction<string>>;
  answer: string;
}& React.HTMLAttributes<HTMLDivElement>){


    return (
        <div {...props}>
          
            <SingleQuest questLevel={questLevel} setQuestLevel={setQuestLevel} setAnswer={setAnswer} answer={answer}/>
        </div>
    )
}