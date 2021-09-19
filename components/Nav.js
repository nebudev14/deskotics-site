import Link from 'next/link';

import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <div>
            <ul className={navStyles.nav}>
                <li>
                    <Link href="/#about">
                        About
                    </Link>
                </li>
                <li>
                    <img src="/deskotics_pfp.jpg" className={navStyles.pfp} />
                </li>
                <li>
                    <Link href="/#links">
                        Links
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;