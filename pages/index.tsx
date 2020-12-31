import React from 'react'
import useSwr from 'swr'
import styles from '../styles/Home.module.css'
import CategoryButton from '../components/CategoryButton'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Header from '../components/Header'
import Products from '../components/Products'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  const router = useRouter()

  const { data: dataProducts, error: errorProducts } = useSwr('/api/products', fetcher)
  const { data: dataCategories, error: errorCategories } = useSwr('/api/categories', fetcher)


  if (errorProducts) return <div>Failed to load products</div>
  if (errorCategories) return <div>Failed to load categories</div>
  if (!dataCategories) return <div>Loading...</div>

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
