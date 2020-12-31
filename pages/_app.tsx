import { ContextOneProvider } from '../cart/context'
import Cart from '../components/Cart'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <ContextOneProvider>
      <Component {...pageProps} />
      <Cart />
    </ContextOneProvider>
  )
}

export default MyApp
