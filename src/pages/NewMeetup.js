import NewMeetuopForm from "../components/meetup/NewMeetupForm";
import {useHistory} from 'react-router-dom';

function NewMeetupPage(){
    const history=useHistory();
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-project-20043-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                headers:{
                    'Content-Type':'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    }

    return(
        <div>
            <h1>Add New Meetup</h1>
            <NewMeetuopForm onAddMeetup={addMeetupHandler}></NewMeetuopForm>
        </div>
    );
}
export default NewMeetupPage;