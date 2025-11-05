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
    const [show, setShow] = useState(0);

    const carosel = [
        "Welcome!",
        "Hi, my name is Cara.",
        "I am passionate about public sector web development.",
    ]

    useEffect(() => {
        const caroselInner = carosel
        const interval = setInterval(() => {
            setIndex((prevIndex) => ((prevIndex + 1) % (caroselInner.length)))
        }, 1750);

        return () => clearInterval(interval);
    }, []);


    useEffect(() => {
        const caroselInner = carosel
        console.log(carosel.length)
      let timer = setTimeout(() => setShow(true), caroselInner.length * 1750);

      return () => {
        clearTimeout(timer);
      };
    }, []);

    return (
        <>
            <h1 id="subtitle">
                {/*show ? carosel.join(" ") : carosel[index]*/}
                {carosel.join(" ")}
                {/* <span id="shuffle">🔀</span>*/}
            </h1>
            <hr />
        </>
    );
}
