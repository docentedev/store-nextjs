import Product from './Product'
import styles from './Products.module.css'

interface ProductsProps {
    products: any[],
    type?: 'related',
}

const Products = ({ products, type }: ProductsProps) => {
    return (
        <section className={`${styles.Products} ${type ? styles.Products_Related : ''}`}>
            {!products ? (<div>Loading Products...</div>) : products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </section>
    )
}

export default Products
