import AllGames from "../../components/allGames/AllGames";
import Drawers from "../../components/drawer/Drawer";
import HomeImgs from "../../components/homeimgs/HomeImgs";
import ImgsSlider from "../../components/imgsSlider/ImgsSlider";
import Jostick from "../../components/josticks/Jostick";
import GamingMarque from "../../components/marquigameings/GamingMarque";
import ModalGames from "../../components/modal/Modal";
import { memo } from 'react'


const Home = () => {
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    return (
        <>
           
            <h1>Best Games Shop</h1>
            <Drawers />
            <ImgsSlider />
            <Jostick />
            <HomeImgs />
            <AllGames />
            <ModalGames />
            <GamingMarque />




        </>
    );
}

export default memo(Home);