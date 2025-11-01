import icons from './data/svgs.json'

export default function Logos() {
    let logos = icons.map(icon => <Logo label={icon.label} key={icon.id} icon={icon.icon} />)
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

function Logo({ label, id, icon }) {
    return (
        <div className="logo" id={id}>
            <img src={`/icons8-${icon}-48.png`} alt={`${label} logo`} />
            <span>{label}</span>
        </div>
    )
}
