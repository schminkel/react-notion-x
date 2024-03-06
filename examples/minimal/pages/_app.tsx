import * as React from 'react'

// core styles shared by all of react-notion-x (required)
import '@schminkel/react-notion-x/src/styles.css'

import '../styles/globals.css'

// used for code syntax highlighting (optional)
// import 'prismjs/themes/prism-tomorrow.css'

// used for rendering equations (optional)
// import 'katex/dist/katex.min.css'

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
