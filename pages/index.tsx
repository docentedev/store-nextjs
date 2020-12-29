import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import useSwr from 'swr'
import styles from '../styles/Home.module.css'

const fetcher = (url) => fetch(url).then((res) => res.json())

export default function Home() {

  const { data, error } = useSwr('/api/products', fetcher)
  const { data: dataCategories, error: errorCategories } = useSwr('/api/categories', fetcher)

  if (error) return <div>Failed to load products</div>
  if (!data) return <div>Loading...</div>

  if (errorCategories) return <div>Failed to load categories</div>
  if (!dataCategories) return <div>Loading...</div>

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Description" content="Author: A.N. Author,
    Illustrator: P. Picture, Category: Books, Price: $17.99,
    Length: 784 pages"></meta>
      </Head>

      <header className={styles.header}>
        IVI Gaming <a href="https://nextjs.org">Mi Cuenta</a>
      </header>

      <div className={styles.container}>
        <div style={{ display: 'none' }}>a</div>
        <div className={styles.container__categorySide}>
          <aside>
            <ul>
              {dataCategories.map((category) => (
                <li key={category.id} role="button">
                  <Link href={category.query}>
                    <a>
                      <div>
                        <Image
                          src={category.image}
                          alt={category.title}
                          width={500}
                          height={500}
                        />
                      </div>
                      <p>{category.title}</p>
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
        <main className={styles.main}>
          <section className={styles.products}>
            {data.map((product) => (
              <Link key={product.id} href="/products/[tittle]/[id]" as={`/products/${product.title}/${product.id}`}>
                <a className={styles.products__productCard}>
                  <article>
                    <div className={styles.products__productCard__image}>
                      <img
                        src={product.image}
                        alt={product.title}
                        width={'auto'}
                        height={'auto'}
                      />
                    </div>
                    <div className={styles.products__productCard__info}>
                      <h2>{product.title}</h2>
                      <div className={styles.products__productCard__info__price}>
                        <p>{product.price}</p>
                        <button>
                          <Image
                            src='/svgs/pluss.svg'
                            alt="Pluss Icon"
                            width={5}
                            height={5}
                          />
                        </button>
                      </div>
                    </div>
                  </article>
                </a>
              </Link>
            ))}
          </section>
        </main>
      </div>
      <footer>
        Footer
      </footer>
    </div >
  )
}
