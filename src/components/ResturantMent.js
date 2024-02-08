import { useEffect,useState } from "react";
import { useParams } from 'react-router-dom';
import ShimmerUI from "./ShimmerUI";
import { RESTRO_MENU_API } from "../utils/constants";

const ResturantMenu = ()=>{
    const [resMenu,setResMenu]=useState(null);
    const {id} = useParams();
    console.log('params is: ',id);
    useEffect(()=>
    {   
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch(RESTRO_MENU_API+id);
        const json = await data.json();
        console.log(json);
        setResMenu(json)
    }
     
    // console.log('data console is',resMenu?.data?.cards[5].groupedCard.cardGroupMap.REGULAR.cards[2].card.card.itemCards)

    if(resMenu === null){
       return <ShimmerUI />
    }
    let {itemCards} = resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
    let {title} = resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    console.log(`title is ${title} and the array of menu is ${resMenu}`);


    return(
        <div>
            <h1>{title}</h1>
            {console.log('data console is',resMenu?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)}
            <h4>Menu:</h4>
            <ul>
                {itemCards.map(menu=>{
                   return <li key={menu.card.info.id}>{menu.card.info.name} - Rs.{menu.card.info.price/100}</li>
                })}
            </ul>
        </div>
    )
}

export default ResturantMenu;