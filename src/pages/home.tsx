import styles from "../styles/home.module.css";
import { RegulerInput } from "../components/Input";

const Home = () => {
  return (
    <>
      <main className={styles["main"]}>
        <section className={styles["title-section"]}>
          <h1 className={styles["title"]}>Aplikasi Penilaian Mahasiswa</h1>
        </section>
        <section className={styles["input-section"]}>
          <RegulerInput />
        </section>
      </main>
    </>
  );
};

export default Home;
