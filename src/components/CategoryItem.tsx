import { Link } from "react-router-dom";

interface CatType {
  id: number;
  title: string;
  category: string;
  value: string;
}

type Props = {
  item: CatType;
};

export const CategoryItem = ({ item }: Props) => {
  return (
    <div>
      <Link
        style={{
          color: "inherit",
          textDecoration: "inherit",
        }}
        to={`/products?${item.category}=${item.value}`}
      >
        <div>{item.title}</div>
      </Link>
    </div>
  );
};
