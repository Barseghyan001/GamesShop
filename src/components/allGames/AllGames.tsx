import Card from './components/Card';
import styles from './style/AllGames.module.scss';
import { useEffect } from 'react';
import { fetchingGames } from '../../redux/slices/gamesContent';
import { useAppDispatch, useAppSelector } from '../../hooks/typsRedux';

const AllGames = () => {
    const { games, loading, error } = useAppSelector(state => state.game)
    const dispatch = useAppDispatch()
    
    useEffect(() => {
      dispatch(fetchingGames())  
    }, [])
    return (
        <div className={styles.games}>
            <ul className={styles.gamesContent}>
                {loading && <span className={styles.loader}></span>}
                {error && <h1>Error Server {error}</h1>}
                {games.map((item) => (
                    <Card key={item.id} title={item.title} price={item.price} img={item.img} id={item.id} />
                ))}
            </ul>
        </div>
    );
}

export default AllGames;