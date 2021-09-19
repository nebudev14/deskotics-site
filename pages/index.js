import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <img src="deskotics_title.png" className={styles.title} /> 
      <h1 className={styles.text}>
        A <span className="primary">Bronx Science</span> <span className="blue">club!</span>
      </h1>
      <h1 className={styles.text}>
        <span className="blue">Tuesdays</span> in <span className="primary">Room 031</span>
      </h1>
    </div>
  );
}
