import Link from 'next/link'
import styles from './Header.module.css'
import IconSearch from "./icons/IconSearch";

interface HeaderProps {

}

const Header = ({ }: HeaderProps) => {
    return (
        <header className={styles.Header}>
            <button className={styles.Header__ButtonMenu}>
                <span />
                <span />
                <span />
            </button>
            <div className={styles.Header__LogoSide}>
                <Link href="/">
                    <img src="/logoweb.png" />
                </Link>
            </div>
            <form className={styles.SearchForm}>
                <IconSearch />
                <input placeholder="Busque sus productos desde aquí" />
            </form>
            <div className={styles.Header__AccountSide}>
                <a className={styles.Header__AccountSide__ButtonAccount} href="https://nextjs.org">Mi Cuenta</a>
            </div>
        </header>
    )
}

export default Header
