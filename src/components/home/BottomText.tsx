import { Link } from 'react-router-dom';

const BottomText = () => {
  return (
    <div className='font-[lausane500] flex justify-center items-center gap-4 '>
      <div
        className='border-3 h-24 flex items-center border-white 
      hover:border-sapgreen hover:text-sapgreen rounded-full px-14 uppercase '
      >
        <Link to='/projets' className='text-[6vw] mt-6'>
          Projets
        </Link>
      </div>

      <div
        className='border-3 h-24 flex items-center border-white 
      hover:border-sapgreen hover:text-sapgreen rounded-full px-14 uppercase '
      >
        <Link to='/agence' className='text-[6vw] mt-6'>
          Agence
        </Link>
      </div>
    </div>
  );
};

export default BottomText;
