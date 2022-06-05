import Head from "next/head"
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<div className='bg-gray-100 min-h-screen'>
      <Head>
        <title>Open Engineering Strategy</title>
        <meta property="og:title" content="Open Engineering Strategy" key="title" />
        <meta property="og:locale" content="en_US" key="locale" />
        <meta property="og:type" content="article" key="type" />
        <meta property="og:description" content="Open Engineering Strategy Movement" key="description" />
        <meta property="og:url" content="https://openengineeringstrategy.com/" key="url" />
        <meta property="og:site_name" content="Open Engineering Strategy" key="site_name" />
        <meta property="og:image" content="https://openengineeringstrategy.com/og.png" key="image" />
        <meta property="og:image:width" content="1200" key="image_width"/>
        <meta property="og:image:height" content="630" key="image_height" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:image:alt" content="Open Engineering Strategy" key="alt_image" />
        <meta property="twitter:title"  content="Open Engineering Strategy" key="twitter_title" />
        <meta property="twitter:description" content="Open Engineering Strategy Movement" key="twitter_description"/>
        <meta property="twitter:image" content="https://openengineeringstrategy.com/og.png" key="twitter_image"/>

      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
