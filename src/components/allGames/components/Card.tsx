import { FC } from "react";
import styles from '../style/AllGames.module.scss'
import { useAppDispatch } from "../../../hooks/typsRedux";
import { fetchInfoGame } from "../../../redux/slices/gameInfo";
import { openMod } from "../../../redux/slices/openModal";


interface PropsCard {
    id: string | number | undefined;
    title: string;
    img: string;
    price: string | number;

}



const Card: FC<PropsCard> = ({ img, price, title, id }) => {
    const dispatch = useAppDispatch()
    const showModal = () => {
        dispatch(fetchInfoGame(id))
       dispatch(openMod())
    }
    return (
        <li className={styles.Cardli}>
            <div className={styles.gamesLi}>
                <img src={img} alt="" />

                <p>{title}</p>
                <div className="flex items-center justify-between ">
                    <button onClick={showModal}>View</button>
                    <p className={styles.gamePricep}>${price}</p>
                </div>
            </div>
        </li>
    );
}

export default Card;