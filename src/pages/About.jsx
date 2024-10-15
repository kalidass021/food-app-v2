import {Link} from 'react-router-dom';
import {easeIn, motion} from 'framer-motion';
import {BsArrowUpRightCircle} from 'react-icons/bs';

const About = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{
      opacity: 1,
      transition: {delay: 0.4, duration: 0.4, ease: easeIn},
    }}
    >
      <div className='min-h-screen text-gray-700'>
        <div className='p-[60px]'>
          <h1 className='font-extrabold text-4xl p-3 text-[#ff5200]'>About</h1>
          <p className='py-4 pl-2 text-lg'>
            Greetings from FoodApp, your go-to resource for quick and easy food delivery!
            With few clicks, we are committed to deliverying your favourite dishes from nearby eateries straight to your door.
            Wheather you&apos;re organizing feast with friends or just in the mood for a quick snack,
            We make it simple for you to sample various cuisines, find new favorites, and savor delecatable cuisine anywhere, at any time.
          </p>
          <div className='py-5'>
            <p className='pl-2 text-lg'>
              This application was crafted using mordern development tools such as React, Redux, and styled with Tailwind CSS and Daisy UI.
              These technologies, empower us to deliver a fast, responsive interface, making your food ordering experience not just seamless also visually appealing.
              Wheather you&apos; in the mood for for comfort food or looking to explore new cuisines, we&apos;ve made it easy for you to browse and order from wide variety of restaurants.
            </p>
          </div>
          <div className='py-7'>
            <p className='pl-2 py-2 absolute text-xl'>Feel free to visit my</p>
            <Link to={'https://kalidass.vercel.app/'} target='_blank'>
              <button className='ml-[190px] text-white btn bg-[#ff5200] hover:text-[#ff5200] hover:bg-white'>
                Portfolio{' '}<BsArrowUpRightCircle size={20}/>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About