import { FC } from "react";
import { IFood } from "../../models/food";
import { FoodItem } from "./food-item";
import styles from "./food-list.module.css";

interface Props {
  items: IFood[];
}

export const FoodList: FC<Props> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item) => (
        <FoodItem item={item} />
      ))}
    </div>
  );
};
