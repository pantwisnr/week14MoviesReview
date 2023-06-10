
import { FaStar } from 'react-icons/fa';
import { useState } from 'react';

function Stars(props) {

    const newRating = props.newRating;

    const ratingList = ['1','2','3','4','5'];
    const validateMyForm= props.validateMyForm;

   
    

    const selectedStar = (e) => {
        let rating = e.target.dataset.rating;
        const allItems = document.querySelectorAll('.newItem');
        allItems.forEach(item => {
            if(item.className.includes(`spanItem${rating}`)) {
                item.className = `starItem newItem spanItem${rating} selected`;  
            }else {
                item.classList.remove('selected'); 
            } 
        });
        if(ratingList.includes(rating)){
          return ratingList[rating - 1];
     }
    };



    if(newRating){
        return ( 
            <>
                <h4 className='rating__title'> Add rating:</h4>
                <div className="stars">
                <div className='starItem newItem spanItem1'  >  <div data-rating='1' id='1' onClick={ selectedStar }  className="span span1"> 1 </div> <FaStar />  </div>
                <div className='starItem newItem spanItem2'  > <div  data-rating='2' id='2'  onClick={ selectedStar } className="span span2"> 2 </div> <FaStar />  </div>
                <div className='starItem newItem spanItem3'  > <div  data-rating='3' id='3'  onClick={ selectedStar } className="span span3"> 3 </div> <FaStar />  </div>
                <div className='starItem newItem spanItem4'  > <div  data-rating='4' id='4'  onClick={ selectedStar } className="span span4"> 4 </div> <FaStar />  </div>
                <div className='starItem newItem spanItem5'  > <div  data-rating='5' id='5'  onClick={ selectedStar } className="span span5"> 5 </div> <FaStar />  </div>
            </div>
            </>
         );
        }
        return ( 
        <div className="stars">
                <div className='starItem newItem spanItem1'  >  <div data-rating='1' id='1'   className="span"> 1 </div> <FaStar />  </div>
                <div className='starItem newItem spanItem2'  > <div  data-rating='2' id='2'   className="span"> 2 </div> <FaStar />  </div>
                <div className='starItem newItem spanItem3'  > <div  data-rating='3' id='3'   className="span"> 3 </div> <FaStar />  </div>
                <div className='starItem newItem spanItem4'  > <div  data-rating='4' id='4'   className="span"> 4 </div> <FaStar />  </div>
                <div className='starItem newItem spanItem5'  > <div  data-rating='5' id='5'   className="span"> 5 </div> <FaStar />  </div>
        </div>
        );
}

export default Stars;
