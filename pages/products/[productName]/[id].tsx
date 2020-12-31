import useSwr from 'swr'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Error from 'next/error'
import styles from './Detail.module.css'
import Header from '../../../components/Header'
import Products from '../../../components/Products'
import IconBag from '../../../components/icons/IconBag'
import React from 'react'
import { ContextOne } from '../../../cart/context'
import IconAdd from '../../../components/icons/IconAdd'
import IconRemove from '../../../components/icons/iconRemove'
import Slider from '../../../components/Slider'
import { currencyFormat, calculateDiscount } from '../../../frontend/utils'

const fetcher = (url) => fetch(url).then((res) => res.json())

const Detail = ({ data, errorCode }) => {
  if (errorCode) {
    return <Error statusCode={errorCode} />
  }
  const router = useRouter()

  const { data: dataProducts, error: errorProducts } = useSwr(router.query.id ? `/api/products?include=${data.related_ids[0]}` : null, fetcher)

  if (!data) return <div>Loading...</div>

  const { getProduct, addProduct, removeProduct } = React.useContext(ContextOne);

  const handlerAddProduct = (e) => {
    e.preventDefault()
    addProduct(data)
  }
  const handlerRemoveProduct = (e) => {
    e.preventDefault()
    removeProduct(data.id)
  }

  return (
    <div>
      <Head>
        <title>IVI Gaming | Producto: {data.name}</title>
      </Head>
      <Header />
      <div className="container--product-detail">
        <main className={styles.Detail}>
          <div className={styles.Detail__Container}>
            <Slider data={data} />
            <div>
              <h1>{data.name}</h1>
              <div className={styles.Detail__Container__price}>
                <strong>{currencyFormat(data.price)}</strong>
                {data.regular_price && <span>{currencyFormat(data.regular_price)}</span>}
              </div>
              <div className={styles.Detail__Container__Description}>
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              </div>
              <div className={styles.Detail__Actions}>
                <div>
                  {getProduct(data.id) ? (
                    <div className={styles.Detail__Actions__Counter}>
                      <button onClick={handlerRemoveProduct} className="counterstyle__CounterButton-sc-8iu0h2-1 hQDaWZ control-button">
                        <IconRemove />
                      </button>
                      <span className="counterstyle__CounterValue-sc-8iu0h2-2 fWCkFI">{getProduct(data.id).quantity}</span>
                      <button onClick={handlerAddProduct}>
                        <IconAdd />
                      </button>
                    </div>
                  ) : (
                      <button onClick={handlerAddProduct} className={styles.Detail__Actions__Button}>
                        <IconBag />
                      Agregar al carrito</button>
                    )}
                </div>
              </div>
            </div>
          </div>
          <section className={styles.Detail__Container__Related}>
            <h1>Productos Relacionados</h1>
            <Products products={dataProducts} type="related" />
          </section>
        </main>
        <footer></footer>
      </div>
    </div>
  )
}

export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const r = await fetch(`${process.env.NEXT_API_SELF_HOST}/api/products/${params.id}`)
  let resp = { props: { data: {}, errorCode: 0 } }
  try {
    const data = await r.json()
    resp.props.data = data
  } catch (_) {
    resp.props.errorCode = 404
  }
  // Pass data to the page via props
  return resp
}

export default Detail