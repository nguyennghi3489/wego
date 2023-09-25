import { FC, ReactNode } from "react";
import styles from "./button.module.css";
interface Props {
  onClick?: () => void;
  children: ReactNode;
}
export const Button: FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
