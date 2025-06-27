import QUESTS from '../data/questsData';

const justifyMap = {
  'flex-start': 'justify-start',
  'flex-end': 'justify-end',
  'center': 'justify-center',
  'space-between': 'justify-between',
  'space-around': 'justify-around',
  'space-evenly': 'justify-evenly',
} as const;

const itemsMap = {
  'flex-start': 'items-start',
  'flex-end': 'items-end',
  'center': 'items-center',
  'baseline': 'items-baseline',
  'stretch': 'items-stretch',
} as const;

const directionMap = {
  'row': 'flex-row',
  'row-reverse': 'flex-row-reverse',
  'column': 'flex-col',
  'column-reverse': 'flex-col-reverse',
} as const;

export default function Gameboard(
  { answer, questLevel, ...props }: { answer: string; questLevel: number; } & React.HTMLAttributes<HTMLDivElement>
) {
  const trimmedAnswer = answer
    .split(/[\n;]+/)
    .map(line => line.trim())
    .filter(Boolean)
    .map(line =>
      line
        .replace(/display\s*:\s*flex\s*/gi, 'flex')
        .replace(/justify-content\s*:\s*(flex-start|flex-end|center|space-between|space-around|space-evenly)\s*/gi, (_, val) => {
          return justifyMap[val.toLowerCase() as keyof typeof justifyMap] || '';
        })
        .replace(/align-items\s*:\s*(flex-start|flex-end|center|baseline|stretch)\s*/gi, (_, val) => {
          return itemsMap[val.toLowerCase() as keyof typeof itemsMap] || '';
        })
        .replace(/flex-direction\s*:\s*(row|row-reverse|column|column-reverse)\s*/gi, (_, val) => {
          return directionMap[val.toLowerCase() as keyof typeof directionMap] || '';
        })
    )
    .join(' ');

  const trimmedAnswerTokens = trimmedAnswer.split(/\s+/);
  const bonusTokens = QUESTS[questLevel].bonusValues.split(/\s+/);

  const finalBonus = bonusTokens
    .filter(token => {
      const isJustify = token.startsWith("justify-");
      const isItems = token.startsWith("items-");
      const isDirection = token.startsWith("flex-") && (token.includes("row") || token.includes("col"));

      const hasCustomJustify = trimmedAnswerTokens.some(val =>
        /^justify-(start|end|center|between|around|evenly)$/.test(val)
      );
      const hasCustomItems = trimmedAnswerTokens.some(val =>
        /^items-(start|end|center|baseline|stretch)$/.test(val)
      );
       const hasCustomDirection = trimmedAnswerTokens.some(val =>
        /^flex-(row|row-reverse|col|col-reverse)$/.test(val)
      );

      if (isJustify && hasCustomJustify) return false;
      if (isItems && hasCustomItems) return false;
      if (isDirection && hasCustomDirection) return false;
      return true;
    })
    .join(" ");

  return (
    <div {...props}>
      <div className="w-full max-w-6xl mx-auto">
        <div
          className="relative w-full aspect-[4/3] bg-no-repeat bg-contain bg-center border-8 border-[#4A5568]"
          style={{
            backgroundImage: `url("${QUESTS[questLevel]?.levelMap}")`,
          }}
        >
          <div className={`absolute inset-0 ${finalBonus} ${trimmedAnswer}`}>
            {QUESTS[questLevel].boardComponents}
          </div>
        </div>
      </div>
    </div>
  );
}
