import { Link } from "react-router-dom";


export const CategoryItem = ({ item }) => {

  return (
    <div>
      <Link to={`/products/${item.title}`} >
        <div>{item.title}</div>
      </Link>
    </div>
  );
};
