import Link from 'next/link'

export default function Nav() {
    return (
        <ul className="nav">
            <li className="typewriter">
                <h1><Link href="/" id="home" title="Home">CaraCodes</Link> </h1>
            </li>
            <div id="nav-left">
                <li><Link href="/resume">Resume</Link></li>
                <li><Link href="/library">Library</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </div>
        </ul>
    )
}
