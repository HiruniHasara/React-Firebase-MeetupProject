import { Link } from "react-router-dom";
import classes from './MainNavigation.module.css';
import {useContext} from 'react';
import FavouriteContext from "../../store/favourite-context";

function MainNavigation(){
    const favouriteCtx=useContext(FavouriteContext);

    return(
        <header className={classes.header}>
            <div className={classes.logo}>Meetups</div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>All Meetups</Link>
                    </li>
                    <li>
                        <Link to='/new-meetup'>New Meetups</Link>
                    </li>
                    <li>
                        <Link to='/favourites'>
                            Favourites
                            <span className={classes.badge}>{favouriteCtx.totalFavourites}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;