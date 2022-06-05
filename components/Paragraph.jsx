export default function Paragraph(props) {
  return (
    <p className={`mt-3 text-center ${props.className}`}>{props.children}</p>
  )
}