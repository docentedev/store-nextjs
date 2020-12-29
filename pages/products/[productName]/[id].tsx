import Head from 'next/head'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const { productName } = router.query

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{productName}</h1>
      </main>

      <footer>
        Lo que sea
      </footer>
    </div>
  )
}
