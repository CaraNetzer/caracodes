import Nav from "./Nav.js"
import Logos from "./Logos.js"
import Projects from "./Projects.js"
import Courses from "./Courses.js"
import Link from 'next/link'

export default function Home() {
    return (
        <>
            <div id="grid-container">
                <Nav />
                <div id="main-content">
                    <h1 id="subtitle">
                        [Placeholder text. Hi, my name is Cara. I am passionate about public sector web development.
                        <span id="shuffle">🔀</span>]
                    </h1>
                    <hr />
                    <h1>Tech Stack</h1>
                    <Logos />
                    <hr />
                    <h1>Portfolio</h1>
                    <Projects />
                    <hr />
                    <h1>Education</h1>
                    <Courses />
                    <hr />
                </div>
                <div id="foot">
                    <p><Link href="inspiration">Inspiration</Link></p>
                    <p>© Cara 2025</p>
                </div>
            </div>
        </>
    );
}
