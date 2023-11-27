import styles from './style/HomeImgs.module.scss'


const HomeImgs = () => {




    return (

        <main className={styles.gallery}>
            <div className={styles.gallery__left}>
                <img data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.gallery__item} src="/imgs/imgsgames/1.jpg" alt="" />
                <img data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.gallery__item} src="/imgs/imgsgames/2.jpeg" alt="" />
                <img data-aos="flip-right"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.gallery__item} src="/imgs/imgsgames/3.jpg" alt="" />
            </div>
            <div className={styles.gallery__right}>
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.gallery__item} src="/imgs/imgsgames/4.jpg" alt="" />
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.gallery__item} src="/imgs/imgsgames/5.jpg" alt="" />
                <img data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className={styles.gallery__item} src="/imgs/imgsgames/6.jpg" alt="" />
            </div>

        </main>


    );
}

export default HomeImgs;