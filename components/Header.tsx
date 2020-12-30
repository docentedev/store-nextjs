import Link from 'next/link'
import styles from './Header.module.css'

interface HeaderProps {

}

const Header = ({ }: HeaderProps) => {
    return (
        <header className={styles.Header}>
            <Link href="/">IVI Gaming</Link> <a href="https://nextjs.org">Mi Cuenta</a>
        </header>
    )
}

export default Header
