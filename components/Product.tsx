import Link from 'next/link'
import React from 'react'
import { ContextOne } from "../cart/context";
import IconPlus from './icons/IconPlus'
import { currencyFormat, calculateDiscount } from '../frontend/utils'

import styles from './Product.module.css'

type ProductType = {
    images: any[],
    name: string,
    id: string,
    price: string,
    regular_price?: string,
}


interface ProductProps {
    product: ProductType
}

const Product = ({ product }: ProductProps) => {
    const { addProduct, removeProduct, getProduct } = React.useContext(ContextOne);

    const handlerAddProduct = (e) => {
        e.preventDefault()
        addProduct(product)
    }
    const handlerRemoveProduct = (e) => {
        e.preventDefault()
        removeProduct(product.id)
    }

    return (
        <Link href="/products/[tittle]/[id]" as={`/products/${encodeURIComponent(product.name)}/${product.id}`}>
            <a className={styles.productCard}>
                <article>
                    <div className={styles.productCard__image}>
                        <img
                            src={product.images[0].src}
                            alt={product.name}
                        />
                        {product.price && product.regular_price && (
                            <div className={styles.productCard__discount}>{calculateDiscount(product.regular_price, product.price)}</div>
                        )}
                    </div>
                    <div className={styles.productCard__info}>
                        <h2>{product.name}</h2>
                        <div className={styles.productCard__info__price}>
                            <div>
                                <p>{currencyFormat(product.price)}</p>
                                {product.regular_price && (
                                    <span>{currencyFormat(product.regular_price)}</span>
                                )}
                            </div>
                            {getProduct(product.id) ? (
                                <div className={styles.Product__Actions__Counter}>
                                    <button onClick={handlerRemoveProduct}>
                                        -
                                    </button>
                                    <div>{getProduct(product.id).quantity}</div>
                                    <button onClick={handlerAddProduct}>
                                        <IconPlus />
                                    </button>
                                </div>
                            ) : (
                                    <button onClick={handlerAddProduct}>
                                        <IconPlus />
                                    </button>
                                )}
                        </div>
                    </div>
                </article>
            </a>
        </Link>
    )
}

export default Product
