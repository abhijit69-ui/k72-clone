import BottomText from '../components/home/BottomText';
import HeroText from '../components/home/HeroText';
import Video from '../components/home/Video';

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
        <Video />
      </div>

      <div className='h-screen w-screen relative flex flex-col justify-between overflow-hidden'>
        <HeroText />
        <BottomText />
      </div>
    </div>
  );
};

export default Home;
