import Marquee from "react-fast-marquee";
import { marque } from "./utils/imgsmarque";

const GamingMarque = () => {
    return (
        <Marquee className="marque">
            <div className="flex items-center justify-center gap-12">
                {marque.map((item) => (
                    <img className="w-20 object-contain" key={item} src={item} alt="" />
                ))}
            </div>

        </Marquee>
    );
}

export default GamingMarque;