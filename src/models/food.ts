export type PromotionType = "gift" | "1+1" | "discount" | null;
export interface IFood {
  id: string;
  index: number;
  rating: number;
  promotion: PromotionType;
  isNew: boolean;
  categoryId: string;
  minCookTime: number;
  maxCookTime: number;
  restaurant: string;
  name: string;
  imageUrl: string;
}
