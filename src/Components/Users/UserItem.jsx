import {Link} from 'react-router-dom'

function UserItem({user}){
    return (
        <div className='card shadow-md compact side bg-black rounded-md'>
            <div className="flex-row items-center space-x-4 card-body">
                <div className="avatar">
                    <div className="rounded-full shadow w-14 h-14">
                        <img src = {user.avatar_url} alt="Profile"/>
                    </div>

                </div>
                <div className="login">
                    <div className="h2 card-title text-neutral-content">{user.login}</div>
                    <Link
                        className="text-neutral-content opacity-40"
                        to = {`/user/${user.login}`}
                    >
                        Visit Profile
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default UserItem
