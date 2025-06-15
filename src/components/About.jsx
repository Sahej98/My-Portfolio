import image from '../assets/hero-pfp.jpg';

export default function About() {
  return (
    <section className='about-cont'>
      <div className='about-text'>
        <h1>About Me</h1>
        <h2>Full Stack Developer</h2>
        <p>
          I'm Prabhjot Singh, a Computer Science student with a passion for
          building impactful digital experiences. As a self-taught full-stack
          developer, I specialize in crafting intuitive frontends with React and
          building scalable backends with Node.js and Express. I love solving
          real-world problems with code and continuously pushing my boundaries
          through hands-on projects. Whether it's creating responsive web
          applications, optimizing performance, or learning new technologies —
          I'm always excited to grow and innovate. Currently, I'm seeking
          opportunities to collaborate, intern, or contribute to meaningful tech
          projects. Outside of coding, I enjoy gaming, exploring tech trends,
          and diving into manhua or story-rich games that fuel my creativity.
        </p>

        <div className='about-buttons'>
          <button>Resume</button>
        </div>
      </div>

      <div className='about-img'>
        <img src={image} alt='Sahej profile' />
      </div>
    </section>
  );
}
