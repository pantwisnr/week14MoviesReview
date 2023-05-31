import { FaStar } from 'react-icons/fa';


function Stars() {

     // const stars = document.querySelectorAll('.starItem');
     
     // stars.forEach((star, idx) => {
     //      star.addEventListener('click', () => {
     //           console.log(star, idx + 1);
     //      });
     // });

    return ( 
       <ul className="stars">
            {/* <h1>ratings should go here</h1>
            <h2> https://www.youtube.com/watch?v=dsRJTxieD4U </h2>
            <h3> The link above is a simple star rating video</h3> */}
            <li className='starItem'> < FaStar/> </li>
            <li className='starItem'> < FaStar/> </li>
            <li className='starItem'> < FaStar/> </li>
            <li className='starItem'> < FaStar/> </li>
            <li className='starItem'> < FaStar/> </li>

       </ul>
     );
}

export default Stars;
