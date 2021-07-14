import {useContext} from 'react';
import FavouriteContext from '../store/favourite-context';
import MeetupList from '../components/meetup/MeetupList';

function FavouritePage(){
    const FavouriteCtx=useContext(FavouriteContext);

    let content;
    if(FavouriteCtx.totalFavourites === 0){
        content=<p>You don't have favourites yet... Start adding...</p>
    }else{
        content=<MeetupList meetups={FavouriteCtx.favourites}></MeetupList>
    }

    return(
        <div>
            <h1>My Favourites</h1>
            {content}
        </div>
    );
}
export default FavouritePage;