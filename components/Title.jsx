export default function Title(props) {
  return (
    <div className="text-center">
      <h1 className="mt-1 text-4xl font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
        {props.children}
      </h1>
    </div>
  )
}