import React from 'react';
import hero from '../assets/image-hero-desktop.png';
import databiz from '../assets/client-databiz.svg';
import audio from '../assets/client-audiophile.svg';
import meet from '../assets/client-meet.svg';
import maker from '../assets/client-maker.svg';

const Hero = () => {
    return (
      <>
        <div className="sm:p-2 flex flex-col flex-col-reverse items-center gap-10  mt-5 w-full overflow-x-hidden md:flex md:flex-row md:gap-1 md:px-4 md:p-4 py-35lg:gap-18 ">
          <div className="md:max-w-2xl flex flex-col items-center gap-5 text-center md:gap-7 md:text-start md:items-start md:ml-auto md:mr-12">
            <h1 className=" md:max-w-2xl text-black text-4xl font-bold md:text-8xl">
              Make <br className="hidden md:block" />
              remote work
            </h1>

            <p className=" max-w-[350px] md:max-w-[450px] text-center md:text-start font-semibold text-slate-500 text-lg">
              Get Your team in sync, no matter your location,Streamline
              processes,create team rituals,and watch productivity soar.
            </p>

            <button className="cursor-pointer px-4 py-2 border-black border-2 rounded-lg md:mr-auto text-white font-bold text-xl bg-black hover:bg-white hover:text-black">
              Learn more
            </button>
            <div className="flex gap-7 mt-5 md:mt-14">
              <img src={databiz} className="w-13 h-5" />
              <img src={audio} className="w-13 h-5" />
              <img src={meet} className="w-13 h-5" />
              <img src={maker} className="w-13 h-5" />
            </div>
          </div>
          <div className="max-w-sm md:max-w-md w-full md:ml-auto md:mr-auto">
            <img src={hero} className="md:max-w-md h-sm" />
          </div>
        </div>
      </>
    );
}

export default Hero