import Image from 'next/image';
import Container from './Container';

const Myself = () => {
  return (
    <Container>
      <div className='flex flex-col sm:flex-row-reverse justify-between gap-6 sm:gap-3 w-full'>
        <div className='w-full sm:w-[18%]'>
          <Image
            src={'/manav.jpeg'}
            alt='manav'
            width={110}
            height={110}
            className='rounded-full object-cover w-[110px] mx-auto sm:h-[110px]'
          />
        </div>
        <div className='w-full sm:w-[78%]'>
          <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
            Hi, I&apos;m Manav
            <span className='inline-block animate-wave'>👋</span>
          </h1>
          <p className='mt-2 text-base sm:text-lg md:text-xl sm:px-1'>
              Full Stack Developer, who is building end to end web applications, gymming, gaming
              and generally being a good human being .   
                      </p>
        </div>
      </div>
    </Container>
  );
};

export default Myself;
