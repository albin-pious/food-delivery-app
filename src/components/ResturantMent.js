import { useParams } from 'react-router-dom';
import ShimmerUI from "./ShimmerUI";
import useResturantMenu  from '../utils/useResturantMenu'
     
const ResturantMent = ()=>{
    const {id} = useParams();
    const resMenu = useResturantMenu(id);
    if(resMenu === null){
       return <ShimmerUI />
    }
    console.log('data console is',resMenu?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR);
    let {cards} = resMenu?.data?.cards[5]?.groupedCard;
    let {name} = resMenu?.data?.cards[2].card.card.info;

    return(
        <div>
            <h1>{name}</h1>
            {console.log('data console is',resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR)}
            <h4>Menu:</h4>
            <ul>
                {cards.map(menu=>{
                   return <li key={menu.card.info.id}>{menu.card.info.name} - Rs.{menu.card.info.price/100}</li>
                })}
            </ul>
        </div>
    )
}

export default ResturantMent;