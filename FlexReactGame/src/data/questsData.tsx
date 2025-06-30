import LEVELONE from '../assets/Level1.svg'
import LEVELTWO from '../assets/Level2.svg'
import LEVELTHREE from '../assets/Level3.svg'
import LEVELFOUR from '../assets/Level4.svg'
import LEVELFIVE from '../assets/Level5.svg'
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
  correct: string[];
}

const quests: Quest[] = [
  {
    id: 0,
    title: 'Flex - Arrange Cars Side by Side',
    values: [],
    bonusValues: 'md:gap-[15%] gap-[17%]  sm:gap-[15%] mx-[5%] pl-[6%]  pt-[3%] sm:pt-[2%]',
    description: <span>You have multiple cars positioned one behind the other in a single line. However, the road has multiple lanes. Your task is to use CSS <CodeSample >display: flex;</CodeSample> to arrange the cars side by side in a row, so that they appear next to each other horizontally, rather than stacked vertically.</span>,
    levelMap: LEVELONE,
    boardComponents: (
      <>
        <CarComponent 
          colorP='#15a305' 
          colorS='#15a305' 
          idSuffix='1' 
          className='w-[10%] h-[20%] sm:w-[12%] sm:h-[23%] min-w-[30px]  min-h-[15px] mb-3 z-20' 
        />
        <CarComponent 
          colorP='#51a7c9' 
          colorS='#51a7c9' 
          idSuffix='2' 
          className='w-[10%] h-[20%] sm:w-[12%] sm:h-[23%] min-w-[30px] min-h-[15px]  mb-3 z-20' 
        />
        <CarComponent 
        colorP='#943e3e'
        colorS='#943e3e'
          className='w-[10%] h-[20%] sm:w-[12%] sm:h-[23%] min-w-[30px] min-h-[15px] mb-3 z-20'
        />
        <CarComponent 
          className='w-[10%] h-[20%] sm:w-[12%] sm:h-[23%] min-w-[20px] min-h-[10px] mb-3 z-20'
        /> 

        <div
            className="absolute z-10 w-[12%] h-[26%] top-[1%] right-[6%] border-[5px] border-dashed border-[#ffed4e]"
            style={{ backgroundColor: 'rgba(247, 206, 0, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] top-[1%] left-[6%] border-[5px] border-dashed border-[#15a305]"
            style={{ backgroundColor: 'rgba(21, 163, 5, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] top-[1%] left-[31%] border-[5px] border-dashed border-[#51a7c9]"
            style={{ backgroundColor: 'rgba(81, 167, 201, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] top-[1%] right-[31%] border-[5px] border-dashed border-[#943e3e]"
            style={{ backgroundColor: 'rgba(148, 62, 62, 0.3)' }}
          />
      </>
    ),
    correct: ['display: flex','flex']
  }, 
  {
    id: 1,
    title: 'Justify Content - Move Car to Parking Spot',
    values: ['display: flex;'],
    bonusValues: 'flex ml-[10%] mr-[18%]  mt-[5%]',
    description: <span>You have a car positioned at the entrance of the parking lot. Your task is to use CSS <CodeSample >justify-content: flex-end;</CodeSample> to move the car horizontally into the correct parking spot at the far end of the lot.</span>,
    levelMap: LEVELTWO,
    boardComponents: (
      <>
        <CarComponent 
          idSuffix='1' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] rotate-90 z-20 ' 
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
          idSuffix='3' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] rotate-270 absolute top-[48%] right-[3%]' 
        />
        <CarComponent 
          colorP='#a3e848' 
          colorS='#a3e848' 
          idSuffix='4' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] rotate-290 absolute bottom-[16%] right-[25%]' 
        />

        <div
            className="absolute z-10 w-[12%] h-[26%] top-[-1.5%] right-[2%] sm:right-[0%] border-[5px] border-dashed border-[#ffed4e] rotate-90"
            style={{ backgroundColor: 'rgba(247, 206, 0, 0.3)' }}
          />
      </>
    ),
    correct: ['justify-content: flex-end','justify-end']
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
          
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px]  mb-5 z-20'
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
          <div
            className="absolute z-10 w-[12%] h-[26%] bottom-[5%] right-[44%] border-[5px] sm:bottom-[1%] border-dashed border-[#ffed4e]"
            style={{ backgroundColor: 'rgba(247, 206, 0, 0.3)' }}
          />
  
      </>
    ),
    correct: ['justify-content: center','justify-center']
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
        className='w-[20%] h-[44%] min-w-[40px] min-h-[20px] rotate-90 z-20' 
      />

      <CarComponent 
        colorP='#6698d9' 
        colorS='#6698d9' 
        className='w-[20%] h-[44%] min-w-[40px] min-h-[20px] rotate-90 absolute right-[5%] bottom-[28%]' 
      />

      <CarComponent 
        colorP='#782961' 
        colorS='#782961' 
        className='w-[20%] h-[44%] min-w-[30px] min-h-[15px] rotate-90 absolute left-[5%] bottom-[58%]' 
      />
      <div
            className="absolute z-10 w-[10%] h-[50%] t  right-[45%] bottom-[-3%] border-[5px] border-dashed border-[#ffed4e] rotate-90"
            style={{ backgroundColor: 'rgba(247, 206, 0, 0.3)' }}
          />
    </>
  ),
  correct: ['align-items: flex-end','items-end']
},
{
    id: 4,
    title: 'Flex Direction - Reverse the Cars',
    values: ['display: flex;', 'algin-items: center;'],
    bonusValues: 'flex items-center pt-[2%] px-[10%] gap-[10%] ',
    description: <span> The cars are currently positioned on the wrong side of the road. Use CSS <CodeSample>flex-direction: row-reverse;</CodeSample> to correct their direction and ensure they're driving on the proper side. </span>,
    levelMap: LEVELFIVE,
    boardComponents: (
      <>
        <CarComponent 
          colorP='#15a305' 
          colorS='#15a305' 
          idSuffix='1' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3 z-20' 
        />
        <CarComponent 
          colorP='#51a7c9' 
          colorS='#51a7c9' 
          idSuffix='2' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3 z-20' 
        />
        <div className='w-[12%] h-[23%]'/>
        <CarComponent 
        colorP='#943e3e'
        colorS='#943e3e'
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3 rotate-180 z-20'
        />
        <CarComponent 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3 rotate-180 z-20'
        />
        <div
            className="absolute z-10 w-[12%] h-[26%] bottom-[37%] left-[10%] sm:left-[9%] border-[5px] border-dashed border-[#ffed4e]"
            style={{ backgroundColor: 'rgba(247, 206, 0, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] bottom-[37%] right-[10%] sm:right-[9%] border-[5px] border-dashed border-[#15a305]"
            style={{ backgroundColor: 'rgba(21, 163, 5, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] bottom-[37%] right-[28.5%] sm:right-[26.5%] border-[5px] border-dashed border-[#51a7c9]"
            style={{ backgroundColor: 'rgba(81, 167, 201, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] bottom-[37%] left-[28.5%] sm:left-[26.5%] border-[5px] border-dashed border-[#943e3e]"
            style={{ backgroundColor: 'rgba(148, 62, 62, 0.3)' }}
          />
         
      </>
    ),
    correct: ['flex-direction: row-reverse','flex-row-reverse']
  },

  {
    id: 5,
    title: 'Gap - Maintain Safe Distance',
    values: ['display: flex;', 'align-items: center;'],
    bonusValues: ' items-center  mx-[5%] pl-[2%] sm:pl-[6%] pt-[2%] flex',
    description: <span>Cars are driving too close together on the highway! Use <CodeSample>gap: 15%;</CodeSample> to maintain safe following distance.</span>,
    levelMap: LEVELONE,
    boardComponents: (
      <>
        <CarComponent 
          colorP='#15a305' 
          colorS='#15a305' 
          idSuffix='1' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3 z-20' 
        />
        <CarComponent 
          colorP='#51a7c9' 
          colorS='#51a7c9' 
          idSuffix='2' 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3 z-20' 
        />
        <CarComponent 
        colorP='#943e3e'
        colorS='#943e3e'
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3 z-20'
        />
        <CarComponent 
          className='w-[12%] h-[23%] min-w-[40px] min-h-[20px] mb-3 z-20'
        /> 

        <div
            className="absolute z-10 w-[12%] h-[26%] top-[38%] right-[3%] sm:right-[6%] border-[5px] border-dashed border-[#ffed4e]"
            style={{ backgroundColor: 'rgba(247, 206, 0, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] top-[38%] left-[3%] sm:left-[6%] border-[5px] border-dashed border-[#15a305]"
            style={{ backgroundColor: 'rgba(21, 163, 5, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] top-[38%] sm:left-[31%] left-[30%] border-[5px] border-dashed border-[#51a7c9]"
            style={{ backgroundColor: 'rgba(81, 167, 201, 0.3)' }}
          />
          <div
            className="absolute z-10 w-[12%] h-[26%] top-[38%] right-[30%] sm:right-[31%] border-[5px] border-dashed border-[#943e3e]"
            style={{ backgroundColor: 'rgba(148, 62, 62, 0.3)' }}
          />
      </>
    ),
    correct: ['gap: 140px', 'gap: 15%','gap-[140px]','gap-[15%]','gap-35']
  }, 
]

export default quests;