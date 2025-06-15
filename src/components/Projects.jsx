import portfolioImg from '../assets/project1.jpg';
import taskImg from '../assets/project2.jpg';
import weatherImg from '../assets/hero-pfp.jpg';

export default function Projects() {
  const projectData = [
    {
      title: 'Academia Website',
      image: portfolioImg,
      description:
        'A dynamic academic portal built using PHP and SQL to manage courses, student records, results, and faculty interactions for educational institutions.',
      tech: ['PHP', 'SQL'],
    },
    {
      title: 'Tourism Website',
      image: taskImg,
      description:
        'A sleek and responsive travel website built with React, offering users curated destination guides, booking forms, and interactive galleries.',
      tech: ['React'],
    },
    {
      title: 'Game Launcher',
      image: weatherImg,
      description:
        'A desktop-based Java application that allows users to launch, manage, and update their games from one unified interface.',
      tech: ['Java'],
    },
  ];

  return (
    <section className='projects-section'>
      <h1>My Projects</h1>
      <div className='projects-grid'>
        {projectData.map((project, index) => (
          <div key={index} className='project-card'>
            <img
              src={project.image}
              alt={project.title}
              className='project-img'
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className='tech-stack'>
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
