import useSwr from 'swr'
import Head from 'next/head'
import Carousel from 'react-multi-carousel'
import { useRouter } from 'next/router'
import 'react-multi-carousel/lib/styles.css'
import styles from './Detail.module.css'
import Header from '../../../components/Header'
import Products from '../../../components/Products'
import IconBag from '../../../components/icons/IconBag'
import React from 'react'
import { ContextOne } from '../../../cart/context'

const responsive = { "desktop": { "breakpoint": { "max": 3000, "min": 1024 }, "items": 1 }, "mobile": { "breakpoint": { "max": 464, "min": 0 }, "items": 1 }, "tablet": { "breakpoint": { "max": 1024, "min": 200 }, "items": 1 } }
const fetcher = (url) => fetch(url).then((res) => res.json())
const Detail = () => {

  const router = useRouter()
  const { data, error } = useSwr(router.query.id ? `/api/products/${router.query.id}` : null, fetcher)
  const { data: dataProducts, error: errorProducts } = useSwr(router.query.id ? '/api/products' : null, fetcher)

  if (!data) return <div>Loading...</div>

  const CustomDot = ({ onMove, index, onClick, active }: any) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    // {index + 1}
    return (
      <li
        className={active ? "active" : "inactive"}
        onClick={() => onClick()}
      >
        <img src={data.images[index]} alt={data.title} />
      </li>
    );
  };

  const { addProduct, removeProduct } = React.useContext(ContextOne);

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
        <title>IVI Gaming | Producto: {data.title}</title>
      </Head>
      <Header />
      <div className="container--product-detail">
        <main className={styles.Detail}>
          <div className={styles.Detail__Container}>
            <div>
              <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className=""
                dotListClass=""
                draggable
                focusOnSelect={false}
                infinite
                itemClass=""
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                showDots
                sliderClass=""
                slidesToSlide={1}
                swipeable
                customDot={<CustomDot />}
              >
                {data.images.map((image: string, i: number) => (
                  <div key={i}>
                    <img
                      src={image}
                      alt={data.title}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
            <div>
              <h1>{data.title}</h1>
              <div className={styles.Detail__Container__price}>
                <strong>{data.formatPrice}</strong>
                {data.formatPreviousPrice && <span>{data.formatPreviousPrice}</span>}
              </div>
              <div className={styles.Detail__Container__Description}>
                <div dangerouslySetInnerHTML={{ __html: data.description }} />
              </div>
              <div className={styles.Detail__Actions}>
                <div>
                  <button onClick={handlerAddProduct} className={styles.Detail__Actions__Button}>
                    <IconBag />
                    Agregar al carrito</button>
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


export default Detail