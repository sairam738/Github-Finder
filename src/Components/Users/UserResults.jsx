import { useContext} from "react";
import Spinner from "../Layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../Context/Github/GithubContext";

function UserResults(){
    const {users, loading} = useContext(GithubContext)



    if(!loading){
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 m-auto'>
                {users.map((user) => (

                    <UserItem key={user.id} user={user}/>
                ))}
            </div>
        )
    } else{
        return (
            <div>
                <Spinner/>
            </div>
        )
    }

}

export default UserResults
