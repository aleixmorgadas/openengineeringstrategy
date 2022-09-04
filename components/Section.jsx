export default function Section(props) {
  return (
    <div className="mt-8 prose prose-orange prose-lg text-gray-500 mx-auto">
      {props.children}
    </div>
  )
}