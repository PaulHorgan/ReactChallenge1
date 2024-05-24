import { Link } from 'react-router-dom';

export default function NavBar() {
    const class1 = 'nav'
    const class2 = 'sticky-nav'
    return (
        <nav className = {class1 + class2}>
            <h1> seed theory </h1>
            <ul>
                <li><Link to="/" >Home </Link> </li>
                <li><Link to="/shop" >Shop </Link> </li>
                <li><Link to="/checkout" >Checkout </Link> </li>
            </ul>
        </nav>
    )
}