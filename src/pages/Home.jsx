import { Link } from 'react-router-dom';
import image from '../assets/hero-pfp.jpg';

export default function Home() {
  return (
    <section className='home-cont'>
      {/* Profile Image */}
      <div className='home-img'>
        <img src={image} alt='Sahej profile' />
      </div>

      {/* Home Text Content */}
      <div className='home-text'>
        <p>Hello, I'm</p>
        <h1>Prabhjot Singh</h1>
        <h2>
          And I'm a <span className='highlight'>Full Stack Developer!</span>
        </h2>
        <p>
          A passionate <strong>Computer Science student</strong> who builds
          intuitive UIs, scalable backends, and enjoys solving real-world tech
          problems. Let’s create something awesome together.
        </p>

        {/* Call-to-Action Buttons */}
        <div className='home-buttons'>
          <Link to='/projects' className='btn-1'>
            View Projects
          </Link>
          <Link to='/contact' className='btn-2'>
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}
