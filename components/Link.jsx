export default function Link(props) {
  return (
    <span className="text-indigo-400 hover:cursor-pointer">
      <a href={props.href} target="_blank" rel="noreferrer">{props.children}</a>
    </span>
  )
}