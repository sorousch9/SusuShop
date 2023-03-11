import { Anons } from "../components/Anons";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchData } from "../hooks/apiService";
import { ProductType } from "../../interfaces/Products";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Container,
  Row,
  Col,
  Dropdown,
  ButtonGroup,
  DropdownButton,
  FormSelect,
} from "react-bootstrap";
import React, { MouseEventHandler } from "react";
import { Products } from "../components/Products";
interface ColorDropdownEvent extends React.MouseEvent<HTMLButtonElement> {
  target: HTMLInputElement;
}
interface Filters {
  size: string[];
  price_gte: number;
  price_lte: number;
  inStock: boolean;
  color: string[];
  brand: string[];
  category: string[];
  _sort: string;
  _order: string;
}
const productsSizeFilter = [
  "US-6",
  "US-7",
  "US-8",
  "US-9",
  "US-10",
  "US-11",
  "US-12",
  "US-12.5",
];
const productsBrandFilter = [
  "lacoste",
  "skechers",
  "adidas",
  "nike",
  "ecco",
  "under-armour",
];
const productsColorFilter = [
  "White",
  "Blue",
  "Black",
  "Pink",
  "Red",
  "Gray",
  "Green",
  "Brown",
  "Purple",
];
const productsCatFilter = [
  "Fitnessschuhe",
  "Sportschuhe",
  "Laufschuhe",
  "Neutralschuhe",
  "Trailrunning-Schuhe",
];
export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState<Filters>({
    price_gte: 0,
    price_lte: 1000,
    inStock: true,
    size: [],
    color: [],
    brand: [],
    category: [],
    _sort: "id",
    _order: "asc",
  });
  console.log(filters);
  useEffect(() => {
    const fetchDataAsync = async () => {
      const params = new URLSearchParams();
      Object.entries(filters).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach((v) => params.append(key, v));
        } else {
          params.append(key, value);
        }
      });
      const response = await fetchData(
        `http://localhost:5000/products?${params.toString()}`
      );
      if (response !== undefined) {
        setProducts(response);
      }
    };
    fetchDataAsync();
  }, [filters]);

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const [columnName, sortOrder] = value.split(" ");
    setFilters({ ...filters, _order: sortOrder, _sort: columnName });
  };
  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => {
      switch (name) {
        case "size":
        case "color":
        case "category":
        case "brand":
          return {
            ...prevFilters,
            [name]: checked
              ? [...prevFilters[name], value]
              : prevFilters[name].filter((s) => s !== value),
          };
        default:
          return { ...prevFilters, [name]: value };
      }
    });
  };

  const handleMinPriceChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { value } = event.target;
    setFilters({ ...filters, price_gte: Number(value) });
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilters({ ...filters, price_lte: Number(value) });
  };

  return (
    <Container>
      <Anons />
      <Header />
      <Row>
        <Row className="breadcrumb">
          <nav className="">
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <span />
                <Link to={"/products"}>Shop</Link>
              </li>
            </ul>
          </nav>
        </Row>
        <Row
          xs={10}
          md={4}
          lg={4}
          className="d-flex justify-content-center align-items-center "
        >
          <Col>
            <Form className="my-4">
              <FormGroup className="d-flex justify-content-center align-items-center">
                <FormLabel
                  htmlFor="sortInput"
                  className="me-2"
                  style={{ minInlineSize: "fit-content" }}
                >
                  Sort by ID:
                </FormLabel>
                <FormControl
                  id="sortInput"
                  as="select"
                  defaultValue="id asc"
                  onChange={handleSortChange}
                  className="me-2"
                >
                  <option value="id asc">Newest</option>
                  <option value="id desc">in Descending</option>
                  <option value="price asc">Lowest Price</option>
                  <option value="price desc">Highest Price</option>
                </FormControl>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Col xs={12} md={3} lg={3}>
          <Form>
            <FormGroup>
              <FormLabel>Size:</FormLabel>
              {productsSizeFilter.map((size) => (
                <Form.Check
                  key={size}
                  inline
                  label={size}
                  value={size}
                  name="size"
                  type="checkbox"
                  id={`size-${size}`}
                  onChange={handleFiltersChange}
                />
              ))}
            </FormGroup>
            <FormGroup>
              <FormLabel>Color:</FormLabel>
              {productsColorFilter.map((color) => (
                <Form.Check
                  key={color}
                  inline
                  label={color}
                  value={color}
                  name="color"
                  type="checkbox"
                  id={`color-${color}`}
                  onChange={handleFiltersChange}
                />
              ))}
            </FormGroup>
            <FormGroup>
              <FormLabel>Color:</FormLabel>
              {productsCatFilter.map((category) => (
                <Form.Check
                  key={category}
                  inline
                  label={category}
                  value={category}
                  name="category"
                  type="checkbox"
                  id={`category-${category}`}
                  onChange={handleFiltersChange}
                />
              ))}
            </FormGroup>
            <FormLabel>Color:</FormLabel>
            <FormGroup controlId="modeSelect">
              {productsBrandFilter.map((brand) => (
                <Form.Check
                  key={brand}
                  inline
                  label={brand}
                  value={brand}
                  name="brand"
                  type="checkbox"
                  id={`brand-${brand}`}
                  onChange={handleFiltersChange}
                />
              ))}
            </FormGroup>
          </Form>
          <Form>
            <DropdownButton title="Filter by Size">
              {productsSizeFilter.map((size) => (
                <Dropdown.Item key={size}>
                  <input
                    onChange={handleFiltersChange}
                    type="checkbox"
                    name="size"
                    value={size}
                    checked={filters.size.includes(size)}
                  />
                  {size}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </Form>
        </Col>
        <Col xs={12} md={9} lg={9}>
          <Products products={products} />
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};
