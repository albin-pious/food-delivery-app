import { useEffect, useState } from "react";
import RestroCard from "./RestroCard";
import API from "../utils/mocData";
import ShimmerUI from "./ShimmerUI";

const Body = ()=>{
    const [listOfResturant,setResList] = useState([]);

    useEffect(()=>{
        fetchData()
    },[]);
    console.log('hai heloo');

    async function fetchData(){
        // const data = await fetch("https://corsproxy.org/?https://www.swiggy.com/mapi/homepage/getCards?lat=12.9199543&lng=77.6256895");
        // const json = await data.json();
        console.log(API);
        setResList(API?.data?.success?.cards[4]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
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
    console.log(listOfResturant)
    return(
        <div className="body">
            <div className="search">Search...</div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    let filteredResList = listOfResturant.filter(res=> res.data.avgRating > 4);
                    setResList(filteredResList);
                }}>Top Rated Resturants</button>
            </div>
            <div className="restro-container">
                { listOfResturant.map((resturant) =>
                    < RestroCard key={resturant.info.id} resData={resturant}/>
                ) }
            </div>
        </div>
    )
}

export default Body;