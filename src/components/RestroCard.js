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
        <div className="restro-card w-[250px] p-4 m-4 rounded-lg bg-[#f0f0f0] hover:bg-gray-200">
            <img
                className="res-logo rounded-lg" 
                src={CDN_URL+cloudinaryImageId} 
            />
            <h3 className='font-bold py-4 text-lg'>{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{deliveryTime}</h4>
            <h4>38 Minutes</h4>
        </div>
    )
}

export default RestroCard;