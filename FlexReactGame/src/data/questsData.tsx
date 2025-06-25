import LEVELONE from '../assets/Level1.svg'
import LEVELTWO from '../assets/Level2.svg'
import LEVELTHREE from '../assets/Level3.svg'
import LEVELFOUR from '../assets/Level4.svg'
import CarComponent from "../components/Car";
import CodeSample from '../components/Formatting/CodeSample';

export interface Quest {
  id: number;
  title: string;
  values: string[];
  bonusValues: string;
  description: React.ReactNode;
  levelMap: string;
  boardComponents: React.ReactNode;
  correct: string;
}

const quests: Quest[] = [
  {
    id: 0,
    title: 'Flex - Arrange Cars Side by Side',
    values: [],
    bonusValues: 'md:gap-[15%] gap-[15%]  mx-[5%] pl-10 md:pl-15  pt-2',
    description: <span>You have multiple cars positioned one behind the other in a single line. However, the road has multiple lanes. Your task is to use CSS <CodeSample >display: flex;</CodeSample> to arrange the cars side by side in a row, so that they appear next to each other horizontally, rather than stacked vertically.</span>,
    levelMap: LEVELONE,
    boardComponents: (
      <>
        <CarComponent 
          colorP='#15a305' 
          colorS='#15a305' 
          idSuffix='1' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3' 
        />
        <CarComponent 
          colorP='#51a7c9' 
          colorS='#51a7c9' 
          idSuffix='2' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3' 
        />
        <CarComponent 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3'
        />
        <CarComponent 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3'
        />
      </>
    ),
    correct: 'display: flex'
  },
  {
    id: 1,
    title: 'Justify Content - Move Car to Parking Spot',
    values: ['display: flex;'],
    bonusValues: 'flex ml-[10%] mr-[18%] mt-[5%]',
    description: <span>You have a car positioned at the entrance of the parking lot. Your task is to use CSS <CodeSample >justify-content: flex-end;</CodeSample> to move the car horizontally into the correct parking spot at the far end of the lot.</span>,
    levelMap: LEVELTWO,
    boardComponents: (
      <>
        <CarComponent 
          colorP='#3360b5' 
          colorS='#3360b5' 
          idSuffix='1' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] rotate-90 ' 
        />
        <CarComponent 
          colorP='#943e3e' 
          colorS='#943e3e' 
          idSuffix='2' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] rotate-270  0 absolute top-[17%] left-[18%]' 
        />
         <CarComponent 
          colorP='#603b69' 
          colorS='#603b69' 
          idSuffix='2' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] rotate-270 absolute top-[48%] right-[3%]' 
        />
        <CarComponent 
          colorP='#a3e848' 
          colorS='#a3e848' 
          idSuffix='2' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] rotate-290 absolute bottom-[16%] right-[25%]' 
        />
      </>
    ),
    correct: 'justify-content: center'
  },
  {
    id: 2,
    title: 'Justify Content -  Bypass the Traffic Jam',
    values: ['display: flex;'],
    bonusValues: 'ml-[15%] flex items-end',
    description: <span>Your yellow car is currently stuck behind traffic in the left lane. Your task is to use CSS <code className="bg-gray-100 text-sm text-gray-800 px-1 py-0.5 rounded">justify-content: center</code> to change lanes and move your car horizontally into an open lane to bypass the traffic jam.</span>
,
    levelMap: LEVELTHREE,
    boardComponents: (
      <>
        <CarComponent 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px]  mb-5'
        />

        <CarComponent
          colorP='#714882'
          colorS='#714882' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] absolute top-[2%] left-[23%] '
        />

        <CarComponent
          colorP='#f6a739'
          colorS='#f6a739' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] absolute top-[30%] left-[23%] '
        />

        <CarComponent
          colorP='#aaf875'
          colorS='#aaf875' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] absolute top-[28%] left-[0%] rotate-15 '
        />
      </>
    ),
    correct: 'display: flex'
  },
  {
  id: 3,
  title: 'Align Items - Don\'t Miss the Exit',
  values: ['display: flex;', 'justify-content: center;'],
  bonusValues: 'flex justify-center items-start  h-[58%] top-[21%]',
  description: (
    <span>
      The car is currently positioned on the top lane, but it needs to move down to the exit lane at the bottom. Use <CodeSample>align-items: flex-end;</CodeSample> to align the car.
    </span>
  ),
  levelMap: LEVELFOUR, 
  boardComponents: (
    <>
      <CarComponent 
        colorP='#3eaf7c' 
        colorS='#3eaf7c' 
        className='w-[20%] h-[44%] min-w-[40px] min-h-[20px] rotate-90 ' 
      />

      <CarComponent 
        colorP='#6698d9' 
        colorS='#6698d9' 
        className='w-[20%] h-[44%] min-w-[40px] min-h-[20px] rotate-90 absolute right-[5%] bottom-[28%]' 
      />

      <CarComponent 
        colorP='#782961' 
        colorS='#782961' 
        className='w-[20%] h-[44%] min-w-[40px] min-h-[20px] rotate-90 absolute left-[5%] bottom-[58%]' 
      />

    </>
  ),
  correct: 'align-items: center'
}
]

export default quests;