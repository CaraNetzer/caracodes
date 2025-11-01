import Image from 'next/image'

export default function Page() {
    return (
        <>
            <title>Library - CaraCodes</title>
            <h1>Library</h1>
            <p id="library-label">A list of books that have contributed to my work and career</p>
            <div className="library">
                <div className="book">
                    <img src="/csharpcookbook.jpg" alt="csharp cookbook book cover" />
                    <p><b>C# Cookbook</b><br/>Completed 2023</p>
                </div>
                <div className="book">
                    <img src="/nand2tetris.jpg" alt="nand2tetris book cover" />
                    <p><b>Nand2Tetris</b><br/>Completed 2023-2024</p>
                </div>
                <div className="book">
                    <img src="/eloquentjavascript.jpg" alt="eloquent javascript book cover" />
                    <p><b>Eloquent Javascript</b><br/>Completed 2024</p>
                </div>
                <div className="book">
                    <img src="/softwarearchitecturepatterns.jpg" alt="software architecture patterns book cover" />
                    <p><b>Software Architecture Patterns</b><br/>Completed 2025</p>
                </div>
                <div className="book">
                    <img src="/technicalwritingforsoftwaredevelopers.jpg" alt="technical writing for software developers book cover" />
                    <p><b>Technical Writing for Software Developers</b><br/>Completed 2025</p>
                </div>
            </div>
        </>
    )
}
