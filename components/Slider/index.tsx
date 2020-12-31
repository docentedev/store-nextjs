import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import styles from './index.module.css'

type Image = {
    src: string
}

type Slide = {
    images: Image[]
    name: string
}

interface SliderProps {
    data: Slide
}

const responsive = { "desktop": { "breakpoint": { "max": 3000, "min": 1024 }, "items": 1 }, "mobile": { "breakpoint": { "max": 464, "min": 0 }, "items": 1 }, "tablet": { "breakpoint": { "max": 1024, "min": 200 }, "items": 1 } }

const Slider = ({ data }: SliderProps) => {
    const CustomDot = ({ onMove, index, onClick, active }: any) => {
        // onMove means if dragging or swiping in progress.
        // active is provided by this lib for checking if the item is active or not.
        // {index + 1}
        return (
            <li
                className={active ? "active" : "inactive"}
                onClick={() => onClick()}
            >
                <img src={data.images[index].src} alt={data.name} />
            </li>
        );
    };

    return (
        <div>
            <Carousel
                responsive={responsive}
                additionalTransfrom={0}
                arrows={false}
                autoPlaySpeed={3000}
                centerMode={false}
                className={styles.Slider__Container}
                dotListClass={styles.Slider__DotList}
                draggable
                focusOnSelect={false}
                infinite
                itemClass={styles.Slider__Item}
                keyBoardControl
                minimumTouchDrag={80}
                renderButtonGroupOutside={false}
                renderDotsOutside={false}
                showDots
                sliderClass={styles.Slider__Class}
                slidesToSlide={1}
                swipeable
                customDot={<CustomDot />}
            >
                {data.images.map((image: Image, i: number) => (
                    <div key={i}>
                        <img
                            src={image.src}
                            alt={data.name}
                        />
                    </div>
                ))}
            </Carousel>
        </div>

    )
}

export default Slider
