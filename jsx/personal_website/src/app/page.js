'use client'
import Logos from "./Logos.js"
import Projects from "./Projects.js"
import Courses from "./Courses.js"
import { useState } from 'react';

export default function Home() {
    return (
        <>
            <Shuffle />
            <Logos />
            <Projects />
            <Courses />
        </>
    );
}

function Shuffle() {
    let [index, setIndex] = useState(0)

    const carosel = [
        "Welcome!",
        "Hi, my name is Cara.",
        "I am passionate about public sector web development.",
        ""
    ]

    function rotateIndex() {
        setIndex(((index + 1) % (carosel.length)))
    }

    return (
        <>
            <h1 id="subtitle">
                {carosel[index]}
                <span id="shuffle" onClick={rotateIndex}>🔀</span>
            </h1>
            <hr />
        </>
    )
}