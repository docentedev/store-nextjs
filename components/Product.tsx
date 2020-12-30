import Link from 'next/link'
import IconPlus from './icons/IconPlus'

import styles from './Product.module.css'

type ProductType = {
    image: string,
    title: string,
    id: string,
    price: string,
    previousPrice?: string,
    discount?: string,
}


interface ProductProps {
    product: ProductType
}

const Product = ({ product }: ProductProps) => {
    return (
        <Link href="/products/[tittle]/[id]" as={`/products/${product.title}/${product.id}`}>
            <a className={styles.productCard}>
                <article>
                    <div className={styles.productCard__image}>
                        <img
                            src={product.image}
                            alt={product.title}
                        />
                        {product.discount && (
                            <div className={styles.productCard__discount}>{product.discount}</div>
                        )}
                    </div>
                    <div className={styles.productCard__info}>
                        <h2>{product.title}</h2>
                        <div className={styles.productCard__info__price}>
                            <div>
                                <p>{product.price}</p>
                                {product.previousPrice && (
                                    <span>{product.previousPrice}</span>
                                )}
                            </div>
                            <button>
                                <IconPlus />
                            </button>
                        </div>
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default Product
