'use client'
import Logos from "./Logos.js"
import Projects from "./Projects.js"
import Courses from "./Courses.js"
import { useState, useEffect } from 'react';

export default function Home() {
    return (
        <>
            <title>Home - CaraCodes</title>
            <Shuffle />
            <Logos />
            <Projects />
            <Courses />
        </>
    );
}

function Shuffle() {
    const [index, setIndex] = useState(0)

    const carosel = [
        "Welcome!",
        "Hi, my name is Cara.",
        "I am passionate about public sector web development.",
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => ((prevIndex + 1) % (carosel.length)))
        }, 1500);

        return () => clearInterval(interval);
    }, []);

    function stop() {
        clearInterval(interval);
    }

    return (
        <>
            <h1 id="subtitle" title="Play/Pause" /* onClick={clearInterval(interval)} */>
                {carosel[index]}
                {/* <span id="shuffle">🔀</span>*/}
            </h1>
            <hr />
        </>
    );
}
