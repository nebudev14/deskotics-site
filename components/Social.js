import socialStyles from '../styles/Social.module.css';

const Social = () => {
    return (
        <div>
            <ul className={socialStyles.socialList}>
                <li>
                    <img src="/social/github.svg" className={socialStyles.logo} />
                </li>
                <li>
                    <img src="/social/instagram.svg" className={socialStyles.logo} />
                </li>
                <li>
                    <img src="/social/drive.svg" className={socialStyles.logo} />
                </li>
                <li>
                    <img src="/social/discord.svg" className={socialStyles.logo} />
                </li>
                <li>
                    <img src="/social/youtube.svg" className={socialStyles.logo} />
                </li>
            </ul>
        </div>
    );
};

export default Social;