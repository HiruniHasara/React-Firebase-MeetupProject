import classes from './MeetupItem.module.css';
import Card from '../reusable/Card';
import {useContext} from 'react';
import FavouriteContext from '../../store/favourite-context';

function MeetupItem(props){
    const FavouriteCtx=useContext(FavouriteContext);
    const itemIsFavourite=FavouriteCtx.itemIsFavourite(props.id);

    function toggleFavouriteHandler(){
        if(itemIsFavourite){
            FavouriteCtx.removeFavourite(props.id);
        }else{
            FavouriteCtx.addFavourite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description,
            });
        }
    }

    return(
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavouriteHandler}>{itemIsFavourite ? 'Remove from Favourites' : 'Add to Favourites'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;