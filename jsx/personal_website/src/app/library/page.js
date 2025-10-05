import Nav from "../Nav.js"
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <div id="grid-container">
        <Nav />
        <div id="main-content">
          <h1>Library</h1>
          <p>A list of books that have contributed to my skill stack</p>
          <div className="library">
            <div className="book">
              <Image src="/csharpcookbook.jpg" alt="" width="50" height="50" />
              <p>C# Cookbook - Completed</p>
            </div>
            <div className="book">
              <Image src="/nand2tetris.jpg" alt="" width="50" height="50" />
              <p>Nand2Tetris - Completed</p>
            </div>
            <div className="book">
              <Image src="/eloquentjavascript.jpg" alt="" width="50" height="50" />
              <p>Eloquent Javascript - Completed</p>
            </div>
            <div className="book">
              <Image src="/softwarearchitecturepatterns.jpg" alt="" width="50" height="50" />
              <p>Software Architecture Patterns - Completed</p>
            </div>
            <div className="book">
              <Image src="/technicalwritingforsoftwaredevelopers.jpg" alt="" width="50" height="50" />
              <p>Technical Writing for Software Developers - In Progress</p>
            </div>
          </div>
        </div>
        <div id="foot">
          <p><Link href="inspiration">Inspiration</Link></p>
          <p>© Cara 2025</p>
        </div>
      </div>
    </>
  )
}