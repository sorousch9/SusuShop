import { Anons } from "../components/Anons";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header";
import { NavLink, useLocation } from "react-router-dom";
import { Fragment, useEffect, useState } from "react";
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
  Breadcrumb,
  Pagination,
} from "react-bootstrap";
import { Products } from "../components/Products";

interface Filters {
  size_like: string[];
  price_gte: number;
  price_lte: number;
  inStock: boolean;
  color_like: string[];
  brand: string[];
  category_like: string[];
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
const PAGE_SIZE = 9;
export const ProductList = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filters, setFilters] = useState<Filters>({
    price_gte: 49.99,
    price_lte: 299.99,
    inStock: true,
    size_like: [],
    color_like: [],
    brand: [],
    category_like: [],
    _sort: "id",
    _order: "asc",
  });
  const [totalCount, setTotalCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const location = useLocation().search;

  const totalPages = Math.ceil(totalCount / PAGE_SIZE);
  const buildUrl = (
    baseUrl: string,
    filters: Filters,
    location: string,
    pageSize: number,
    page: number
  ) => {
    const urlParams = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((v) => urlParams.append(key, v));
      } else if (value !== undefined) {
        urlParams.append(key, value.toString());
      }
    });
    urlParams.append("_page", page.toString());
    urlParams.append("_limit", pageSize.toString());
    const url =
      location.length > 0
        ? `${baseUrl}${location}&${urlParams.toString()}`
        : `${baseUrl}?${urlParams.toString()}`;
    return url;
  };

  useEffect(() => {
    const url = buildUrl(
      "http://localhost:5000/products",
      filters,
      location,
      PAGE_SIZE,
      currentPage
    );

    const fetchDataAsync = async () => {
      const response = await fetchData(url);
      if (response !== undefined) {
        setProducts(response.data);
        setTotalCount(response.headers["x-total-count"]);
      }
    };
    fetchDataAsync();
  }, [filters, location, currentPage]);

  const handleSortChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const [columnName, sortOrder] = value.split(" ");
    setFilters({ ...filters, _order: sortOrder, _sort: columnName });
  };
  const handleFiltersChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = event.target;
    setFilters((prevFilters) => {
      switch (name) {
        case "size_like":
        case "color_like":
        case "category_like":
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
    setCurrentPage(1);
  };

  const handleMinPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilters({ ...filters, price_gte: Number(value) });
  };

  const handleMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setFilters({ ...filters, price_lte: Number(value) });
  };

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      <Pagination.Item
        key={i}
        active={i === currentPage}
        onClick={() => setCurrentPage(i)}
      >
        {i}
      </Pagination.Item>
    );
  }

  return (
    <Fragment>
      <Anons />
      <Header />
      <Container>
        <Row>
          <Breadcrumb className="cart-breadcrumb">
            <li className="breadcrumb-item">
              <NavLink to={"/"}>Startseite</NavLink>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <NavLink to={"/products"}>Produktliste</NavLink>
            </li>
          </Breadcrumb>
          <Row
            xs={10}
            md={4}
            lg={4}
            className="d-flex justify-content-center align-items-center "
          >
            <Col>
              <Form>
                <FormGroup className="d-flex justify-content-center align-items-center">
                  <FormLabel
                    htmlFor="sortInput"
                    className="me-2"
                    style={{ minInlineSize: "fit-content" }}
                  >
                    Nach ID sortieren:
                  </FormLabel>
                  <FormControl
                    id="sortInput"
                    as="select"
                    defaultValue="id asc"
                    onChange={handleSortChange}
                    className="me-2"
                  >
                    <option value="id asc">Neueste</option>
                    <option value="id desc">in absteigender</option>
                    <option value="price asc">Mindestpreis</option>
                    <option value="price desc">Höchstpreis</option>
                  </FormControl>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          <Col xs={12} md={3} lg={3}>
            <Form>
              <Row className="mb-3">
                <Col xs={6}>
                  <Form.Label className="form-label">Mindestpreis</Form.Label>
                  <Form.Control
                    type="number"
                    name="minPrice"
                    value={filters.price_gte}
                    onChange={handleMinPriceChange}
                  />
                </Col>
                <Col xs={6}>
                  <Form.Label className="form-label">Höchstpreis</Form.Label>
                  <Form.Control
                    type="number"
                    name="maxPrice"
                    value={filters.price_lte}
                    onChange={handleMaxPriceChange}
                  />
                </Col>
              </Row>

              <FormGroup>
                <FormLabel>Größe:</FormLabel>
                {productsSizeFilter.map((size) => (
                  <Form.Check
                    key={size}
                    label={size}
                    value={size}
                    name="size_like"
                    type="checkbox"
                    id={`size-${size}`}
                    onChange={handleFiltersChange}
                  />
                ))}
              </FormGroup>
              <FormGroup>
                <FormLabel>Farbe:</FormLabel>
                {productsColorFilter.map((color) => (
                  <Form.Check
                    key={color}
                    label={color}
                    value={color}
                    name="color_like"
                    type="checkbox"
                    id={`color-${color}`}
                    onChange={handleFiltersChange}
                  />
                ))}
              </FormGroup>
              <FormGroup>
                <FormLabel>Kategorie:</FormLabel>
                {productsCatFilter.map((category) => (
                  <Form.Check
                    key={category}
                    label={category}
                    value={category}
                    name="category_like"
                    type="checkbox"
                    id={`category-${category}`}
                    onChange={handleFiltersChange}
                  />
                ))}
              </FormGroup>
              <FormLabel>Brand:</FormLabel>
              <FormGroup controlId="modeSelect">
                {productsBrandFilter.map((brand) => (
                  <Form.Check
                    key={brand}
                    label={brand.toLocaleUpperCase()}
                    value={brand}
                    name="brand"
                    type="checkbox"
                    id={`brand-${brand}`}
                    onChange={handleFiltersChange}
                  />
                ))}
              </FormGroup>
            </Form>
          </Col>
          <Col xs={12} md={9} lg={9}>
            {products.length === 0 ? (
              <Row>
                <Col className="noItem">
                  <h2>
                    Unfortunately, no products match your current filter
                    criteria at this time.
                  </h2>
                </Col>
              </Row>
            ) : (
              <Products products={products} />
            )}
            <Pagination className="justify-content-center">
              <Pagination.First
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
              />
              <Pagination.Prev
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              />
              {pages}
              <Pagination.Ellipsis />
              <Pagination.Item
                key={totalPages}
                active={currentPage === totalPages}
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </Pagination.Item>
              <Pagination.Next
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPages}
              />
              <Pagination.Last
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage === totalPages}
              />
            </Pagination>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Fragment>
  );
};
