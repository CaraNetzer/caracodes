import svgs from './data/svgs.json'

export default function Logos() {
  let logos = svgs.map(svg => <Logo label={svg.label} key={svg.id} file={svg.file} /> )
  // let logos = <Logo label={svgs[0].label} id={svgs[0].id} file={svgs[0].file} />
  return (
    <div id="svg-logos">
      {logos}
    </div>
  )
}

function Logo({ label, key, file }) {
  return (
    <div className="logo" id={key}>
      <svg type="image/svg+xml" data={`./data/${file}`} />
      <span>{label}</span>
    </div>
  )
}