import { FC, memo } from "react";
import { BiErrorCircle } from "react-icons/bi";
import styles from "./error-box.module.css";

interface Props {
  text: string;
}
export const ErrorBox: FC<Props> = memo(({ text }) => {
  return (
    <div className={styles.container}>
      <BiErrorCircle size={50} color="#f20000" />
      <span>{text}</span>
    </div>
  );
});
