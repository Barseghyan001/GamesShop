import { useAppDispatch, useAppSelector } from '../../hooks/typsRedux';
import styles from './style/Header.module.scss';
import { FaShoppingCart } from "react-icons/fa";
import { openDrawer } from '../../redux/slices/openDrawerSlice';
import {  Badge } from 'antd';


const Header = () => {
const {items} = useAppSelector(state => state.items);
const length = items.length


    const dispatch = useAppDispatch()
    return (
        <div className={styles.header}>
            <div className='w-28 rounded-sm overflow-hidden'>

                <img className={styles.headerImg} src="/imgs/icons/iconheader.png" alt="" />

            </div>
            <div className='flex items-center justify-evenly '>
                <Badge color='gold' size='small' count={length} showZero>
                    <FaShoppingCart onClick={() => dispatch(openDrawer())} className={styles.iconsHeader} shape="square" size="" />
                </Badge>
            </div>
        </div>
    );
}

export default Header;