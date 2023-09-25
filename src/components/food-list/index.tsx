import { FC, Fragment } from "react";
import { IFood } from "../../models/food";
import { FoodItem } from "./food-item";
import styles from "./food-list.module.css";
import { InfiniteData } from "react-query";
import { IPagination } from "../../models/common";

interface Props {
  data: InfiniteData<IPagination<IFood[]>>;
}

export const FoodList: FC<Props> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.pages.map((group, i) => (
        <Fragment key={i}>
          {group.data.map((item) => (
            <FoodItem key={item.id} item={item} />
          ))}
        </Fragment>
      ))}
    </div>
  );
};
