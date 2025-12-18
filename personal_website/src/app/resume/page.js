export default function Resume() {
    return (
        <div className="resume">
            <title>Resume - CaraCodes</title>

            <h1>Resume</h1>

            <Timeline />
            <p className="date">March 2023 - Present </p>
            <div className="work">
                <h2>WV Higher Education Policy Commission</h2>
                <p>Hybrid / Charleston, WV </p>
                <ul>
                    <li>Develop, maintain, and test ASP.NET Web Forms applications with a team using C# and PL/SQL</li>
                    <li>Rearchitected a disparate suite of middleware integrations into one comprehensive application in order to reduce redundancies</li>
                    <li>Spearheaded the introduction of Git version control and continue to anchor its usage on our team</li>
                    <li>Created an automated documentation process and application for project configuration and reference material</li>
                    <li>Extract, clean, and transform data from internal systems to create reports and dashboards</li>
                    <li>Review, analyze, and communicate with users about data submitted via our applications</li>

                </ul>
            </div>

            <Timeline />
            <p className="date">June 2022 - January 2023</p>
            <div className="work">
                <h2>NewForce - Junior Full Stack Developer</h2>
                <p>Remote / Charleston, WV </p>
                <ul>
                    <li>Applied object-oriented programming fundamentals through team-based projects that reflect real world business problems</li>
                    <li>Designed applications through white boarding dependencies and building ERDs</li>
                    <li>Built and interacted with relational databases using SQL Server and ADO.NET</li>
                    <li>Designed and built a Podcast Recommender app in combination with the Spotify API with React using hooks, as well as a video game sprite organizer app using a RESTful Web API with C#/.NET Core, connected to a React front-end</li>
                    <li>Gained experience with ASP.NET, MVC, and Razor templates in Visual Studio 2022, and built and maintained unit tests for a .NET Web API</li>
                    <li>Managed source code version control with Git/GitHub</li>
                    <li>Applied JavaScript, HTML, and CSS fundamentals to build a feature-rich social media dashboard</li>
                    <li>Leveraged native ES6 module bundling to build DRY, reusable components</li>
                </ul>
            </div>

            <Timeline />
            <p className="date">October 2020 - March 2023</p>
            <div className="work">
                <h2>Public Defender Services - Public Defense Resource Specialist</h2>
                <p>Charleston, WV</p>
                <ul>
                    <li>Coordinated website redesign process using SharePoint and custom HTML/CSS, collaborated with a development team, maintained a job board on the finished site</li>
                    <li>Using Google AppSheet, developed a ResourceHub app and restructured/automated the Personnel Change system to streamline personnel updates and subsequent data analysis</li>
                    <li>Analyzed outcomes for and engaged in periodic reevaluation of all programs, including data collection tools, past and future goals, and internal and external reception</li>
                    <li>Collaborated with teams to manage (1) our social work program, (2) programming related to juvenile law, and (3) our annual conference.</li>
                    <li>Assisted in training social workers from around the state in mitigation, promoted the use of social workers among attorneys, supported hired social workers, and analyzed program outcomes using Microsoft Excel and Google Sheets.</li>
                </ul>
            </div>

            <Timeline />
            <p className="date">Fall 2016 - Fall 2019 </p>
            <div className="work">
                <h2>Haverford College - IITS ProDesk Student Worker </h2>
                <p>Haverford, PA </p>
                <ul>
                    <li>Provided students and staff with basic IT troubleshooting assistance.</li>
                    <li>Troubleshooted primarily wi-fi, printer, and user account issues.</li>
                    <li>Balanced phone etiquette with excellent customer service.</li>
                </ul>
            </div>
            <hr/>
        </div>
    )
}

function Timeline() {
    return (
        <svg height="70" width="10" xmlns="http://www.w3.org/2000/svg">
            <line x1="5" y1="5" x2="5" y2="65" style={{stroke:"white",strokeWidth:2}} />
            <circle r="5" cx="5" cy="5" fill="white" />
            <circle r="5" cx="5" cy="65" fill="white" />
        </svg>
    )
}
