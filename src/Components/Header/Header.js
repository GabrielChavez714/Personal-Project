import Nav from '../Nav/Nav';
import { connect } from 'react-redux';
import './Header.css';

const Header = (props) => {

    return (
        <div className='Header'>
            <h1 className='header-title'>SNOWCANYON.COM</h1>
            <Nav />
        </div>
    )
}

export default connect(null)(Header);