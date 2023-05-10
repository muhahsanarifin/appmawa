import JsonViewerComponent from "../components/JsonViewer";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { nilaiAction } from "../redux/reducers/nilai";

import {
  RegulerButton as BackButton,
  RegulerButton as DeleteButton,
} from "../components/Button";

import styles from "../styles/result.module.css";

const Result = () => {
  const useAppDispatch: () => AppDispatch = useDispatch;
  const dispatch = useAppDispatch();
  const status = useSelector((state: RootState) => state.nilai);
  return (
    <>
      <main className={styles["main"]}>
        <nav className={styles["nav"]}>
          <BackButton
            initial="Back to home"
            onClick={() => window.location.replace("/")}
            onStyle="back-button"
          />
        </nav>
        <section className={styles["title-section"]}>
          <h1 className={styles["title"]}>
            Aplikasi Penilaian Mahasiswa |{" "}
            <span className={styles["sub-title"]}>Hasil Nilai Mahasiswa</span>
          </h1>
        </section>
        <section className={styles["result-section"]}>
          <JsonViewerComponent />
        </section>
        <section className={styles["delete-section"]}>
          {status?.isFulfilled && <DeleteButton
            initial="Hapus data JSON"
            onStyle="delete-button"
            onClick={() => dispatch(nilaiAction.hapus())}
          />}
        </section>
      </main>
    </>
  );
};

export default Result;
