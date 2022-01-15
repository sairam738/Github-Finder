import loadingGiF from '../../Images/loading.gif'

function Spinner(){
    return (
        <div className='w-100 mt-20'>
            <img
                width={180}
                className='text-center mx-auto'
                src={loadingGiF}
                alt= 'Loading...'
            />
        </div>
    )
}

export default Spinner
