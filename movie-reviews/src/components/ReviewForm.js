import Stars from "./Stars";



const ReviewForm = (props) => {

    let newRating = props.newRating;
    let movieID = props.movieID;
   
    
    let fname = ''; 
    let userRating = ''; 
    let userReview = '';
   
    function validateForm(e) {
        e.preventDefault();
        fname = document.forms["myForm"]["name"].value;
        userReview = document.forms["myForm"]["newReview"].value;
        userRating = document.forms["myForm"]["newRating"].value;
        if (fname == "") {
          alert("Name must be filled out");
          return false;
        }else if (userReview == "") {
          alert("Review must be filled out");
          return false;
        } else if (userRating == "") {
          alert("Rating must be filled out");
          return false;
        } 
        alert("Review submitted successfully");
        console.log('userrating', fname, userReview,userRating, movieID);
        fname = document.forms["myForm"]["name"].value = "";
        userReview = document.forms["myForm"]["newReview"].value = "";
        userRating = document.forms["myForm"]["newRating"].value = "";
    }

    const sendData = () => {
        return {
            id : movieID,
            allReviews: [
                {
                    name : fname,
                    ratingNumber : userRating,
                    reviewText :userReview
                }
            ]
        };
    }


    return ( 
        <>
            <form action="" id="reviewform" name="myForm" method="post" onSubmit={validateForm}>
                <h4 className="review__title"> Add New Review & Rating</h4>
               <fieldset>
                    <label htmlFor="name"> Name: 
                        <input type="text" id="name" name="name" placeholder="name" />
                    </label>

                    <label  className="newRating">  
                        Add rating:
                        <input type="number" id="newRating" min={0} max={5} name="newRating" />
                    </label>

                    {/* <div className="newRating">
                    < Stars newRating={true} validateMyForm={validateForm}  />
                    </div> */}

                    <label htmlFor="newReview"> Add review: 
                        <input type="text" id="newReview" name="newReview" placeholder="add review" />
                    </label>

                    <input type="submit" value="Submit" />
               </fieldset>
            </form>
        </>
     );
}
 
export default ReviewForm;