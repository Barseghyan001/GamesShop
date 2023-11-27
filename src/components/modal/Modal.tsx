import { Modal } from "antd";
import { useAppDispatch, useAppSelector } from "../../hooks/typsRedux";
import { openModalHandler } from "../../redux/slices/openModal";
import styles from './style/Modal.module.scss'
import { FaShoppingCart } from "react-icons/fa";
import { addFetchingItems, deleteItems } from "../../redux/slices/itemsDrawer";
import { fetchInfoGame } from "../../redux/slices/gameInfo";
import { useEffect,memo } from "react";

const ModalGames = () => {

    const dispatch = useAppDispatch()
    const { info, openModal, items } = useAppSelector(state => state)
    useEffect(() => {
        dispatch(fetchInfoGame())
    }, [])
    const findGame = info.info?.title
    const findItem = items.items.find((it) => it.title === findGame)
   
   
    const addInfo = () => {
       
        if (findItem) {
            dispatch(deleteItems(findItem.id))
        } else {
            dispatch(addFetchingItems({
                id: info.info?.id,
                title: info.info?.title,
                price: info.info?.price,
                img: info.info?.img

            }))
        }


    }



    return (
        <>

            <Modal width={700} className={styles.modal} title="Information" open={openModal.openModal} onOk={() => dispatch(openModalHandler())} onCancel={() => dispatch(openModalHandler())}>
                <div className="w-full flex items-center justify-evenly rounded-xl flex-wrap p-1 gap-3 bg-[#A0522D]">
                    <div className="flex items-center justify-center">
                        <img className={styles.img} src={info.info?.img} alt="img" />
                    </div>
                    <div>
                        <h3>{info.info?.title}</h3>
                        <p>${info.info?.price}</p>
                        <button  className={`${styles.buttonModal} ${findItem && styles.btnModal }`}
                            onClick={addInfo}>{findItem ?"Delete" : <FaShoppingCart />}</button>
                    </div>

                </div>
            </Modal>
        </>
    );
}

export default memo(ModalGames) ;