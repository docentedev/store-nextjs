import Link from 'next/link'
import React from 'react'
import { ContextOne } from "../cart/context";
import IconPlus from './icons/IconPlus'

import styles from './Product.module.css'

type ProductType = {
    image: string,
    title: string,
    id: string,
    formatPrice: string,
    formatPreviousPrice?: string,
    discount?: string,
}


interface ProductProps {
    product: ProductType
}

const Product = ({ product }: ProductProps) => {
    const { addProduct, removeProduct } = React.useContext(ContextOne);

    const handlerAddProduct = (e) => {
        e.preventDefault()
        addProduct(product)
    }
    const handlerRemoveProduct = (e) => {
        e.preventDefault()
        removeProduct(product.id)
    }

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
                                <p>{product.formatPrice}</p>
                                {product.formatPreviousPrice && (
                                    <span>{product.formatPreviousPrice}</span>
                                )}
                            </div>
                            <button onClick={handlerRemoveProduct}>
                                -
                            </button>
                            <button onClick={handlerAddProduct}>
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
