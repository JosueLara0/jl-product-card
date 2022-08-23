//? first pattern

//* components
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductButtons } from "./ProductButtons";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";
//* interfaces
import { ProductCardHOCProps } from "../interfaces/interfaces";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

//? second pattern

//* components
export * from "./ProductCard";
export { ProductButtons } from "./ProductButtons";
export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";
