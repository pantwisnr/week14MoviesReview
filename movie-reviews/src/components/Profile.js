import { FaSearch, FaBell, FaUser, FaPlay} from 'react-icons/fa';

const Profile = () => {
    return ( 
        <div className='profile'>
            <div className="profile__icon"> < FaSearch /></div>
            <div className="profile__icon"> < FaBell /></div>
            <div className="profile__icon"> < FaUser /></div>
            <button className='btn btn-danger profile__btn'> Logout </button>
        </div>
     );
}
 
export default Profile;