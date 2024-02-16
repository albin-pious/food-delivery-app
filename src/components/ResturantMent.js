import { useParams } from 'react-router-dom';
import ShimmerUI from "./ShimmerUI";
import useResturantMenu  from '../utils/useResturantMenu'
     
const ResturantMent = ()=>{
    const {id} = useParams();
    const resMenu = useResturantMenu(id);
    if(resMenu === null){
       return <ShimmerUI />
    }
    let {itemCards} = resMenu?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    let {text} = resMenu?.cards[0]?.card?.card;

    return(
        <div>
            <h1>{text}</h1>
            <h4>Menu:</h4>
            <ul>
                {itemCards.map(menu=>{
                   return <li key={menu.card.info.id}>{menu.card.info.name} - Rs.{menu.card.info.price/100}</li>
                })}
            </ul>
        </div>
    )
}

export default ResturantMent;