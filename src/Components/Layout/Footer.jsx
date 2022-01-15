import {FaLinkedin} from 'react-icons/fa'
function Footer(){
    return (
        <div>
            <div className='footer p-5 bg-black text-neutral-content footer-center  flex'>
                <div className='container'>
                    <img src={require('../../Images/copyright-symbol.png')} alt='Copyright' width="40" height="40"/>
                    <h1 className='text-2xl'>All Rights Reserved</h1>
                    <div className = 'flex'>
                        <p>Created by Sai Ram Varma&ensp;</p>
                        <a href='https://www.linkedin.com/in/sairamvarma/' >
                            <FaLinkedin/>
                        </a>
                    </div>
                </div>


            </div>

        </div>
    )
}
export default Footer
