export default function Paragraph(props) {
  return (
    <p className={`text-center ${props.className}`}>{props.children}</p>
  )
}