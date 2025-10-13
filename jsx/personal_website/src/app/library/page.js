import Image from 'next/image'

export default function Page() {
    return (
        <>
            <title>Library - CaraCodes</title>
            <h1>Library</h1>
            <p>A list of books that have contributed to my skill stack</p>
            <div className="library">
                <div className="book">
                    <img src="/csharpcookbook.jpg" alt="csharp cookbook book cover" />
                    <p>C# Cookbook - Completed</p>
                </div>
                <div className="book">
                    <img src="/nand2tetris.jpg" alt="nand2tetris book cover" />
                    <p>Nand2Tetris - Completed</p>
                </div>
                <div className="book">
                    <img src="/eloquentjavascript.jpg" alt="eloquent javascript book cover" />
                    <p>Eloquent Javascript - Completed</p>
                </div>
                <div className="book">
                    <img src="/softwarearchitecturepatterns.jpg" alt="software architecture patterns book cover" />
                    <p>Software Architecture Patterns - Completed</p>
                </div>
                <div className="book">
                    <img src="/technicalwritingforsoftwaredevelopers.jpg" alt="technical writing for software developers book cover" />
                    <p>Technical Writing for Software Developers - Completed</p>
                </div>
            </div>
        </>
    )
}
