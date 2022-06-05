import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="container mx-auto md:px-8 lg:px-16 xl:px-32">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24">
        <div className="text-center">
          <h1 className="mt-1 text-4xl font-extrabold text-gray-800 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Open Engineering Strategy
          </h1>
        </div>
        <div className="mt-10 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <h2 className="my-2 text-center text-2xl text-gray-700 font-bold">
            Why Open?
          </h2>
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
            Mattis mauris semper sed amet vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra
            tellus varius sit neque erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="#">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
        </div>
      </div>
    </div>
  )
}
