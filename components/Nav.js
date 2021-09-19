import Link from 'next/link';

import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <div>
            <ul className={navStyles.nav}>
                <li>
                    <a href="#about" className={navStyles.link}>
                        About
                    </a>
                </li>
                <li>
                    <a href="#home">
                        <img src="/deskotics_pfp.jpg" className={navStyles.pfp} />
                    </a>
                </li>
                <li className={navStyles.link}>
                    <Link href="#links">
                        Links
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;