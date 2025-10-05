import projectsJson from './data/projects.json'
import Image from 'next/image'

export default function Projects() {

  let projects = [...projectsJson].map(project =>
    <Project key={project.id} id={project.id} title={project.title} date={project.date}
      link={project.link} altText={project.altText} thumbnailPath={project.thumbnailPath} />
  )

  return (
    <div className="portfolio">
      {projects}
    </div>
  )
}

function Project({ id, title, date, altText, thumbnailPath, link }) {
  return (
    <div className={`project project${id}`}>
      {title}
      <br />
      {date}
      <br />
      <a href={link} target="_blank">
        <Image alt={altText} src={thumbnailPath} width="50" height="50" />
      </a>
    </div>
  )
}