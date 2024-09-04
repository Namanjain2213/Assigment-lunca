import { useState } from 'react';
import vector from '../assets/Vector.png';
import Frame from '../assets/Frame.png';
import './tab.css';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('about');

    return (
        <div className="main-div flex  items-center flex-col bg-[#363C43] text-white rounded-[18.89px] p-4 max-w-[780px] w-[90%] mt-5  md:h-[316px] mx-auto relative">
            <div className='w-[24px] h-[159.69px] mt-4  left-[10px] flex flex-col absolute justify-between'>
                <img src={vector} alt="" />
                <img src={Frame} alt="" />
            </div>

            <div className="absolute central top-[90px]  md:top-[20px] left-[50%] transform -translate-x-1/2 flex items-center justify-around w-full max-w-[614px] h-[62px] bg-black rounded-[23px] mb-4 px-4 custom-container "  >
                <button
                    className={`${activeTab === 'about'
                        ? 'bg-[#28292F]  custom-container  '
                        : 'text-[#A3ADB2] relative bg-transparent outline-none transition-colors ease-in-out overflow-hidden'
                        } w-[195px] h-[49px] rounded-[16px] py-[10px] px-[24px] items-center text-[18px] gap-[10px] hover:text-white shadow-2xl shadow-black `}
                    onClick={() => setActiveTab('about')}
                >
                    About Me
                </button>
                <button
                    className={`${activeTab === 'experiences'
                        ? 'bg-[#28292F] shadow-2xl shadow-black  '
                        : 'text-[#A3ADB2] relative bg-transparent outline-none transition-colors ease-in-out overflow-hidden'
                        } w-[195px] h-[49px] rounded-[16px] py-[10px] text-[18px] centeral px-[24px] items-center gap-[10px] hover:text-white`}
                    onClick={() => setActiveTab('experiences')}
                >
                    Experiences
                </button>
                <button
                    className={`${activeTab === 'recommended'
                        ? 'bg-[#28292F] text-white shadow-2xl shadow-black'
                        : 'text-[#A3ADB2] relative bg-transparent outline-none transition-colors ease-in-out overflow-hidden'
                        } w-[195px] h-[49px] rounded-[16px] py-[10px] px-[24px] text-[18px] items-center gap-[10px] hover:text-white`}
                    onClick={() => setActiveTab('recommended')}
                >
                    Recommended
                </button>
            </div>

            <div className="absolute top-[150px] md:top-[90px] left-[50%] transform -translate-x-1/2 overflow-y-hidden w-full max-w-[611px] h-[175px] p-4 rounded-lg text-[20px] leading-[25.2px] text-[#969696]">
                {activeTab === 'about' && (
                    <p className='font'>
                        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                        <br />
                        <span className='mt-3 block'>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</span>
                    </p>
                )}
                {activeTab === 'experiences' && (
                    <p className='font' >
                        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                        <br />
                        <span className='mt-3 block'>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</span>
                    </p>
                )}
                {activeTab === 'recommended' && (
                    <p className='font'>
                        Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                        <br />
                        <span className='mt-3 block'>I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4-year-old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...</span>
                    </p>
                )}
            </div>

            <div className='last-div w-[64px] h-[8px] md:w-[8px] md:h-[64px] rounded-[8px] absolute  top-[110px] sm:right-[30px]' style={{ background: 'linear-gradient(177.32deg, #888989 5.6%, #4A4E54 93.28%)' }}></div>
        </div>
    );
};

export default Tabs;
