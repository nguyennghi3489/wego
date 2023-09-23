import { FC } from "react";
import { AiOutlineGift, AiFillStar } from "react-icons/ai";
import { MdDiscount, MdOutlineExposurePlus1 } from "react-icons/md";
import { IFood, PromotionType } from "../../models/food";
import styles from "./food-item.module.css";

interface Props {
  item: IFood;
}

const renderPromotionIcon = (type: PromotionType) => {
  switch (type) {
    case "gift":
      return (
        <div className={`${styles.promotion} ${styles.gift}`}>
          <AiOutlineGift size={25} color="white" />
        </div>
      );

    case "discount":
      return (
        <div className={`${styles.promotion} ${styles.discount}`}>
          <MdDiscount size={25} color="white" />
        </div>
      );

    case "1+1":
      return (
        <div className={`${styles.promotion} ${styles.onePlusOne}`}>
          <MdOutlineExposurePlus1 size={25} color="white" />
        </div>
      );
    default:
      return null;
  }
};

export const FoodItem: FC<Props> = ({ item }) => {
  return (
    <div className={styles.container}>
      {renderPromotionIcon(item.promotion)}
      <img src={item.imageUrl} alt={item.restaurant} className={styles.image} />
      <div className={styles.contentContainer}>
        <h4>{item.name}</h4>
        <div className={styles.detailContainer}>
          <div className={styles.detailBox}>
            <AiFillStar />
            {item.rating}
          </div>
          <div
            className={styles.detailBox}
          >{`${item.minCookTime}-${item.maxCookTime} min`}</div>
          {item.isNew && (
            <div className={`${styles.detailBox} ${styles.isNew}`}>New</div>
          )}
        </div>
      </div>
    </div>
  );
};
