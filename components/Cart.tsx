import React from "react";
import { ContextOne } from "../cart/context";
import IconCart from "./icons/IconCart";
import IconClose from "./icons/IconClose";
import styles from './Cart.module.css'

const Cart = () => {
    const [min, setMin] = React.useState(true);
    const { state }: any = React.useContext(ContextOne);
    const getTotal = () => state.products.reduce((prev, c) => prev + (c.product.price * c.quantity), 0)
    const getTotalQuantity = () => state.products.reduce((prev, c) => prev + c.quantity, 0)
    const getTotalProducts = () => {
        const l = state.products.length;
        return l === 1 ? `${l} Producto` : `${l} Productos`
    }
    return min ? (
        <aside className={styles.CartMin} onClick={() => setMin(false)}>
            <div>
                <IconCart /> <span>{getTotalProducts()}</span>
            </div>
            <span>${new Intl.NumberFormat("es-CL").format(getTotal())}</span>
        </aside>
    ) : (
            <aside className={styles.Cart}>
                <header>
                    <div>
                        <IconCart /> <span>{getTotalProducts()}</span>
                    </div>
                    <button onClick={() => setMin(true)}><IconClose /></button>
                </header>
                <section className={styles.Card__Scrollbar}>
                    {state.products.map((p) => (
                        <article className={styles.Cart__Product} key={p.id}>
                            <div>{p.quantity}</div>
                            <div>
                                <img
                                    src={p.product.image}
                                    alt={p.product.title}
                                />
                            </div>
                            <div className={styles.Cart__Detail}>
                                <h2>{p.product.title}</h2>
                                <strong>{p.product.formatPrice}</strong>
                                <span>{p.quantity} X 1 pc(s)</span>
                            </div>
                            <div>
                                ${new Intl.NumberFormat("es-CL").format(p.product.price * p.quantity)}
                            </div>
                        </article>
                    ))}
                </section>
                <button className={styles.Cart__Checkout}>
                    <div>Ir al carrito</div>
                    <span>${new Intl.NumberFormat("es-CL").format(getTotal())}</span>
                </button>
            </aside>
        )
}

export default Cart
