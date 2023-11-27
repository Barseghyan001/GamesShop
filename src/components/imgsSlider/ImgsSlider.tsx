import styles from './style/ImgsSlider.module.scss'
import { imgsSlide } from './utils/imgsslide';
import {useState} from 'react'
const ImgsSlider = () => {
    const [index,setIndex] = useState(0)

    
   
    const imgsSelector = imgsSlide.map((item,index) => (
        <li onClick={() => setIndex(index)} className='cursor-pointer' key={item}>
            <img  src={item} alt="bgimg" />

        </li>
    ))
    return (
        <div style={{backgroundImage:`url(${imgsSlide[index]})`}} className={styles.bgImg}>
            <ul className='flex items-center justify-center gap-1 flex-col list-none p-2'>
                {imgsSelector}
            </ul>
        </div>
    );
}

export default ImgsSlider;