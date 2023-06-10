import { FaStar } from 'react-icons/fa';




function Review () {

    const userName = '';
    const ratingNumber = 3;
    const reviewText = '';

    return ( 
        <div className="review">
            <div className="review__title">
                <h3 className="review__name"> New User </h3>
                <h4 className="review__rating">{ratingNumber} out of 5 <FaStar /> </h4>
            </div>
            <p className="review__text"> Lorem ipsum dolor sit amet consectetur. </p>
        </div>
     );
}

export default Review;