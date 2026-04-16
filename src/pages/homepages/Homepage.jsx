import FriendsKeep from '../../components/banner/FriendsKeep';
import FriendCount from '../../components/banner/FriendCount/FriendCount';
import AllFriends from '../AllFriendsList/AllFriends';


const Homepage = () => {
    
    return (
        <div>
            {/*banner section*/}
            <FriendsKeep />
            <FriendCount />
            <AllFriends />
        </div>
    );
};

export default Homepage;