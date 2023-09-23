import { FC, useState } from "react";
import { ICategory } from "../../models/category";
import styles from "./category-bar.module.css";

interface Props {
  items: ICategory[];
  pickedId?: string;
  pickItem: (id: string) => void;
}

export const CategoryBar: FC<Props> = ({ items, pickedId = "", pickItem }) => {
  const [pickedIdState, setPickedIdState] = useState(pickedId);
  const onPickItem = (itemId: string) => {
    setPickedIdState(itemId);
    pickItem(itemId);
  };
  return (
    <ul className={styles.container}>
      <li
        className={`${styles.item} ${
          pickedIdState === "" ? styles.isActivated : ""
        }`}
        onClick={() => onPickItem("")}
      >
        All
      </li>
      {items.map((item) => (
        <li
          key={item.id}
          className={`${styles.item} ${
            pickedIdState === item.id ? styles.isActivated : ""
          }`}
          onClick={() => onPickItem(item.id)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};
