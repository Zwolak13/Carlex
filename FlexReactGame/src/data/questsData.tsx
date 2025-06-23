import LEVELONE from '../assets/Level1.svg'
import LEVELTWO from '../assets/Level2.svg'
import CarComponent from "../components/Car";

export interface Quest {
  id: number;
  title: string;
  values: string[];
  bonusValues: string;
  description: string;
  levelMap: string;
  boardComponents: React.ReactNode;
  correct: string;
}

const quests: Quest[] = [
  {
    id: 0,
    title: 'Flex - Arrange Cars Side by Side',
    values: [],
    bonusValues: 'md:gap-[15%] gap-[15%]  mx-[5%] pl-10 md:pl-15 ',
    description: 'You have multiple cars positioned one behind the other in a single line. However, the road has multiple lanes. Your task is to use CSS display: flex to arrange the cars side by side in a row, so that they appear next to each other horizontally, rather than stacked vertically.',
    levelMap: LEVELONE,
    boardComponents: (
      <>
        <CarComponent 
          colorP='#15a305' 
          colorS='#15a305' 
          idSuffix='1' 
          className='w-[12%] h-[25%] min-w-[40px] min-h-[20px] ' 
        />
        <CarComponent 
          colorP='#51a7c9' 
          colorS='#51a7c9' 
          idSuffix='2' 
          className='w-[12%] h-[25%] min-w-[40px] min-h-[20px]' 
        />
        <CarComponent 
          className='w-[12%] h-[25%] min-w-[40px] min-h-[20px]'
        />
        <CarComponent 
          className='w-[12%] h-[25%] min-w-[40px] min-h-[20px]'
        />
      </>
    ),
    correct: 'display: flex'
  },
  {
    id: 1,
    title: 'Justify Content - Center Cars on the Road',
    values: ['display: flex;'],
    bonusValues: 'flex mx-[10%]',
    description: 'You have several cars placed on a wide road. Your task is to center all the cars horizontally in the middle of the road using flexbox properties',
    levelMap: LEVELTWO,
    boardComponents: (
      <>
        <CarComponent 
          colorP='#3360b5' 
          colorS='#3360b5' 
          idSuffix='1' 
          className='w-[8%] h-[15%] min-w-[60px] min-h-[45px] rotate-90' 
        />
        <CarComponent 
          colorP='#3360b5' 
          colorS='#3360b5' 
          idSuffix='2' 
          className='w-[8%] h-[15%] min-w-[60px] min-h-[45px] rotate-90 ml-[2%]' 
        />
      </>
    ),
    correct: 'justify-content: center'
  },
  {
    id: 2,
    title: 'Flex3 - Arrange Cars Side by Side',
    values: ['display: flex;'],
    bonusValues: 'justify-start',
    description: 'You have multiple cars positioned one behind the other in a single line. However, the road has multiple lanes. Your task is to use CSS display: flex to arrange the cars side by side in a row, so that they appear next to each other horizontally, rather than stacked vertically.',
    levelMap: LEVELONE,
    boardComponents: (
      <>
        {/* Dodaj komponenty tutaj */}
      </>
    ),
    correct: 'display: flex'
  }
]

export default quests;