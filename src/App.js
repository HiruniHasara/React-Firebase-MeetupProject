import {Route, Switch} from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import FavouritePage from './pages/Favourite';
import NewMeetupPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Layout>
        <Switch>
          <Route path='/' exact>
            <AllMeetupsPage></AllMeetupsPage>
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage></NewMeetupPage>
          </Route>
          <Route path='/favourites'>
            <FavouritePage></FavouritePage>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
