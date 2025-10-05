import coursesJson from './data/courses.json'

export default function Courses() {
  let courses = [...coursesJson].map(course =>
    <Course key={course.id} id={course.id} title={course.title} school={course.school} timeframe={course.timeframe} />
  )
  return (
    <>
      <h3>NewForce - June 2022 - January 2023</h3>
      <p>
        Intensive full-time 6-month software development immersive training program
        focusing on full stack (C#/.NET) development fundamentals and problem solving.
        The final half of the program is executed in a simulated company environment with
        Scrum methodology. In Partnership with Mountwest Community Community &amp;
        Technical College (completed 75 CEUs).
      </p>
      <h3> Haverford College - Class of 2020</h3>
      <p>B.A., Major in Sociology (Bryn Mawr College)</p>

      <h2>Relevant Coursework</h2>
      <div className="courses">
        {courses}
      </div>
    </>
  )
}

function Course({id, title, school, timeframe}) {
  return (
    <div className={`course course${id}`}>
      <div>
        <b>{title}</b>
      </div>
      <div>
        {school} <br /> {timeframe}
      </div>
    </div>
  )
}