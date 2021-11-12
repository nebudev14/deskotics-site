import styles from '../styles/Home.module.css';
import aboutStyles from '../styles/About.module.css';

const About = () => {
    return (
        <div id="about" className={aboutStyles.section}>
            <h1 className={`${aboutStyles.title} ${styles.glitch}`}>ABOUT US</h1>
            <div className={aboutStyles.container}>
                <div className={aboutStyles.left}>
                    <h2 className={aboutStyles.titleDesc}>
                        What exactly <span className="blue">IS</span> <span className="primary">deskotics?</span>
                    </h2>
                    <h3 className={aboutStyles.desc}>
                        We're a Bronx Science club that loves building fun robots! We teach and build projects with circuits, programming, and cadding! No prior experience required!
                    </h3>
                </div>
                <div className={aboutStyles.right}>
                    <img src="/decari/soon.png" className={aboutStyles.decOne} />
                </div>
            </div>
            <div className={aboutStyles.container}>
                <div className={aboutStyles.left}>
                    <img src="/decari/club_fair.png" className={aboutStyles.decOne} />

                </div>
                <div className={aboutStyles.right}>
                    <h2 className={aboutStyles.titleDesc}>
                        What exactly <span className="blue">IS</span> <span className="primary">deskotics?</span>
                    </h2>
                    <h3 className={aboutStyles.desc}>
                        We're a Bronx Science club that loves building fun robots! We teach and build projects with circuits, programming, and cadding! No prior experience required!
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default About;