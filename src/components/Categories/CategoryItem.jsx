import { Link } from "react-router-dom";


export const CategoryItem = ({ item }) => {

  return (
    <div>
      <Link to={`/products/${item.category}`} >
        <div>{item.title}</div>
      </Link>
    </div>
  );
};
