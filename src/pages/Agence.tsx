import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

const Agence = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imageDivRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);

  const imgArr = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SebR_640X960-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_640X980_2-640x960.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ];

  useGSAP(() => {
    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        start: 'top 25%',
        end: 'top -80%',
        scrub: 1,
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          // Localize and narrow the image element
          const imgEl = imageRef.current;
          if (!imgEl || imgArr.length === 0) return;

          // Compute index and clamp to valid range [0, imgArr.length-1]
          const rawIndex = Math.floor(self.progress * imgArr.length);
          const imgIndex = Math.min(imgArr.length - 1, Math.max(0, rawIndex));
          imgEl.src = imgArr[imgIndex];
        },
      },
    });
  });

  return (
    <div>
      <div className='section1 py-1'>
        <div
          ref={imageDivRef}
          className='absolute h-[20vw] w-[15vw] rounded-3xl overflow-hidden top-40 left-[30vw] '
        >
          <img
            ref={imageRef}
            className='h-full w-full object-cover'
            src='https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg'
            alt='a man with glasses'
          />
        </div>

        <div className='relative font-[lausane500] '>
          <div className='mt-[55vh] '>
            <h1 className='text-[20vw] text-center leading-[18vw] uppercase text-black'>
              Soixan7e <br /> Douze
            </h1>
          </div>

          <div className='pl-[40%] mt-20 text-black'>
            <p className='text-5xl '>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;Notre curiosité nourrit notre
              créativité. On reste humbles et on dit non aux gros egos, même le
              vôtre. Une marque est vivante. Elle a des valeurs, une
              personnalité, une histoire. Si on oublie ça, on peut faire de bons
              chiffres à court terme, mais on la tue à long terme. C’est pour ça
              qu’on s’engage à donner de la perspective, pour bâtir des marques
              influentes.
            </p>
          </div>
        </div>
      </div>
      <div className='section2 h-screen'></div>
    </div>
  );
};

export default Agence;
