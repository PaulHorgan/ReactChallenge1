import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='nav sticky-nav'>
            <h1> seed theory </h1>
            <ul>
                <li><Link to="/" >Home </Link> </li>
                <li><Link to="/shop" >Shop </Link> </li>
            </ul>
        </nav>
    )
}