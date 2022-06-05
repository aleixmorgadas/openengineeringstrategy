export default function Subtitle(props) {
  return (
    <h2 className="my-2 text-center text-2xl text-gray-700 font-bold">
      {props.children}
    </h2>
  )
}