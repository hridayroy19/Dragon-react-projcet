/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const NewsCard = ({ news}) => {
    const {title,image_url,details, _id} =news
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
        <figure><img src={image_url} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title"> {title} </h2>
          <p className="mb-2">If a dog chews shoes whose shoes does he choose?</p>
          {
            details.length > 200? <p> {details.slice(0,200)} <Link to={`/news/${_id}`} className="text-red-40 font-bold" > read more ....</Link> </p> :
             <p> {details} </p>
         } 
        </div>
      </div>
    );
};

export default NewsCard;