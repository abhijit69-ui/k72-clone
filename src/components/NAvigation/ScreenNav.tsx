const ScreenNav = () => {
  type LinkItem = {
    label: string;
    stripText: string;
    images: [string, string];
    borderBottom?: boolean;
  };

  const links: LinkItem[] = [
    {
      label: 'Projets',
      stripText: 'Pour tout voir',
      images: [
        'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
        'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
      ],
    },
    {
      label: 'Agence',
      stripText: 'Pour tout savoir',
      images: [
        'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
        'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
      ],
    },
    {
      label: 'Contact',
      stripText: 'Pour envoyeur un fax',
      images: [
        'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
        'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
      ],
    },
    {
      label: 'Blogue',
      stripText: 'lire less articles',
      images: [
        'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg',
        'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg',
      ],
      borderBottom: true,
    },
  ];

  return (
    <div
      id='fullscreen'
      className='text-white h-screen overflow-x-hidden py-40 w-full absolute bg-black'
    >
      <div id='all-links'>
        {links.map((link, i) => (
          <div
            key={i}
            className={`link relative cursor-pointer border-t border-white ${
              link.borderBottom ? 'border-b' : ''
            } hover:border-transparent`}
          >
            <h1 className='font-[lausane500] text-center text-[8vw] leading-[0.8] pt-6 uppercase'>
              {link.label}
            </h1>

            {/* Moving strip (keep custom classes for your vanilla CSS animations) */}
            <div className='moveLink absolute flex top-0 text-black bg-sapgreen'>
              {[0, 1].map((j) => (
                <div key={j} className='moveX flex items-center'>
                  <h2 className='whitespace-nowrap font-[lausane500] text-center text-[8vw] leading-[0.8] pt-6 uppercase'>
                    {link.stripText}
                  </h2>
                  <img
                    className='h-20 w-52 rounded-full shrink-0 object-cover'
                    src={link.images[0]}
                    alt={`${link.label}-img-1`}
                  />
                  <h2 className='whitespace-nowrap font-[lausane500] text-center text-[8vw] leading-[0.8] pt-6 uppercase'>
                    {link.stripText}
                  </h2>
                  <img
                    className='h-20 w-52 rounded-full shrink-0 object-cover'
                    src={link.images[1]}
                    alt={`${link.label}-img-2`}
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScreenNav;

// snow: https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg
// bag: https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg
// nokia: https://k72.ca/uploads/blog/blogImg/50ff59cc0550df5b36543807a58db98c52e01a22274a317eafbfa5266941579b-640x290.png
