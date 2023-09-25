// page.js
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <div className={styles.main}>
        <h1>Hello World!</h1>
      </div>

      <div className={styles.box}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          convallis, nulla non laoreet condimentum, turpis felis finibus metus,
          ut molestie risus enim id neque. Integer tristique purus non gravida
          sodales. Maecenas ultricies feugiat dolor lobortis commodo. Sed
          maximus vitae neque quis mollis.
        </p>
      </div>

      <div className={styles.box}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
          convallis, nulla non laoreet condimentum, turpis felis finibus metus,
          ut molestie risus enim id neque. Integer tristique purus non gravida
          sodales. Maecenas ultricies feugiat dolor lobortis commodo. Sed
          maximus vitae neque quis mollis.
        </p>
      </div>
    </>
  );
}
