import { memo } from 'react';
import styles from './style/Jostick.module.scss'

const Jostick = () => {
    return (
        <div className={styles.jost}>
            <div className={styles.jostickLeft}>
                <img src="/imgs/jost/2.png" alt="" />
            </div>
            <div className={styles.jostickRight}>
                <img src="/imgs/jost/2.png" alt="" />
            </div>
        </div>
    );
}

export default memo(Jostick) ;