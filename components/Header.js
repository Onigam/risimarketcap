import Link from 'next/link';

const Header = () => (
    <ul className="nav">
        <li className="nav-item">
            <a href="/" className="nav-link">Home</a>
        </li>
        <li className="nav-item">
            <a href="/about" className="nav-link">About</a>
        </li>
    </ul>
);

export default Header;
