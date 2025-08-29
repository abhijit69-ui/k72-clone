import Video from './Video';

const HeroText = () => {
  return (
    <div className='font-[lausane300] text-white pt-5 text-center'>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] justify-center flex items-center '>
        L'étincelle
      </div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] justify-center flex items-start '>
        qui
        <div className='h-[7vw] w-[16vw] -mt-1 rounded-full overflow-hidden '>
          <Video />
        </div>
        génère
      </div>
      <div className='text-[9.5vw] uppercase leading-[8.5vw] justify-center flex items-center '>
        la créativité
      </div>
    </div>
  );
};

export default HeroText;
