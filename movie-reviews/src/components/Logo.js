import  symmetry from '../images/symmetry.jpg';
import Navbar from './Navbar';


const Logo = () => {
    return ( 
        <div className="logo">
            <img src={symmetry} alt="" />
            <h3 className='logo__text'> <span>P </span> <em>antwisnr</em> Movies </h3>
            < Navbar />
        </div>
     );
}
 
export default Logo;