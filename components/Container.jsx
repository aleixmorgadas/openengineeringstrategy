export default function Container(props) {
  return (
    <div className="container mx-auto md:px-8 lg:px-16 xl:px-32 max-w-7xl mx-auto py-16 px-4 sm:py-24">
      {props.children}
    </div>
  )
}