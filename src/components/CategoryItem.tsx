import { Link } from "react-router-dom";
interface CatType {
  id: number;
  title: string;
}

type Props = {
  item: CatType;
};
export const CategoryItem = ({ item }: Props) => {
  return (
    <div>
      <Link to={`/products/${item.title}`}>
        <div>{item.title}</div>
      </Link>
    </div>
  );
};
