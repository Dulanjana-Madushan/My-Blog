import { Link } from 'react-router-dom';
import Logo from '../img/madushan.png';

function NavBar() {
    return (
        <header>
            <div className="header-container">
                <div className="right-menu">
                    <div className="logo">
                        <img src={Logo} alt="logo" />   
                    </div>
                        <Link to="/">Madushan's Blog</Link>
                </div>

                <div className="left-menu">
                    <Link to="/">Home</Link>
					<Link to="/create" className="button-container">Add Post</Link>
                    </div>
            </div>
        </header>
    )
}

export default NavBar
