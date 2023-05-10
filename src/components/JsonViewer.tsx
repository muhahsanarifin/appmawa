import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { JsonViewer } from "@textea/json-viewer";

import styles from "../styles/JsonViewer.module.css";

const JsonViewerComponent = () => {
  const hasil = useSelector((state: RootState) => state.nilai);

  console.info("Hasil hitung nilai mahasiswa:", hasil?.data);

  return !hasil?.isFulfilled ? (
    <div className={styles["delete-msg"]}>
      <p>{hasil?.msg}</p>
    </div>
  ) : (
    <JsonViewer value={hasil?.data} />
  );
};

export default JsonViewerComponent;
