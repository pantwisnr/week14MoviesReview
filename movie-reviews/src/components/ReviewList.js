
import { useState } from "react";
import ReviewForm from "./ReviewForm";


function ReviewList() {

    const reviewForm = < ReviewForm /> ;
    

    const [reviews, setReviews] = useState([

        {
            id :'',
            allReviews: [
                {
                    name : '',
                    ratingNumber : '',
                    reviewText :''
                }
            ]
        }
    ]); 

  
        return ( 
        <div>
            <h4> hello from review list </h4>
         </div>
        );
}

export default ReviewList;
