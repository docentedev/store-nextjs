import Link from 'next/link'
import Image from 'next/image'
import styles from './CategoryButton.module.css'

type CategoryType = {
    image: string,
    title: string,
    id: string,
    key: string,
}

interface CategoryButtonProps {
    category: CategoryType
    router: any
}

const CategoryButton = ({ category, router }: CategoryButtonProps) => {
    const { category: categorySelected } = router.query

    const getSelected = () => categorySelected === category.key ? styles.categoryButton__selected : ''

    return (
        <li role="button" className={`${styles.categoryButton} ${getSelected()}`}>
            <Link href={`/?category=${category.key}`}>
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
    )
}

export default CategoryButton
