import {CDN_URL} from '../utils/constants';

const RestroCard = (props)=>{
    const {resData} = props
    const { 
        name,
        cloudinaryImageId,
        cuisines,
        avgRating,
        costForTwo,
        deliveryTime
    } = resData?.info;
    return (
        <div className="restro-card">
            <img
                className="res-logo" 
                src={CDN_URL+cloudinaryImageId} 
            />
            <h3>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime}</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}

export default RestroCard;