import images from '../../assets/image_assets/images';
import './Navbar.css';

function Navbar(){
    return(
        <div className='navbar'>
            <div className="logo">
                <img src={images.tringle} alt="" />
                <h3><span>MR..</span>Raju</h3>
            </div>
            <div className="link">
                <ul>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Project</a>
                    <a href='#'>Contact</a>
                    

                </ul>
            </div>
        </div>
    )
}

export default Navbar;