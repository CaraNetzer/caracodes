import projectsJson from './data/projects.json'
import Image from 'next/image'

export default function Projects() {

    let projects = [...projectsJson].map(project =>
        <Project key={project.id} id={project.id} title={project.title} date={project.date}
            link={project.link} altText={project.altText} thumbnailPath={project.thumbnailPath} />
    )

    return (
        <>
            <h1>Portfolio</h1>
            <div className="portfolio">
                {projects}
            </div>
            <hr />
        </>
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
                <img alt={altText} src={thumbnailPath}/>
            </a>
        </div>
    )
}
