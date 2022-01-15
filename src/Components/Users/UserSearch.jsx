import {useState, useContext} from "react";
import GithubContext from "../../Context/Github/GithubContext";

function UserSearch(){
    const [text, setText] = useState('')
    const handleChange = (e) => {
        setText(e.target.value)
    }

    const {users, searchUsers, clearItems} = useContext(GithubContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(text === ''){
            alert('Please enter something')
        } else {
            searchUsers(text)
        }
    }


    return (
        <div className='mb-10 grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 gap-8'>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form-control">
                        <div className="relative">
                            <input
                                type='text'
                                className='w-full pr-40 bg-black input input-lg text-neutral-content'
                                placeholder='Search Here'
                                value={text}
                                onChange={handleChange}
                            />
                            <button
                                type = 'submit'
                                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
                            >
                                Go
                            </button>
                        </div>
                    </div>
                </form>

            </div>
            {users.length > 0 && (
                <div>
                    <button className="btn btn-ghost btn-lg" onClick={clearItems}>
                        clear
                    </button>
                </div>
            )}


        </div>
    )
}
export default UserSearch
