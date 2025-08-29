import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Stairs = ({ children }: Props) => {
  const currentPath = useLocation().pathname;

  const stairRef = useRef<HTMLDivElement | null>(null);
  const pageRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to(stairRef.current, {
      display: 'block',
    });
    tl.from('.stair', {
      height: 0,
      stagger: {
        amount: -0.25,
      },
    });
    tl.to('.stair', {
      y: '100%',
      stagger: {
        amount: -0.25,
      },
    });
    tl.to(stairRef.current, {
      display: 'none',
    });
    tl.to('.stair', {
      y: '0%',
    });

    gsap.from(pageRef.current, {
      opacity: 0,
      delay: 1.3,
      scale: 1.2,
    });
  }, [currentPath]);

  return (
    <div>
      <div ref={stairRef} className='h-screen w-full fixed z-10 top-0'>
        <div className='h-full w-full flex fixed'>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
          <div className='stair h-full w-1/5 bg-black'></div>
        </div>
      </div>
      <div ref={pageRef}>{children}</div>
    </div>
  );
};

export default Stairs;
