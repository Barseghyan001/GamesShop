import { useAppDispatch, useAppSelector } from '../../hooks/typsRedux';
import { Drawer } from 'antd';
import { openDrawer } from '../../redux/slices/openDrawerSlice';
import { memo, useCallback, useEffect, useState } from 'react';
import { HiMinusSm } from "react-icons/hi";
import { fetchingItems } from '../../redux/slices/itemsDrawer';
import styles from './style/Drawer.module.scss';
import { deleteItems } from '../../redux/slices/itemsDrawer';
import { MdDelete, MdAdd } from "react-icons/md";
import { decriment, increment, zeroTotal } from '../../redux/slices/total';
import { deleteAll } from '../../redux/slices/itemsDrawer';



const Drawers = () => {
    const [imgDrawer, setImgDrawer] = useState(false)
    const changeImg = () => {
        setImgDrawer(true)
    }
    const dispatch = useAppDispatch() 
    const deleteAndClose = (id: string | number | undefined) => {
        dispatch(deleteItems(id))
    }

    const { openD, items, total } = useAppSelector(state => state);
const idificators = items.items.find((it) => it.id)

    const buyHandler = () => {
        dispatch(deleteAll(idificators?.id))
        dispatch(zeroTotal())
        changeImg()

    }
    const plushandler = useCallback((initialState: string | number | undefined) => {
        dispatch(increment(initialState))
    }, [dispatch])
    const minusHandler = useCallback((initialState: string | number | undefined) => {
        dispatch(decriment(initialState))
    }, [dispatch])


    useEffect(() => {
        dispatch(fetchingItems())
    }, [])

    return (
        <>


            <Drawer style={{ background: '#2F4F4F', color: 'white' }} width={300} title="Basket"
                placement="right"
                onClose={() => dispatch(openDrawer())}
                open={openD.open}>
                {items.items.length <= 0 ? (
                    <div className='flex flex-col items-center justify-center gap-2 mt-16'>
                        <img className='object-contain w-24' src={imgDrawer ?"/imgs/drawerImgs/chek.png":"/imgs/drawerImgs/kor.png"} alt="logo" />
                        <h2>{imgDrawer?"Thank For Buy":"Basket Empty"}</h2>
                    </div>) : (
                    <ul className={styles.uldrawer}>
                        {items.items.map((item) => (
                            <li key={item.id}>
                                <div className='flex flex-col items-center justify-evenly'>
                                    <img className={styles.imgDrawer} src={item.img} alt="logo" />
                                    <h3>{item.title}</h3>
                                    <p> {item.price}$</p>
                                </div>
                                <div className='flex  items-center justify-center gap-2'>
                                    <button onClick={() => plushandler(item.price)} className={styles.plsueBtn}><MdAdd /></button>
                                    <button disabled={total.total <= 0} onClick={() => minusHandler(item.price)} className={styles.minusBtn}><HiMinusSm /></button>

                                    <button className={styles.drawerButton} onClick={() => deleteAndClose(item.id)}><MdDelete /></button>
                                </div>
                            </li>

                        ))}
                        <div className='w-full flex items-center justify-center flex-col'>
                            <h4>Total : ${total.total < 0 ? 0 : total.total}</h4>
                            <button disabled={total.total <= 0} onClick={buyHandler} className={styles.buyBtn}>Buy</button>
                        </div>
                    </ul>

                )}


            </Drawer>


        </>
    );
}

export default memo(Drawers);