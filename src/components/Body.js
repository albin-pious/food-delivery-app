import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import ShimmerUI from "./ShimmerUI";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = ()=>{
    const [listOfResturant,setResList] = useState([]);
    const [filteredListOfResturant,setFilteredListOfResturant] = useState([]);
    const [searchText,setSearchText] = useState('');
    const internetStatus = useOnlineStatus();

    useEffect(()=>{
        fetchData()
    },[]);

    async function fetchData(){
        const data = await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=12.9046136&lng=77.614948");
        const json = await data.json();
        setResList(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setFilteredListOfResturant(json?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    if(listOfResturant.length===0){
        return(
            <div className="shimmer-container">
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
                <ShimmerUI />
            </div>
        )
    }
    console.log('online status is ',internetStatus);
    if(internetStatus === false){
        return <h1>Please check your Internet...</h1>
    }

    return(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value);
                    }}/>
                    <button className="search-button" onClick={()=>{
                        const filteredProducts = listOfResturant.filter(res=>res?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFilteredListOfResturant(filteredProducts);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    let filteredResList = listOfResturant.filter(res=> res.data.avgRating > 4);
                    setResList(filteredResList);
                }}>Top Rated Resturants</button>
            </div>
            <div className="restro-container">
                { filteredListOfResturant.map((resturant) =>
                    <Link key={resturant.info.id} to={"/resturants/"+ resturant.info.id}>
                        < RestroCard  resData={resturant}/>
                    </Link>
                ) }
            </div>
        </div>
    )
}

export default Body;