import background from "../Assets/background.png";

const Home = () => {
  return (
    <div
      className=' flex justify-center items-center
    min-h-screen relative
    '>
      <div className='absolute top-0 left-0 right-0 bottom-0 -z-10'>
        <img src={background} alt='' className='min-h-screen min-w-screen' />
      </div>
      <div className='h-full w-4/5'>
        <div
          className=' bg-gray-300 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100 
'>
          <div className='flex py-8 px-10'>
            {/* Banner ro inside */}
            <div className='w-2/5'>
              <img
                src='https://images.pexels.com/photos/12973509/pexels-photo-12973509.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
                alt='Profile Picture'
                className='border-solid border-white border rounded-md'
              />
            </div>
            <div className='w-3/5 ml-4 text-left'>
              <h3 className=' text-2xl font-bold'>About Me</h3>
              <p className='font-normal mt-3 text-lg'>
                I am a UI/UX designer with 2+years of experience and
                specialization in complex web and mobile application design. I
                have achieved a 10% increase in user satisfaction and a 15%
                increase in conversions through the creation of interactively
                tested, data driven, and user-centered design. Look to leverage
                my skills to bring professional and monetized improvements to
                your organization as a UI/UI designer.
              </p>
              <h5 className='text-xl font-bold mt-6'>Skills</h5>
              <div className='flex flex-wrap'>
                <span className='border border-solid border-white rounded-full py-2 px-4 mx-1 bg-gray-200 text-gray-500 mt-2'>
                  Html
                </span>
                <span className='border border-solid border-white rounded-full py-2 px-4 mx-1 bg-gray-200 text-gray-500 mt-2'>
                  Css
                </span>
                <span className='border border-solid border-white rounded-full py-2 px-4 mx-1 bg-gray-200 text-gray-500 mt-2'>
                  Javascript
                </span>
                <span className='border border-solid border-white rounded-full py-2 px-4 mx-1 bg-gray-200 text-gray-500 mt-2'>
                  Figma
                </span>
                <span className='border border-solid border-white rounded-full py-2 px-4 mx-1 bg-gray-200 text-gray-500 mt-2'>
                  Adobe XD
                </span>
                <span className='border border-solid border-white rounded-full py-2 px-4 mx-1 bg-gray-200 text-gray-500 mt-2'>
                  Sketch
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
