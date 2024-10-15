import { Link } from 'react-router-dom';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiIfood } from 'react-icons/si';

const socials = [
  {
    icon: <FaLinkedin />,
    path: 'https://www.linkedin.com/in/kalidass-boopathi-824b5a1a3',
  },
  {
    icon: <FaGithub />,
    path: 'https://github.com/kalidass021',
  },
  {
    icon: <FaEnvelope />,
    path: 'mailto:kalidass.k021@gmail.com',
  },
];

const Footer = () => {
  return (
    <>
      <hr />
      <footer className='footer bg-[#ff5200] text-white p-[15px] flex justify-between items-center'>
        <aside className='ml-[45px]'>
          <SiIfood size={30}/>
          <p>
            food app
            <br />
            <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
          </p>
        </aside>
        <nav className='mr-[60px]'>
          <h6 className='footer-title'>Social</h6>
          <div className='grid grid-flow-col gap-4'>
            {socials.map((social, index) => (
              <Link
                target='_blank'
                key={index}
                to={social.path}
                className='text-2xl'
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
