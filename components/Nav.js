import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <div>
            <ul className={navStyles.nav}>
                <li>
                    <a href="/">About</a>
                </li>
                <li>
                    <img src="/deskotics_pfp.jpg" className={navStyles.pfp} />
                </li>
                <li>
                    <a href="/">Links</a>
                </li>
            </ul>
        </div>
    );
}

export default Nav;