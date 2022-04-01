import type { AppProps } from 'next/app'
import { MDXProvider } from '@mdx-js/react'
import { MyButton } from '../components/button'
import '../styles/global.css'
const components = {
  MyButton,
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Component {...pageProps} />
    </MDXProvider>
  )
}

export default MyApp
