import { useEffect, useState } from "react";
import { RESTRO_MENU_API } from "./constants";
const useResturantMenu = (resId)=>{
    const [resInfo,setResInfo] = useState(null);
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(RESTRO_MENU_API+resId+"&isMenuUx4=true&submitAction=ENTER");
        const json = await data.json();
        setResInfo(json.data);
    }
    return resInfo;
}

export default useResturantMenu