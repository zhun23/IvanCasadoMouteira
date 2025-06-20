
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function Skills() {
  const skills = [
    { name: 'Java / Spring Boot', level: 90 },
    { name: 'React / JS / HTML / CSS', level: 70 },
    { name: 'MySQL', level: 95 },
    { name: 'Git / GitHub', level: 80 },
    { name: 'Docker / Linux', level: 60 },
  ]

  const { ref, inView } = useInView({
    threshold: 0.3,
  })

  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    setAnimated(inView)
  }, [inView])

  return (
    <section id="skills" ref={ref}>
      <h2>Habilidades</h2>
      {skills.map((skill, index) => (
        <div key={index} className="mb-4">
          <strong>{skill.name}</strong>
          <div
  className="progress"
  style={{ height: '1.5rem', backgroundColor: '#e9ecef' }}
>
  <div
    className="progress-bar"
    role="progressbar"
    style={{
      width: animated ? `${skill.level}%` : '0%',
      transition: 'width 1.2s ease-in-out',
      boxShadow: '0 0 10px rgba(0, 123, 255, 0.5)',
    }}
    aria-valuenow={skill.level}
    aria-valuemin="0"
    aria-valuemax="100"
  >
    {animated ? `${skill.level}%` : ''}
  </div>
</div>
        </div>
      ))}
    </section>
  )
}