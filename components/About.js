import aboutStyles from '../styles/About.module.css';

const About = () => {
    return (
        <div className={aboutStyles.container}>
            <div className={aboutStyles.left}>
                <h1 className={aboutStyles.title}>About</h1>
                <h2 className={aboutStyles.desc}>
                    What exactly IS deskotics?
                </h2>
            </div>
            <div className={aboutStyles.right}>
                <img src="/decari/soon.png" className={aboutStyles.decOne} />
            </div>
        </div>
    );
}

export default About;