import images from '../../assets/image_assets/images';
import './Header.css';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const Header = ()=>{
    const roleRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(roleRef.current, {
      strings: [
        'Full Stack Developer',
        'Web Developer',
        'UI-UX Designer',
      ],
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
      loop: true,
    });

    // cleanup on component unmount
    return () => {
      typed.destroy();
    };
  }, []);


    return(
        <div className='header'>
            <div className="faded-text">Pro<span>j</span>ects</div>
            <div className="hero-section-left">
                <div className="h-s-h">Hi!! MR. Raju</div>
                <div className="h-s-s-h h-s-h">
                    I am a <span ref={roleRef} className="role"></span>
                </div>
                <div className="h-s-desc">
                    I'm passionate Software Developer to develop many software like a website and design multiple of web pages using mern and other technology 
                </div>
                <div className="btn-grp">
                    <div className="btn-pink" id="btn">HireMe</div>
                    <div className="btn-pink" id='btn'> Resume</div>
                </div>
            </div>
            <div className="hero-section-right">
                <div className="absolute icon-heart">
                    <img src={images.heart} alt="" />
                </div>
                <div className="absolute icon-redstar">
                    <img src={images.redstar} alt="" />
                </div>
                <div className="absolute icon-simplestar">
                    <img src={images.simplestar} alt="" />
                </div>
                <div className="absolute icon-square">
                    <img src={images.square} alt="" />
                </div>
                <div className="user-image">
                    <img src={images.users} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Header;
