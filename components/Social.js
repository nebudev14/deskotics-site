import socialStyles from '../styles/Social.module.css';

const Social = () => {
    return (
        <div>
            <ul className={socialStyles.socialList}>
                <li>                    
                    <a href="https://github.com/deskotics" target="_blank">
                        <img src="/social/github.svg" className={socialStyles.logo} />                
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/deskotics/" target="_blank">
                        <img src="/social/instagram.svg" className={socialStyles.logo} />
                    </a>        
                </li>
                <li>
                    <a href="https://drive.google.com/drive/folders/15VD3BG1y6ub6iEmi7DLK-pQNjArtF53S?usp=sharing" target="_blank">
                        <img src="/social/drive.svg" className={socialStyles.logo} />
                    </a>
                </li>
                <li>
                    <a href="https://discord.com/invite/GWCNzNMJDz" target="_blank">
                        <img src="/social/discord.svg" className={socialStyles.logo} />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/channel/UCH5zZ-3z-WZGAZsFpWi2bTg?view_as=subscriber" target="_blank">
                        <img src="/social/youtube.svg" className={socialStyles.logo} />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Social;