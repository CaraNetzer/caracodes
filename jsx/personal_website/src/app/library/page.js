import Image from 'next/image'

export default function Page() {
  return (
    <>
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
    </>
  )
}