import Link from 'next/link';

const Header = () => (
    <ul className="nav">
        <li className="nav-item">
            <Link href="/">
                <a className="nav-link">Home</a>
            </Link>
        </li>
        <li className="nav-item">
            <Link href="/about">
                <a className="nav-link">About</a>
            </Link>
        </li>
    </ul>
);

export default Header;
