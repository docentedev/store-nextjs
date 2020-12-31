import React from 'react'
import styles from '../styles/Home.module.css'
import CategoryButton from '../components/CategoryButton'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import Products from '../components/Products'

export default function Home({ dataCategories, dataProducts }) {

  const router = useRouter()

  return (
    <div>
      <Head>
        <title>IVI Gaming | Home</title>
      </Head>
      <Header />
      <div className="container">
        <div style={{ display: 'none' }}>a</div>
        <div className={styles.container__categorySide}>
          <aside>
            <ul>
              {dataCategories.map((category) => (
                <CategoryButton router={router} key={category.id} category={category} />
              ))}
            </ul>
          </aside>
        </div>
        <main className={styles.main}>
          <Products products={dataProducts} />
        </main>
      </div>
      <footer></footer>
    </div >
  )
}

export async function getServerSideProps({ query }) {
  // Fetch data from external API
  const resProduct = await fetch(`${process.env.NEXT_API_SELF_HOST}/api/products`)
  const dataProducts = await resProduct.json()
  console.log(dataProducts);
  

  const res = await fetch(`${process.env.NEXT_API_SELF_HOST}/api/categories`)
  const dataCategories = await res.json()
  // Pass data to the page via props
  return { props: { dataCategories, dataProducts } }
}