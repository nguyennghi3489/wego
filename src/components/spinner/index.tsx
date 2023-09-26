import { memo } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import styles from "./spinner.module.css";

export const Spinner = memo(() => {
  return (
    <div className={styles.spinner}>
      <AiOutlineLoading3Quarters size={50} />
    </div>
  );
});
