export default function Skills() {
  const skills = [
    { name: 'Basics of Web Development', level: 95 },
    { name: 'Bootstrap and Tailwind', level: 90 },
    { name: 'React.js', level: 85 },
    { name: 'Express.js', level: 80 },
    { name: 'Mongodb', level: 75 },
    { name: 'PHP & SQL', level: 70 },
    { name: 'C & C++', level: 70 },
    { name: 'Basics of Java', level: 70 },
    { name: 'Python', level: 70 },
  ];

  return (
    <section className='skills-section'>
      <h2 className='section-title'>Skills & Technologies</h2>
      <div className='skills-grid'>
        {skills.map((skill, i) => (
          <div key={i} className='skill-card'>
            <div className='skill-top'>
              <span>{skill.name}</span>
              <span>{skill.level}%</span>
            </div>
            <div className='skill-bar'>
              <div
                className='skill-fill'
                style={{ width: `${skill.level}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
