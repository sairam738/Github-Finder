import UserResults from "../Components/Users/UserResults";
import UserSearch from "../Components/Users/UserSearch";
function Home(){
    return (
        <div className='m-auto my-7'>
            <UserSearch/>
            <UserResults/>
        </div>
    )
}

export default Home
