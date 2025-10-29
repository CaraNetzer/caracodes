'use client'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

// export default function Nav() {
//     return (
//         <ul id="nav" className="nav topnav">
//             <li className="typewriter">
//                 <h1><Link href="/" id="home" title="Home">CaraCodes</Link> </h1>
//             </li>
//             <div id="nav-left">
//                 <li><Link href="/resume">Resume</Link></li>
//                 <li><Link href="/library">Library</Link></li>
//                 <li><Link href="/blog">Blog</Link></li>
//             </div>
//         </ul>
//     )
// }

export default function Nav() {
    const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };

    const hideNavbar = () => {
        setShowNavbar(false);
    };

    return (
        <nav className="nav">
            <div className="typewriter">
                <h1 onClick={hideNavbar}><Link href="/" id="home" title="Home">CaraCodes</Link></h1>
            </div>
            <div className={`nav-elements  ${showNavbar && "active"}`}>
                <ul id="nav-left" className="nav topnav">
                    <li onClick={hideNavbar}><Link href="/resume">Resume</Link></li>
                    <li onClick={hideNavbar}><Link href="/library">Library</Link></li>
                    <li onClick={hideNavbar}><Link href="/blog">Blog</Link></li>
                </ul>
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
                <FontAwesomeIcon icon={faBars} />
            </div>
        </nav>
    );
};
