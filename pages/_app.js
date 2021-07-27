import '../styles/globals.css'

import Header from '../components/header'

function MyApp({ Component, pageProps }) {
  return (
    <div className="mt-8">
      <Header/>
      <main className="mt-8">
        <Component {...pageProps} />
      </main>
    </div>
  )
}

export default MyApp
