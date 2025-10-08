import svgs from './data/svgs.json'

export default function Logos() {
    let logos = svgs.map(svg => <Logo label={svg.label} key={svg.id} sprite={svg.sprite} />)
    return (
        <>
            <h1>Tech Stack</h1>
            <div id="svg-logos">
                {logos}
            </div>
            <hr />
        </>
    )
}

function Logo({ label, id, sprite }) {
    return (
        <div className="logo" id={id}>
            <svg>
                <use href={`/allLogos.svg#${sprite}`} />
            </svg>
            <span>{label}</span>
        </div>
    )
}
