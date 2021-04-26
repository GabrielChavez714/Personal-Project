import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <div className='Nav'>
            <ul className='nav-links'>
                <Link to='/Gear' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-gear'>Gear</li></Link>
                <Link to='Info' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-info'>Info</li></Link>
                <Link to='Map' style={{ textDecoration: 'none', color: 'black' }}><li className='nav-map'>Map</li></Link>
                <Link to='Cart' ><li><img className='cart' src='https://www.pngkey.com/png/full/231-2317482_white-shopping-cart-png-download-buy-icon-white.png' alt='cart'/></li></Link>
            </ul>
            <div className="menu">  
                <div className='menu1'></div>
                <div className='menu2'></div>
                <div className='menu3'></div>
            </div>
        </div>
    );
}

export default Nav;