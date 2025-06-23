
import QUESTS from '../data/questsData';

export default function Gameboard(
    { answer, questLevel, ...props }: { answer: string; questLevel: number; } & React.HTMLAttributes<HTMLDivElement>
) {
    const trimmedAnswer = answer
        .replace(/display\s*:\s*flex\s*;?/gi, 'flex')
        .replace(/justify-content\s*:\s*(\w+)\s*;?/gi, 'justify-$1')
        .replace(/align-items\s*:\s*(\w+)\s*;?/gi, 'items-$1');

    return (
        <div {...props}>
            <div className="w-full max-w-6xl mx-auto">
                <div
                    className="relative w-full aspect-[4/3] bg-no-repeat bg-contain bg-center"
                    style={{
                        backgroundImage: `url("${QUESTS[questLevel]?.levelMap}")`,
                    }}
                >
                    <div className={`absolute inset-0  ${trimmedAnswer} ${QUESTS[questLevel].bonusValues}`}>
                        {QUESTS[questLevel].boardComponents}
                    </div>
                </div>
            </div>
        </div>
    );
}
